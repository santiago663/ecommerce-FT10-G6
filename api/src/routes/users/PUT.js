const server = require("express").Router();
const { Users } = require("../../db");

server.put("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(422).json({ error: "User Id is missing" });
  }

  const {
    name,
    email,
    password,
    phone_Number,
    location_id,
    role_id,
  } = req.body;

  if (
    !name ||
    !email ||
    !password ||
    !phone_Number ||
    !location_id ||
    !role_id
  ) {
    return res.status(422).json({ error: "Data is missing" });
  }

  try {
    var users = await Users.update(
      {
        name,
        email,
        password,
        phone_Number,
        location_id,
        role_id,
      },
      {
        where: { id: id },
        returning: true,
        plain: true,
      }
    );
    res.status(200).json(users[1]);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = server;
