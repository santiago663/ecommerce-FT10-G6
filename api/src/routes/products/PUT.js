const server = require("express").Router();
const { Products } = require("../../db.js");

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
