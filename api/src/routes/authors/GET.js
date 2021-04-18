const server = require("express").Router();
const { Authors } = require("../../db");

server.get("/", async (req, res) => {

  try {
    let autors = await Authors.findAll();

    autors === null

      ? res.status(200).json({ message: "No authors in the data base", status: 200 })
      : res.status(200).json(autors);

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal server error", status: 500 })
  }
});


server.get("/:id", async (req, res) => {

  const { id } = req.params
  try {
    let autors = await Authors.findAll({
      where: {
        id: id
      }
    });

    autors === null
      ? res.status(200).json({ message: "The author doesn't exist", status: 200 })
      : res.status(200).json(autors);
  }
  catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal server error", status: 500 })
  }
});

module.exports = server;
