const server = require("express").Router();
const { Op } = require("sequelize");
const { Products, Categories, Authors, Discounts } = require("../../db");

server.get("/search", async (req, res) => {
  let keyword = req.query.keyword;

  try {

    if (!keyword) {
      return res.status(400).json({ message: "Search criteria must be provided", status: 400 });
    } 
    
    else {

      const result = await Products.findAll({
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
        include: [
          { model: Authors },
          { model: Discounts },
          {
            model: Categories,
            through: { attributes: [] },
          },
        ],
      });
      res.status(200).json(result);
    }
  } 
  catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", status: 500 });
  }
});

server.get("/category/:name", async (req, res) => {
  let name = req.params.name;

  try {
    const result = await Categories.findOne({
      where: {
        name,
      },
      include: [
        {
          model: Products,
          through: { attributes: [] },
          include: [{ 
              model: Discounts,
          }]
        },
      ],
    });
    res.status(200).json(result);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", status: 500 });
  }
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
        "score",
        "stock",
        "initialStock",
      ],
      include: [{ model: Authors }, { model: Categories }, { model: Discounts },],
    });

    products === null
      ? res.status(400).json({message: "hubo un error al encontrar los productos", status: 400})
      : res.status(200).json(products);
  
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Internal server error", status: 500 })
  }
});

server.get("/:id", (req, res) => {
  const id = req.params.id;

  Products.findOne({
    where: {
      id: id,
    },
    include: [{ model: Authors }, { model: Categories }, { model: Discounts }],
  })
    .then((resp) => {
      if (resp === null) {
        return res.status(400).json({message: "That product doesn't exist", status: 400});
      }
      return res.status(200).json(resp);
    })
    .catch((error) => {
      console.error(error.message);
      res.status(500).json({ message: "Internal server error", status: 500 })
    });
});

module.exports = server;
