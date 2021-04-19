const server = require("express").Router();
const { Roles } = require("../../db");

server.get("/", async (req, res) => {
  try {
    let roles = await Roles.findAll();
      res.json(roles);
  } catch (err) {
    res.status(500).json({message:"No se pudieron cargar los roles", status:500});
  }
});

module.exports = server;