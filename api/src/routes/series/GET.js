const server = require("express").Router();
const { Series } = require("../../db");

server.get("/", async (req, res) => {
  try {
    let series = await Series.findAll();
    series === null
      ? res.send("hubo un error al buscar series")
      : res.json(series);
  } catch (err) {
    res.status(401).send(err.message);
  }
});

module.exports = server;
