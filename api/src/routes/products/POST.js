const server = require("express").Router();
const { Products } = require("../../db");

server.post("/", async (req, res) => {

  const {
    name,
    description,
    price,
    available,
    fileLink,
    preview,
    stock,
    initialStock,
    categories,
    authorId,
    seriesId,
  } = req.body;

  try {
    var products = await Products.findOrCreate({

      where: {
        name: name,
        description: description,
        price: price,
        available: available,
        fileLink: fileLink,
        preview: preview,
        stock: stock == 0 ? null : stock ,
        initialStock: initialStock == 0 ? null : initialStock,
        authorId: authorId,
        seriesId: seriesId,
      },
    })

    if (!categories) {
      return res.status(200).json(products[0]);
    }    
    else {
      categories.forEach((id) => products[0].addCategories(id));
      return res.status(200).json(products[0]);
    }
  } 
  catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal server error", status: 500 })
  }
})


module.exports = server;