const server = require("express").Router();
const { Products, Categories } = require("../../db");

server.delete("/:id", (req, res) => {
  const id = req.params.id;

  Products.findAll({
    where: { id: id },
    include: Categories,
  }).then((product) => {
    if (product.length > 0) {
      Products.destroy({
        where: { id: id },
      });

      return res.send("Producto Eliminado");
    } else {
      return res.send("El producto no existe en la Base de Datos");
    }
  });
});

server.delete("/:idProduct/category/:idCategory", (req, res) => {
  const { idProduct, idCategory } = req.params;

  Products.findOne({
    where: { id: idProduct },
  })
    .then((product) => {
      if (product === null) {
        return res.status(401).send("Product does not exists");
      }
      product.removeCategories([idCategory]).then((resp) => {
        if (resp === 0) {
          return res.send("Product does not belong to this category");
        } else {
          return res.status(200).send("Category deleted");
        }
      });
    })
    .catch((e) => console.log(e));
});

module.exports = server;