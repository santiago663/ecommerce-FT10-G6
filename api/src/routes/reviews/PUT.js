const server = require("express").Router();
const { Users, Orders, Reviews } = require("../../db");

server.put("/:id", async (req, res) => {

    const { comment, score, productId } = req.body;
    const { id } = req.params;

    try {

        await Reviews.update(
            { comment, score },
            { where: { id } },
        )

        const response = await Reviews.findAll({
            where: { productId },
            include: [{ model: Users }]
        })
        res.status(200).json(response)

    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error", status: 500 })
    }
})

module.exports = server;
