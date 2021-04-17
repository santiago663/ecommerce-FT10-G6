const server = require("express").Router();
const { Roles } = require("../../db");

server.get("/", async (req, res) => {
  try {
    let roles = await Roles.findAll();
    
      res.json(roles);
  } catch (err) {
    res.status(401).send(err.message);
  }
});

module.exports = server;