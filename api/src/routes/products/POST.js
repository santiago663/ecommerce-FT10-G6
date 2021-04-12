const server = require("express").Router();
const { Products } = require("../../db");

server.post("/", (req, res) => {
  const {
    name,
    description,
    price,
    available,
    fileLink,
    preview,
    categories,
    authorId,
    seriesId,
  } = req.body;

  Products.findOrCreate({
    where: {
      name: name,
      description: description,
      price: price,
      available: available,
      fileLink: fileLink,
      preview: preview,
      authorId: authorId,
      seriesId: seriesId,
    },
  })
    .then((newProduct) => {
      if (categories === null || categories === undefined) {
        return res.json(newProduct[0]);
      }
      categories.forEach((id) => newProduct[0].addCategories(id));
      return res.json(newProduct[0]);
    })
    .catch((err) => {
      res.status(401).send(err.message);
    });
});

module.exports = server;