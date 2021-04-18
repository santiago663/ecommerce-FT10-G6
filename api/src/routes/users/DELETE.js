const server = require("express").Router();
const { Users } = require("../../db");

server.delete("/:id", async (req, res) => {

    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: "Data is missing", status: 400 })
    }

    try {
        var user = await Users.update(
            {
                available: false
            },
            {
                where: { id: id },
                returning: true,
                plain: true,
            }
        )
        res.status(200).json({ message: "User deleted", user: user[1] })

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Internal server error", status: 500 })
    }
});

module.exports = server;