const server = require("express").Router();
const { Op } = require("sequelize");
const { Products } = require("../../db.js");

server.get("/", (_req, res, next) => {
  Products.findAll()
    .then((products) => {
      res.send(products);
    })
    .catch(next);
});

server.get("/search", (req, res, next) => {
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
              [Op.like]: `%${keyword}%`,
            },
          },
          {
            description: {
              [Op.like]: `%${keyword}%`,
            },
          },
        ],
      },
    })
      .then((result) => res.status(200).json(result))
      .catch((error) => console.log(error));
  }
});

module.exports = server;
