const server = require("express").Router();
const { Wishlists, Products } = require("../../db");
const { Op } = require('sequelize');

server.put("/", async (req, res) => { 
    
    const { userId, productId } = req.body

    try { 
          const wishlistResult = await Wishlists.findOne({
            where: {
              [Op.and]: [{ userId }],
            },
            include: [{ model: Products, through: { attributes: [] } }],
          });
    
          let removeWishlistProduct = await wishlistResult.removeProducts(productId);    
    
          res.status(200).json({ remove: true, message: removeWishlistProduct ? "Product deleted" : "Already deleted" });    
        
      } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error" });
      }

})

module.exports = server;
