const server = require("express").Router();
const { Products } = require("../../db.js");

server.get("/", (req, res, next) => {
  Products.findAll()
    .then((products) => {
      res.send(products);
    })
    .catch((error) => {
      console.error(error.message);
    });
});

server.get("/:id", (req, res) => {
  const id = req.params.id;

  Products.findByPk(id)
    .then((resp) => {
      if (resp === null) {
        return res.send("Producto inexistente");
      }
      return res.json(resp);
    })
    .catch((error) => {
      console.error(error.message);
    });
});

module.exports = server;
