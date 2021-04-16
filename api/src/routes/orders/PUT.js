const server = require("express").Router();
const { Orders } = require("../../db");

server.put("/", async (req, res) => {

    const { id, state } = req.body;

    try {

        let order = await Orders.update(
            {
                state,
            },
            {
                where: {
                    id: id,
                }
            }
        );

        res.status(200).json(order);

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Internal server error" })
    }
})

module.exports = server;
