const server = require("express").Router();
const { Users, Orders, Reviews } = require("../../db");

server.put("/:id", async (req, res) => {

    const { comment, score } = req.body;
    const { id } = req.params;

    try {

        const reviewDelete = await Reviews.update(
            {
                comment,
                score
            },
            {
                where: { id },
                returning: true,
                plain: true
            }, 
        )
        res.status(200).json(reviewDelete[1])
        
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error", status: 500 })
    }
})

module.exports = server;
