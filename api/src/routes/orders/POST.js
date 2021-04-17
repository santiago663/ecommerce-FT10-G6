const server = require("express").Router();
const { Orders } = require("../../db");

server.post("/", async (req, res) => {

    const { total, userId, price, productId, id } = req.body;

    try {

        const order = {
            date: new Date(),
            total: total,
            state: "open",
            userId: userId,
        }

        var idOrder = id
        var newOrder;
        var newOrder2;

        for (var i = 0; i < productId.length; i++) {

            if (i === 0 && !id) {

                newOrder = await Orders.create(order);

                await newOrder.addProducts(productId[i], {
                    through: { price: price[i] }
                })
                idOrder = newOrder.id
            }

            else {
                newOrder2 = await Orders.findOrCreate({

                    where: {
                        id: idOrder
                    },
                    defaults: order
                });
                await newOrder2[0].addProducts(productId[i], {
                    through: { price: price[i] }
                })
            }
        }

        if (newOrder2[1] === false) {
            res.status(200).json({ message: "product added successfully", id: newOrder2[0].id })
        }
        else {
            res.status(200).json({ message: "order created successfully", id: newOrder2[0].id })
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Internal server error" })
    }
})

module.exports = server;
