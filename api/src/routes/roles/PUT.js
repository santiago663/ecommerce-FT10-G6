const server = require("express").Router();
const { Roles } = require("../../db");

server.put("/:id", async (req, res) => {
  let id = req.params.id;
  const { description } = req.body;
  try {
    let resp1 = await Roles.update(
      { description: description, },
      { where: { id: id }, }
    );
    return res.status(200).json(resp1);
  } catch (err) {
    res.status(500).json({message:"Internal error", status:500});
  }
});

module.exports = server;
