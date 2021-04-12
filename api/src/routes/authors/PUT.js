const server = require("express").Router();
const { Authors } = require("../../db");

server.put("/:id", async (req, res) => {
  let id = req.params.id;
  const { name, email } = req.body;

  let resp1 = await Authors.update(
    {
      name: name,
      email: email,
    },
    {
      where: { id: id },
    }
  );

  let resp2 = await Authors.findOne({
    where: {
      id: id,
    },
  });

  if (resp1[0] === 0) {
    return res.send("No existe el Autor");
  }
  return res.json(resp2);
});

module.exports = server;
