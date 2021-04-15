const server = require("express").Router();
const { Op } = require("sequelize");
const { Users, Orders, Products } = require("../../db");

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

server.put("/:idUser/cart", async (req, res) => {
  try {
    let userId = req.params.idUser;
    let { orderId, productId } = req.body;
    const orderResult = await Orders.findOne({
      where: {
        [Op.and]: [{ userId: userId }, { id: orderId }],
      },
      include: [{ model: Products, through: { attributes: [] } }],
    });
    let removeProduct = await orderResult.removeProducts(productId);
    res.status(200).json({ remove: true, id: removeProduct });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = server;
