const server = require("express").Router();
const { Users } = require("../../db");

server.put("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(422).json({ error: "Data is missing" });
  }

  try {
    await Users.update(
      {
        available: false,
      },
      {
        where: { id: id },
      }
    );
    res.status(200).json({ id: id });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = server;
