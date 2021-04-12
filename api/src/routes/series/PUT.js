const server = require("express").Router();
const { Series } = require("../../db");

server.put("/:id", async (req, res) => {
  let id = req.params.id;
  const { name, description } = req.body;

  let resp1 = await Series.update(
    {
      name: name,
      description: description,
    },
    {
      where: { id: id },
    }
  );

  let resp2 = await Series.findOne({
    where: {
      id: id,
    },
  });

  if (resp1[0] === 0) {
    return res.send("No existe la Serie");
  }
  return res.json(resp2);
});

module.exports = server;
