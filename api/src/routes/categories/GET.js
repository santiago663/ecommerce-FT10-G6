const server = require("express").Router();
const { Categories } = require("../../db");

server.get("/", async (req, res) => {
  try {
    let category = await Categories.findAll({
      where:{ available: true}
    });
    category === null
      ? res.json({message:"hubo un error en la búsqueda categorías"})
      : res.json(category);
  } catch (err) {
    res.status(401).json({ message:err.message});
  }
});

module.exports = server;
