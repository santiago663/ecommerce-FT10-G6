const server = require("express").Router();
const { Categories } = require("../../db");

server.put("/:id", async (req, res) => {
  let id = req.params.id;
  const { name } = req.body;

  let resp1 = await Categories.update(
    { name: name,},
    { where: { id: id },}
  );
  let resp2 = await Categories.findOne({
    where: { id: id,},
  });
  if (resp1[0] === 0) {
    return res.status(400).json({message: "No existe la Categoría", status:400});
  }
  return res.json(resp2);
});

module.exports = server;
