const server = require("express").Router();
const { Products, Series } = require("../../db");

server.delete("/:id", (req, res, next) => {
  const id = req.params.id;

  Products.findAll({
    where: { seriesId: id },
  }).then((products) => {
    if (products.length > 0) {
      return res.send(products);
    } else {
      Series.destroy({
        where: { id: id },
      }).then((resp) => {
        if (resp === 0) {
          return res.send("No existe la Serie");
        } else {
          return res.send("Serie eliminada");
        }
      });
    }
  });
});

module.exports = server;
