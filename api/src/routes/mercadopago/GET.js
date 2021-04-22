require("dotenv").config();
const server = require("express").Router();
const mercadopago = require("mercadopago");
const { Orders, Products } = require("../../db");
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
          through: { attributes: [] },
        },
      ],
    });

    const products = await order.products.map((product) => ({
      id: product.id,
      name: product.name,
      // description: product.description,
      unit_price: Number(Number(product.price).toFixed()),
      // available: product.available,
      // fileLink: product.fileLink,
      preview: product.preview,
      // seriesId: product.seriesId,
      // authorId: product.authorId,
      quantity: 1,
    }));

    let preference = {
      items: products,
      external_reference: `${orderId}`,
      payment_methods: {
        excluded_payment_types: [
          {
            id: "atm",
          },
        ],
        installments: 1,
      },
      back_urls: {
        success: "http://localhost:3001/get/mercadopago/pay/status",
        failure: "http://localhost:3001/get/mercadopago/pay/status",
        pending: "http://localhost:3001/get/mercadopago/pay/status",
      },
    };

    const createdPref = await mercadopago.preferences.create(preference);
    const preferenceId = createdPref.body.id;
    res.status(200).json({ id: preferenceId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = server;
