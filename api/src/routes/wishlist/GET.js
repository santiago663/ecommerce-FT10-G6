const server = require("express").Router();
const { Users, Wishlists, Products, Discounts } = require("../../db");

server.get("/", async (req, res) => {

    try {

        const wishlist = await Wishlists.findAll({
            include: [
                {
                    model: Users,
                    attributes: []
                },
                {
                    model: Products,
                    through: { attributes: [] },
                    include: [{ 
                        model: Discounts,
                    }]
                },
            ],
        })

        res.json(wishlist)

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", status:500});
    }

});

server.get("/:userId", async (req, res) => {

    const { userId } = req.params

    try {

        const userWishlist = await Wishlists.findOrCreate({
            where: {
                userId: userId,
                available: true
            },
            include: [
                {
                    model: Users,
                    attributes: []
                },
                {
                    model: Products,
                    through: { attributes: [] },
                    include: [{ 
                        model: Discounts,
                    }]
                },
                
            ],
        })

        res.json(userWishlist[0])

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", status:500});
    }

});

module.exports = server;
