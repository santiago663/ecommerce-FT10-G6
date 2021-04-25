const server = require("express").Router();
const { Products, Authors } = require("../../db");

server.delete("/:id", async (req, res) => {

  const id = req.params.id;

  try {

    await Products.update(
      {
        available: false
      },
      {
        where: {
          authorId: id
        },
      })

    var resp = await Authors.update(
      {
        available: false
      },
      {
        where: { id: id },
      })
      
    if (resp[0] === 0) {
      return res.status(400).json({ message: "The author doesn't exist", status: 400 });
    }
    else {
      return res.status(205).json({ message: "Author deleted", status: 200 });
    } 

  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Internal server error", status: 500 })
  }
});

module.exports = server;
