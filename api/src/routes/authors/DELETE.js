const server = require("express").Router();
const { Products, Authors } = require("../../db");

server.delete("/:id", (req, res, next) => {
  const id = req.params.id;

  Products.findAll({
    where: { seriesId: id },
  }).then((products) => {
    if (products.length > 0) {
      return res.json(products);
    } else {
      Authors.destroy({
        where: { id: id },
      }).then((resp) => {
        if (resp === 0) {
          return res.send("No existe el Autor");
        } else {
          return res.send("Autor eliminado");
        }
      });
    }
  });
});

module.exports = server;
