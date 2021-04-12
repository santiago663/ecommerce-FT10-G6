const server = require("express").Router();
const { Series } = require("../../db");

server.post("/", (req, res) => {
  const { name, description } = req.body;

  Series.findOrCreate({
    where: {
      name: name,
      description: description,
    },
  })
    .then((newSerie) => {
      res.json(newSerie[0]);
    })
    .catch((err) => {
      res.status(401).send(err.message);
    });
});

module.exports = server;
