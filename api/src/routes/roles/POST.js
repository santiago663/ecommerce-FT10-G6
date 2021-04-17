const server = require("express").Router();
const { Roles } = require("../../db");

server.post("/", async (req, res) => {
  const { description } = req.body;
  
try{
  const newRole = await Roles.findOrCreate({
    where: { description, },
    defaults: { available: true } 
  })
  res.status(200).json(newRole[0])
} catch(err){
  res.status(500).json({ message: "Error en el servidor",status:500})
}
})

module.exports = server;