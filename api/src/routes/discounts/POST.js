const server = require("express").Router();
const { Discounts, Products, Authors, Categories } = require("../../db");

server.post("/", async (req, res) => {
  const { products, percent } = req.body;

  try {
    Promise.all(
      products.map(async (productId) => {
        const findProductDiscount= await Discounts.findOne({
         where: { productId: productId }})

        if (!findProductDiscount) {
           Discounts.create({
            percent: percent,
            productId: productId,
          });
        }
        if (findProductDiscount) {
           Discounts.update(
            { percent: percent },
            { where: { productId: productId } }
          );
        }
      }
      )
    ).then(async () => {
        let products = await Products.findAll({
            attributes: [
              "id",
              "name",
              "description",
              "price",
              "available",
              "fileLink",
              "preview",
              "score",
              "stock",
              "initialStock",
            ],
            include: [{ model: Authors }, { model: Categories }, { model: Discounts },],
          });

          return res.status(200).json(products)
    });
 } catch (error) {
    res.status(500).json({ message: "server internal problem" });
  }
});

module.exports = server;
