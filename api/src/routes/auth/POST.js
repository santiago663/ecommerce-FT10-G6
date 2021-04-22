const server = require("express").Router();
const sgMail = require('@sendgrid/mail')
const { Users, Orders, Products } = require("../../db");

// sgMail.setApiKey("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");

sgMail.setApiKey("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");

server.post("/signup", async(req, res) => {

    const { name, orderId, email, state } = req.body;

    let dataOrder = []
    let product ={}
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
        if(orders.products.length === 0){
            res.status(422).json({message:"the order has no products"});
        }
        else{
            
            let orderID = orders.id;
            let total = orders.total;
            let date = orders.date;
            let state = orders.state;
    
            var i = 0
            while(orders.products.length > i ){
                
                if(orders.products[i]){

                    product= {
                        product:orders.products[i].name,
                        image: orders.products[i].preview,
                        price:orders.products[i].price,
                    }
                    dataOrder.push(product)
                }
                i++
            }
            const msg = {
                
                to: "lls28programacion@hotmail.com",
                from: "lu_23-7-92@hotmail.com",
                subject: "Testing Node Emailulitma11?",
                html: `
              
                <div>
                    <h2>${name}: DigitalArt te informa que tu orden ID:${orderID}, con fecha de creación ${date} se encuentra en estado ${state}</h2>
                        <table width="300" height="50" align="center" >
                            <tr>
                                <h2>Products:</h2>
                    ${dataOrder.map((m) => {
                        return(`
                            <div>
                                <table width="300" height="50" align="center" style="background:#FFFFFF; padding:15px 15px 15px 15px; border:solid 2px #E5E5E5; border-bottom:5; width:48%">
                                    <tr bgcolor="#6a7da5" >
                                        <td >
                                            <img src="${m.image}" alt="${m.product} style="border:solid 1px #E5E5E5; border-radius:5" height="125" align="center" />
                                        </td>
                                        <th align="center" style="padding: 0 20px 20px 0;"height="115"  style="padding: 0 20px 20px 0;">
                                            producto:${m.product}, precio: $${m.price}
                                        </th>
                                    </tr>
                                    
                                </table>
                            </div>
                            `
                        )
                    })}
                                <h2>Valor Total de la compra: $${total}</h2>
                            </tr>
                        </table>
                    
                    <h2>Gracias por tu Compra</h2>
                </div>
                
                `
            }
            sgMail.send(msg, function(err, info){
               if(err){
                   console.log("Email Not Send",err.response.body.errors)
               } 
               else{
                   console.log("Email Send",info)
               }
            })
         
            // var message = await transporter.sendMail({
            //     to: user.email,
            //     from:"no-reply@onsta.com",
            //     subject: "signup success",
            //     html:`<h1>algo${orderID},${total}</h1>`
            // })

            return res.status(200).json({message:"email enviado exitosamente"}) 
        }
          
    }catch(error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error", status: 500})
    }
});

module.exports = server;
