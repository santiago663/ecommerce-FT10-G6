const server = require("express").Router();
const { Users, Orders, Products, Wishlists } = require("../../db");
const stateOrder = require ('../../services/stateOrder.js');
const discountProduct = require ('../../services/discountProduct');
const sengridEmail = require ('../../services/sengridEmail.js');


server.post("/signup", async(req, res) => {

    let { name, orderId, email, state } = req.body;

    if(name === undefined){
        name = "Dear buyer"
    }
    try{
        if(!email || !name || !orderId) return res.status(422).json({message:"please add all the fields"});
        
        var user = await Users.findOne({
            where:{email:email}
        })
        var orders = await Orders.findOne({
            where:{
                userId: user.id,
                id: orderId,
                state: state
            }, include: [Products]
        })
        if(orders === null || !orders.products){
            
            res.status(422).json({message:`the user does not have an order in ${state} status`});
        }
        else{

            var ordIdDateStateTotal = []

            let orderID = orders.id;
            let date = orders.date;       
            let state = orders.state;
            let total = orders.total; 
            ordIdDateStateTotal.push(orderID, date, state, Number(total))

            let prodsImgPrice = []
            let product ={}

            if(ordIdDateStateTotal.length === 4){
                var i = 0
                while(orders.products.length > i ){
                    
                    if(orders.products[i]){

                        product = {
                            product:orders.products[i].name,
                            preview: orders.products[i].preview,
                            image: orders.products[i].fileLink,
                            price: Number(orders.products[i].price),
                        }
                        prodsImgPrice.push(product)
                    }
                    i++
                }
            }
          
            let msgBody = (stateOrder(name, ordIdDateStateTotal, prodsImgPrice, email))

            sengridEmail(msgBody)
            //SENDGRID MANDAR EMAIL, NO BORRAR, SOLO 100 EMAILS POR DIA

            return res.status(200).json({message:"email enviado exitosamente"}) 
        }
          
    }catch(error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error", status: 500})
    }
});


server.put("/productOfert", async (req, res) => {

    const { product, price } = req.body;
    
    if(product.length === 0 || !price ) return res.status(422).json({message:"please add all the fields"});

    Promise.all(
        product.map((ID) =>{
        
            var ofertProducts = Users.findAll({

                include: [{model:Orders, 
                            where:{
                                state:"open",
                                
                            }, include:[{model:Products, where:{
                                id:ID,
                                available:true
                            }}]
                        }
                ]
            })
            return ofertProducts
            
        })
    )
    .then(r1=>{
        let f1 =[]
        r1.map(g1 => g1.map(h1 =>{
                let obj1= {
                    name:h1.name,
                    email:h1.email,
                    productId:h1.orders[0].products[0].id,
                    productName:h1.orders[0].products[0].name,
                    preview:h1.orders[0].products[0].preview,
                    price:h1.orders[0].products[0].price,
                }
                f1.push(obj1)
            })
        )

        Promise.all(
            product.map((ID) =>{
        
                var ofertProducts2 = Users.findAll({

                    include: [{model: Wishlists,
                         where:{
                            available:true,
                            
                        },include:[{model:Products, where:{
                            id:ID,
                            available:true
                        }}]
                    }]
                })

                return ofertProducts2
            })
        )

        .then(r2=>{
            let f2 =[]
            r2.map(g2 => g2.map(h2 =>{
                
                    let obj2= {
                        name:h2.name,
                        email:h2.email,
                        productId:h2.wishlist.products[0].id,
                        productName:h2.wishlist.products[0].name,
                        preview:h2.wishlist.products[0].preview,
                        price:h2.wishlist.products[0].price,
                    }
                    f2.push(obj2)
                    
                })
            )

            var f1f2 = f1.concat(f2)
    
            let personasMap = f1f2.map(persona => {
                return [JSON.stringify(persona), persona]
            });
            let personasMapArr = new Map(personasMap); 
            
            let ulti = [...personasMapArr.values()]; 
            
            ulti.map(prices =>{

                var discount=(prices.price - (prices.price * price /100));
                prices["discount"] =discount

            })


            var porEmail =[];
            var aux = []
            ulti.length !==0 && ulti.map(j=>{

                if(porEmail.length === 0){
                    let obj3={
                        name: j.name,
                        email:j.email,
                        products:[]
                    }
                    porEmail.push(obj3);
                    aux.push(j.email);
                }
                if(!aux.includes(j.email) ){
                    let obj3={
                        name: j.name,
                        email:j.email,
                        products:[]
                    }
                    porEmail.push(obj3);
                    aux.push(j.email);
                }
            
                porEmail.map(k =>{

                    if(k.email === j.email){
                        var products ={
                            productId:j.productId,
                            productName: j.productName,
                            preview:j.preview,
                            price:j.price,
                            discount: j.discount,

                        }
                        k.products.push(products)
                    }
                })
            })

            porEmail.map(x => {
                let msgBody = (discountProduct(x))
                console.log(msgBody)
            
                sengridEmail(msgBody)
                //SENDGRID MANDAR EMAIL, NO BORRAR, SOLO 100 EMAILS POR DIA
            })
            
            res.status(200).json(porEmail)
        })
        
    })

})


module.exports = server;
