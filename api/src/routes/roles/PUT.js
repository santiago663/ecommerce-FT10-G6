const server = require("express").Router();
const { Roles } = require("../../db");

server.put("/:id", async (req, res) => {
  let id = req.params.id;
  const { description } = req.body;
  try {
    let resp1 = await Roles.update(
      {
        description: description,
      },
      {
        where: { id: id },
      }
    );

    return res.status(200).json(resp1);

  } catch (err) {
    res.status(401).send(err.message);
  }
});

module.exports = server;
