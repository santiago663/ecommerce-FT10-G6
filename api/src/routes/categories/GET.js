const server = require("express").Router();
const { Categories } = require("../../db");

server.get("/", async (req, res) => {
  try {
    let category = await Categories.findAll({
      where:{ available: true}
    });
    category === null
      ? res.status(402).json({message:"hubo un error en la búsqueda categorías",status: 402})
      : res.json(category);
  } catch (err) {
    res.status(500).json({ message:err.message, status:500});
  }
});

module.exports = server;
