const server = require("express").Router();
const { Roles } = require("../../db");

server.delete("/:id", (req, res) => {
  const id = req.params.id;
  
      Roles.destroy(
        { where: { id: id }, },
      );
      return res.status(205).json({ message : "Deleted Rol"});
    });
  

module.exports = server;