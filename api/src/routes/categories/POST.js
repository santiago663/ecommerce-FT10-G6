const server = require("express").Router();
const { Categories } = require("../../db");

server.post("/", async (req, res) => {
  const { name } = req.body;

  await Categories.findOrCreate({
    where: {
      name: name,
    },
    defaults: {
      available: true
    } 
  })
    .then((newCategory) => {
      res.json(newCategory[0]);
    })
    .catch((err) => {
      res.status(401).send(err.message);
    });
});

module.exports = server;
