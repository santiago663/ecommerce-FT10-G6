const server = require("express").Router();
const { Authors } = require("../../db");

server.get("/", async (req, res) => {
  try {
    let autors = await Authors.findAll();
    autors === null
      ? res.send("hubo un error al encontrar los autores")
      : res.json(autors);
  } catch (err) {
    res.status(401).send(err.message);
  }
});

module.exports = server;
