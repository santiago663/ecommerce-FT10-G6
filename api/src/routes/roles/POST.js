const server = require("express").Router();
const { Roles } = require("../../db");

server.post("/", async (req, res) => {
  const { description } = req.body;
  console.log(description)

  await Roles.findOrCreate({
    where: {
      description,
    },
    defaults: {
      available: true
    } 
  })
    .then((newRol) => {
      res.json(newRol[0]);
    })
    .catch((err) => {
      res.status(401).send(err.message);
    });
});

module.exports = server;