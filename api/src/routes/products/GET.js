const server = require("express").Router();
const { Op } = require("sequelize");
const { Products, Categories, Authors } = require("../../db");

server.get("/search", (req, res) => {
  let keyword = req.query.keyword;

  if (!keyword) {
    return res
      .status(400)
      .json({ message: "Search criteria must be provided" });
  } else {
    Products.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.iLike]: `%${keyword}%`,
            },
          },
          {
            description: {
              [Op.like]: `%${keyword}%`,
            },
          },
        ],
      },
      include: [Categories],
    })
      .then((result) => res.status(200).json(result))
      .catch((error) => console.log(error));
  }
});

server.get("/category/:name", (req, res) => {
  let name = req.params.name;

  Categories.findOne({
    where: {
      name,
    },
    include: [
      {
        model: Products,
        through: { attributes: [] },
      },
    ],
  })
    .then((result) => res.status(200).json(result))
    .catch((error) => console.log(error));
});

server.get("/", async (req, res) => {
  try {
    let products = await Products.findAll({
      attributes: [
        "id",
        "name",
        "description",
        "price",
        "available",
        "fileLink",
        "preview",
      ],
      include: [{ model: Authors }, { model: Categories }],
    });

    products === null
      ? res.send("hubo un error al encontrar los productos")
      : res.json(products);
  } catch (err) {
    res.status(401).send(err.message);
  }
});

server.get("/:id", (req, res) => {
  const id = req.params.id;

  Products.findOne({
    where: {
      id: id,
    },
    include: Categories,
  })
    .then((resp) => {
      if (resp === null) {
        return res.send("Producto inexistente");
      }
      return res.json(resp);
    })
    .catch((error) => {
      console.error(error.message);
    });
});

module.exports = server;
