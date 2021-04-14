const server = require("express").Router();
const { Users } = require("../../db");

server.post("/", async (req, res) => {
  const {
    name,
    email,
    password,
    phone_Number,
    location_id,
    role_id,
    available,
  } = req.body;

  if (
    !name ||
    !email ||
    !password ||
    !phone_Number ||
    !location_id ||
    !role_id ||
    !available
  ) {
    return res.status(422).json({ error: "Data is missing" });
  }

  try {
    var users = await Users.findOrCreate({
      where: {
        email: email,
      },
      defaults: {
        name,
        email,
        password,
        phone_Number,
        location_id,
        role_id,
        available,
      },
    });
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = server;
