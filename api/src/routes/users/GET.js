const server = require("express").Router();
const { Users, Roles } = require("../../db");

server.get("/", async (req, res) => {

    const { email } = req.query

    if (email) {
        try {
            var usersLogin = await Users.findOne(
                {
                    where: { email },
                    include: [Roles]
                }
            )
     

            return res.status(200).json(usersLogin)
        } catch (error) {
            console.log(error)
            return res.status(500).send({ message: "Internal server error", status: 500 })
        }
    }
    else {
        try {
            var users = await Users.findAll(
                {
                    include: [{
                        model: Roles
                    }]
                },
            )
            res.status(200).json(users)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: "Internal server error", status:500 })
        }
    }
});

server.get("/:id", async (req, res) => {

    const { id } = req.params

    try {
        var users = await Users.findOne(
            {
                where: { id },
                include: [Roles]
            }
        )        

        res.status(200).json(users)

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Internal server error", status: 500 })
    }
});

module.exports = server;
