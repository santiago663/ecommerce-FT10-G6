const server = require("express").Router();
const { Orders, Products } = require("../../db");

server.delete("/users/:idUser/cart", async (req, res) => {

    const { idUser } = req.params

    try {
        let cart = await Orders.findOne({
            where: {
                userId: idUser,
                state: "open"
            },

            include: [{
                model: Products,
                through: { attributes: [] },
            }],
        })

        if (!cart) return res.status(400).json({ message: "User doesn't exist" })

        let array = cart.products.map(prod => prod.id)

        cart.removeProducts(array)
        
        res.status(200).json({ message: "Cart is empty" })

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = server;