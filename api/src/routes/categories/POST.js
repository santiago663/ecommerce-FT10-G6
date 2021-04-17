const server = require("express").Router();
const { Categories } = require("../../db");

server.post("/", async (req, res) => {
  const { name } = req.body;
   try{
   const newCategory = await Categories.findOrCreate({
   where: { name: name, },
   defaults: { available: true } 
  })
   res.status(205).json(newCategory[0])
  } catch(error) {
    console.log(401);
    res.status(401).json({ message: "Internal server error", status: 401 })
  }
});

module.exports = server;
