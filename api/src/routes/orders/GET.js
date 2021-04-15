const server = require("express").Router();
const { Orders, Products, User } = require("../../db");

server.get("/users/:idUser/cart", async (req, res) => {

    const { idUser } = req.params

    try {
        var cart = await Orders.findAll({

            where: {
                userId: idUser,
                state: "open"
            },

            include: [{ 
                model: Products,
                through: { attributes: [] },
            }],  

        })

        res.status(200).json( cart[0].products )


    } catch (err) {
        console.log(err)
        res.status(401).send({ message: "Internal server error" });
    }
});

module.exports = server;