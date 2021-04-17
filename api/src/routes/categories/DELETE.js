const server = require("express").Router();
const { Products, Categories } = require("../../db");

server.delete("/:id", (req, res) => {
  const id = req.params.id;
 

  Categories.findAll({
    where: { id: id },
    include: Products,
  }).then((category) => {
    if (category[0].products.length > 0) {
      return res.json(category[0].products);
    } else if (category[0].products.length === 0) {
      Categories.update(
        {
        available: false
        },
        {
          where: { id: id },
        },
      );
      return res.status(205).json({ message : "Categoría Eliminada"});
    }
  });
});

module.exports = server;
