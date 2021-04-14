const server = require("express").Router();
const { Users } = require("../../db");

server.get("/", async (req, res) => {
  try {
    var users = await Users.findAll({
      attributes: [
        "id",
        "name",
        "email",
        "password",
        "phone_Number",
        "location_id",
        "role_id",
        "available",
      ],
    });
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = server;
