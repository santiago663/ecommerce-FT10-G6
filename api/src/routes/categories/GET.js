const server = require("express").Router();
const { Categories } = require("../../db");

server.get("/", async (req, res) => {
  try {
    let category = await Categories.findAll();
    category === null
      ? res.send("hubo un error en la búsqueda categorías")
      : res.json(category);
  } catch (err) {
    res.status(401).send(err.message);
  }
});

module.exports = server;
