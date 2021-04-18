const server = require("express").Router();
const { Orders } = require("../../db");

server.put("/", async (req, res) => {

    const orderState = { open: 1, pending: 2, cancelled: 3, completed: 3 }
    const { id, state } = req.body;   

    try {
        let actualOrder = await Orders.findOne({
            where: {
                id
            }            
        })

        if (orderState[actualOrder.state] < orderState[state]) {
        await Orders.update(
            {
                state,
            },
            {
                where: {
                    id
                }
            }
        );
        return res.status(200).json({message: `Order status changed to ${state}`});
    }
    else {
        return res.status(400).send({ message: "The new order status is invalid" })
    }
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Internal server error" })
    }
})

module.exports = server;
