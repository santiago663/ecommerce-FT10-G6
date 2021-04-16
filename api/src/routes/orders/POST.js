const server = require("express").Router();
const { Orders, productOrder } = require("../../db");

server.post("/", async (req, res) => {

    const { total, userId, price, productId, id } = req.body;

    try {

        const order = {
            date: new Date(),
            total: total,
            state: "open",
            userId: userId,
        }

        if (!id) {
           
            const newOrder = await Orders.create(order);

            await newOrder.addProducts(productId, {
                through: { price: price }
            })
            return res.status(200).json({ message: "order created successfully", id: newOrder.id })
        }
        else {
            const newOrder = await Orders.findOrCreate({

                where: {
                    id: id
                },
                defaults: order
            });

            await newOrder[0].addProducts(productId, {
                through: { price: price }
            })

            if (newOrder[1] === false) {
                res.status(200).json({ message: "product added successfully", id: newOrder[0].id })
            }
            else {
                res.status(200).json({ message: "order created successfully", id: newOrder[0].id })
            }
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Internal server error" })
    }
})


module.exports = server;