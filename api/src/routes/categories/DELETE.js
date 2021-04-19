const server = require("express").Router();
const { Products, Categories } = require("../../db");

server.delete("/:id",async (req, res) => {
  const id = req.params.id;
 try{
  const category= await  Categories.findAll({
      where: { id: id },
      include: Products,
  })
  if (category[0].products.length > 0) {
      return res.status(200).json(category[0].products);
  }else if (category[0].products.length === 0) {
      Categories.update(
        { available: false },
        { where: { id: id }, },
      );
      return res.status(205).json({ message : "Categoría Eliminada"});
    }
  }catch(error) {
      console.log(error)
      res.status(500).json({ message: "Internal server error", status: 500})
  }
});

module.exports = server;
