const server = require("express").Router();
const { Products } = require("../../db");

server.put("/:idProduct/category/:idCategory", (req, res) => {
  const { idProduct, idCategory } = req.params;

  Products.findByPk(idProduct)
    .then((product) => {
      if (product === null) {
        return res.send("Product does not exists");
      }
      product
        .addCategories(idCategory)
        .then((p) => res.status(200).json(product))
        .catch((err) => {
          return res.status(250).send(err.parent.detail);
        });
    })
    .catch((error) => {
      console.error(error.message);
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
        res.status(201).json(resp2[0]);
      })
      .catch(() => {
        res.status(401).send("Producto inexistente");
      });
  });
});

module.exports = server;
