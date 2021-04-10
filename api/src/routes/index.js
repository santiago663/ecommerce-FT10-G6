const { Router } = require("express");
const router = Router();
// import all routers file;
const getProducts = require("./products/GET");
const postProducts = require("./products/POST");
const putProducts = require("./products/PUT");
// routers
router.use("/get/products", getProducts);
router.use("/post/products", postProducts);
router.use("/put/products", putProducts);

module.exports = router;
