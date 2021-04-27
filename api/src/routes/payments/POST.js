require("dotenv").config();
const server = require("express").Router();
const mercadopago = require("mercadopago");
const { Orders, Products, Categories } = require("../../db");
const { ACCESS_TOKEN_MP, STRIPE } = process.env;
const stripe = require("stripe")(STRIPE);
const domainFront = "http://localhost:3000";
const domainApi = "http://localhost:3001";

mercadopago.configure({
  access_token: ACCESS_TOKEN_MP,
});

server.post("/mercado-pago/create-preference/:orderId", async (req, res) => {
  try {
    const orderId = req.params.orderId;
    if (orderId) {
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
        items: order.products.map((product) => ({
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
          installments: 1,
        },
        back_urls: {
          success: `${domainFront}/checkout`,
          failure: `${domainFront}/checkout`,
          pending: `${domainFront}/checkout`,
        },
      });

      res.status(201).json({
        method: "mercado-pago",
        id: createdPref.body.id,
        url: createdPref.body.init_point,
      });
    } else if (req.body) {
      let body = req.body;
      console.log(body);
    } else {
      res.status(401).json({ message: "Incomplete data" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

server.post("/stripe/create-session", async (req, res) => {
  try {
    const body = req.body;
    if (body.orderId) {
      const order = await Orders.findOne({
        where: {
          id: body.orderId,
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

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: order.products.map((product) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              images: [product.preview],
            },
            unit_amount: Number(Number(product.price).toFixed()),
          },
          quantity: 1,
        })),
        mode: "payment",
        success_url: `${domainFront}/checkout/?success=true`,
        cancel_url: `${domainFront}/checkout/?canceled=true`,
      });

      order.state = "pending"; // change order state
      await order.save(); // save change.

      res.status(201).json({
        method: "stripe",
        id: session.id,
        url: "",
      });
    } else if (body.products) {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: body.products.map((product) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              images: [product.preview],
            },
            unit_amount: Number(Number(product.price).toFixed()),
          },
          quantity: 1,
        })),
        mode: "payment",
        success_url: `${domainFront}/checkout/?success=true`,
        cancel_url: `${domainFront}/checkout/?canceled=true`,
      });

      res.status(201).json({
        method: "stripe",
        id: session.id,
        url: "",
      });
    } else {
      res.status(401).json({ message: "Incomplete data" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = server;
