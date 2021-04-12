const server = require("express").Router();
const { Authors } = require("../../db");

server.post("/", async (req, res) => {
  const { name, email } = req.body;

  await Authors.findOrCreate({
    where: {
      name: name,
      email: email,
    },
  })
    .then((newAuthor) => {
      res.json(newAuthor[0]);
    })
    .catch((err) => {
      res.status(401).send(err.message);
    });
});

module.exports = server;
