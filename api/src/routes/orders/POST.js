const server = require("express").Router();
const { Orders, Users,Roles } = require("../../db");

server.post("/", async (req, res) => {

    const { total, userId, price, productId, id,name, email } = req.body;
    try {

        const order = {
            date: new Date(),
            total: total,
            state: "open",
            userId: userId,
        }
        let idOrder = id
        let newOrder;
        let newOrder2;
        let resultOrder;

        if(!userId){
            let roleGuest = await Roles.findOne({
                where: {
                    description: "Guess"
                }
            })
            const guest = await Users.findOrCreate({
                where: { email:email },
                defaults: {
                    name,
                    email, 
                    available: false,
                    roleId: roleGuest.id,
                }
            })
            order.userId = guest[0].id
        }
        for (let i = 0; i < productId.length; i++) {

            if (i === 0 && !id) {
                newOrder = await Orders.create(order);

                await newOrder.addProducts(productId[i], {
                    through: { price: price[i] }
                })
                idOrder = newOrder.id
            }
            else {
                newOrder2 = await Orders.update(
                    order,{
                        where: { id: idOrder },
                        returning : true,
                     }
                );
                resultOrder = await Orders.findOne({
                    where:{ id:idOrder},
                })
                
                await resultOrder.addProducts(productId[i], {
                    through: { price: price[i] }
                })
            }
        }
        if(!resultOrder && newOrder){
            return res.status(200).json({message:"order created successfully",id: newOrder.id})
        }

        if (resultOrder) {
            res.status(200).json({ message: "product added successfully", id: resultOrder.id })
        }
        else {
            res.status(200).json({ message: "order created successfully", id: resultOrder.id })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error",status:500 })
    }
})

module.exports = server;
