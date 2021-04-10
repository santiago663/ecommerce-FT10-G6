const { Router } = require("express");
const router = Router();
// ########### Import all routers file.
// => Products.
const getProducts = require("./products/GET");
const postProducts = require("./products/POST");
const putProducts = require("./products/PUT");
// => Categories.
const putCategories = require("./categories/PUT");

// ########### Routers
// => Products.
router.use("/get/products", getProducts);
router.use("/post/products", postProducts);
router.use("/put/products", putProducts);
// => Categories.
router.use("/put/categories", putCategories);

module.exports = router;
