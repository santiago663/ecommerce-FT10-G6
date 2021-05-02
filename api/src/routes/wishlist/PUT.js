const server = require("express").Router();
const { Wishlists, Products } = require("../../db");

server.put("/delete", async (req, res) => {

    const { userId, productId } = req.body

    try {
        const wishlistResult = await Wishlists.findOne({
            where: { userId },
            include: [{ model: Products, through: { attributes: [] } }],
        });

        await wishlistResult.removeProducts(productId);

        const wishlistResultResp = await Wishlists.findOne({
            where: { userId },
            include: [{ model: Products, through: { attributes: [] } }],
        });

        res.status(200).json(wishlistResultResp);

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error" });
    }

})

server.put("/add", async (req, res) => {

    const { userId, productId } = req.body

    try {
        const wishList = { available: true, userId: userId }
        let wish;
        let resultWish

        for (let i = 0; i < productId.length; i++) {

            wish = await Wishlists.update(wishList, {
                where: { userId },
                returning: true,
            });

            resultWish = await Wishlists.findOne({
                where: { userId },
            });
            await resultWish.addProducts(productId[i])
        }

        const wishlistResultResp = await Wishlists.findOne({
            where: { userId },
            include: [{ model: Products, through: { attributes: [] } }],
        });

        res.status(200).json(wishlistResultResp);

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error" });
    }

})

module.exports = server;
