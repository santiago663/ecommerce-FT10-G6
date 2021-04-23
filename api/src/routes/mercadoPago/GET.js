require("dotenv").config();
const server = require("express").Router();
const mercadopago = require("mercadopago");
const { Orders, Products, Categories } = require("../../db");
const { ACCESS_TOKEN_MP } = process.env;

mercadopago.configure({
  access_token: ACCESS_TOKEN_MP,
});

server.get("/create_preference/:orderId", async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await Orders.findOne({
      where: {
        id: orderId,
      },
      include: [
        {
          model: Products,
          include: [
            {
              model: Categories,
              through: { attributes: [] },
            },
          ],
          through: { attributes: [] },
        },
      ],
    });

    const createdPref = await mercadopago.preferences.create({
      items: await order.products.map((product) => ({
        id: product.id,
        category_id: product.categories[0].id.toString(),
        description: product.description,
        title: product.name,
        unit_price: Number(Number(product.price).toFixed()),
        quantity: 1,
      })),
      external_reference: `${orderId}`,
      payment_methods: {
        excluded_payment_types: [
          {
            id: "atm",
          },
        ],
        installments: 12,
      },
      back_urls: {
        success: "http://localhost:3001/get/mercadopago/status",
        failure: "http://localhost:3001/get/mercadopago/status",
        pending: "http://localhost:3001/get/mercadopago/status",
      },
    });
    
    res
      .status(200)
      .json({ id: createdPref.body.id, url: createdPref.body.init_point });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = server;
