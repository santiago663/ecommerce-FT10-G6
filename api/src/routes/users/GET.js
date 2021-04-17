const server = require("express").Router();
const { Users } = require("../../db");

server.get("/", async (req, res) => {

    const { email } = req.query

    if (email) {
        try {
            var usersLogin = await Users.findOne(
                {
                    where: { email }
                }
                )
            return res.status(200).json(usersLogin)
        } catch (error) {
            console.log(error)
            return res.status(500).send({ message: "Internal server error" })
        }
    }
    else {
    try {
        var users = await Users.findAll({
            attributes:
                [
                    "id",
                    "name",
                    "email",
                    "phone_Number",
                    "location_id",
                    "roleId",
                    "available",
                ]
        })
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Internal server error" })
    }
}
});


server.get("/:id", async (req, res) => {

    const { id } = req.params

    try {
        var users = await Users.findOne(
            {
                where: { id }
            }
            )
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Internal server error" })
    }
});




module.exports = server;