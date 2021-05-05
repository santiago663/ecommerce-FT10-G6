const server = require("express").Router();
const { Users, Orders, Products } = require("../../db");
const { Op } = require('sequelize');

server.put("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "User Id is missing", status: 400 });
  }

  const {
    name,
    email,
    phone_Number,
    location_id,
    roleId,
    profilePic,
    authyId,
    authy

  } = req.body;

  if (
    !name ||
    !email ||
    !roleId
  ) {
    return res.status(400).json({ message: "Data is missing", status: 400 });
  }

  try {

    function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

    if (!validateEmail(email)) return res.status(400).json({ message: "The email is invalid", status: 400})

    let userSearch = await Users.findOne(
      {
        where: {
          email
        }
      })

    if(userSearch) if (userSearch.id != id) return res.status(400).json({ message: "That email is already used", status: 400 })
    
    var user = await Users.update(
      {
        name,
        email,
        phone_Number,
        location_id,
        roleId,
        profilePic,
        authyId,
        authy,
      },
      {
        where: { id: id },
        returning: true,
        plain: true,
      }
    );
    res.status(200).json({message: "User updated", user: user[1]});
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

server.put("/:idUser/cart", async (req, res) => {
  try {
    let userId = req.params.idUser;
    let { orderId, productId, total } = req.body;

    if (userId && orderId && productId) {

      const orderResult = await Orders.findOne({
        where: {
          [Op.and]: [{ userId: userId }, { id: orderId }],
        },
        include: [{ model: Products, through: { attributes: [] } }],
      });

      let removeProduct = await orderResult.removeProducts(productId);

      await Orders.update(
        {
          total
        },
        {
          where: {
            id: orderId,
          }
        }
      )

      res.status(200).json({ remove: true, message: removeProduct ? "Product deleted" : "Already deleted" });

    } else {
      res.status(401).json({ message: "Incomplete data" })
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = server;
