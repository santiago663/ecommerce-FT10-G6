const server = require("express").Router();
const { Products } = require("../../db");

server.put("/:idProduct/category/:idCategory", (req, res) => {
  const { idProduct, idCategory } = req.params;

  Products.findByPk(idProduct)
    .then((product) => {
      if (product === null) {
        return res.status(400).json({ message: "That product doesn't exist", status: 400 });
      }
      product
        .addCategories(idCategory)
        .then((p) => res.status(200).json(product))
        .catch((error) => {
          console.log(error)
          res.status(500).json({ message: "Internal server error", status: 500 })
        });
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({ message: "Internal server error", status: 500 })
    });
});

server.put("/:id", (req, res) => {
  const idProduct = req.params.id;
  const {
    name,
    description,
    price,
    available,
    fileLink,
    preview,
    stock,
    initialStock,
    authorId,
    seriesId,
  } = req.body;

  Products.update(
    {
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
    {
      where: {
        id: idProduct,
      },
    }
  ).then(() => {
    Products.findOrCreate({
      where: {
        id: idProduct,
      },
    })
      .then((resp2) => {
        res.status(200).json(resp2[0]);
      })
      .catch((error) => {
        console.log(error)
        res.status(500).json({ message: "Internal server error", status: 500 })
      });
  });
});

server.put("/review/:idProduct/", async (req, res) => {

  const { idProduct } = req.params;
  const { score } = req.body

  try {

    const product = await Products.update(
      { score },
      { where: { id: idProduct } }
    )

    res.json(product)

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal server error", status: 500 })
  }

});

server.put("/stock/edit", async (req, res) => {

  const { product, stock } = req.body

  try {

    for (var i = 0; i < product.length; i++) {
      var available = true
      if (stock[i] == 0) {
        stock[i] = null
        available = false
      }
     await Products.update(
        { stock: stock[i], available: available },
        { where: { id: product[i] } }
      )
    }

    res.json({message: "Stock moddified"})

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal server error", status: 500 })
  }

});

module.exports = server;
