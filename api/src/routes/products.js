const server = require("express").Router();
const { Op } = require("sequelize");
const { Products, Categories, Authors } = require("../db.js");

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

server.delete("/:id", (req, res) => {
  const id = req.params.id;

  Products.findAll({
    where: { id: id },
    include: Categories,
  }).then((product) => {
    if (product.length > 0) {
      Products.destroy({
        where: { id: id },
      });

      return res.send("Producto Eliminado");
    } else {
      return res.send("El producto no exite en la Base de Datos");
    }
  });
});

server.put("/:idProduct/category/:idCategory", (req, res) => {
  const { idProduct, idCategory } = req.params;
  Products.findByPk(idProduct)
    .then((product) => {
      if (product === null) {
        return res.send("Product does not exists");
      }
      product
        .addCategories(idCategory)
        .then((p) => res.status(200).json(product))
        .catch((err) => {
          return res.status(250).send(err.parent.detail);
        });
    })
    .catch((error) => {
      console.error(error.message);
    });
});

server.delete("/:idProduct/category/:idCategory", (req, res) => {
  const { idProduct, idCategory } = req.params;
  Products.findOne({
    where: { id: idProduct },
  })
    .then((product) => {
      if (product === null) {
        return res.status(401).send("Product does not exists");
      }
      product.removeCategories([idCategory]).then((resp) => {
        if (resp === 0) {
          return res.send("Product does not belong to this category");
        } else {
          return res.status(200).send("Category deleted");
        }
      });
    })
    .catch((e) => console.log(e));
});

server.post("/", (req, res) => {
  const {
    name,
    description,
    price,
    available,
    fileLink,
    preview,
    categories,
    authorId,
    seriesId,
  } = req.body;

  Products.findOrCreate({
    where: {
      name: name,
      description: description,
      price: price,
      available: available,
      fileLink: fileLink,
      preview: preview,
      authorId: authorId,
      seriesId: seriesId,
    },
  })
    .then((newProduct) => {
      if (categories === null || categories === undefined) {
        return res.json(newProduct[0]);
      }
      categories.forEach((id) => newProduct[0].addCategories(id));
      return res.json(newProduct[0]);
    })
    .catch((err) => {
      res.status(401).send(err.message);
    });
});

server.put("/:id", (req, res) => {
  const idProduct = req.params.id;

  const {
    name,
    description,
    price,
    available,
    fileLink,
    preview,
    authorId,
    seriesId,
  } = req.body;

  Products.update(
    {
      name: name,
      description: description,
      price: price,
      available: available,
      fileLink: fileLink,
      preview: preview,
      authorId: authorId,
      seriesId: seriesId,
    },
    {
      where: {
        id: idProduct,
      },
    }
  ).then(() => {
    Products.findOrCreate({
      where: {
        id: idProduct,
      },
    })
      .then((resp2) => {
        res.status(201).json(resp2[0]);
      })
      .catch(() => {
        res.status(401).send("Producto inexistente");
      });
  });
});

module.exports = server;
