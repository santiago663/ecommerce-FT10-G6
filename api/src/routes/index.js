const { Router } = require("express");
const router = Router();

// ############## Routes.
// => Authors.
router.use("/delete/author", require("./authors/DELETE"));
router.use("/get/author", require("./authors/GET"));
router.use("/post/author", require("./authors/POST"));
router.use("/put/author", require("./authors/PUT"));
// => Categories.
router.use("/delete/category", require("./categories/DELETE"));
router.use("/get/category", require("./categories/GET"));
router.use("/post/category", require("./categories/POST"));
router.use("/put/category", require("./categories/PUT"));
// => Products.
router.use("/delete/product", require("./products/DELETE"));
router.use("/get/product", require("./products/GET"));
router.use("/post/product", require("./products/POST"));
router.use("/put/product", require("./products/PUT"));
// => Series.
router.use("/delete/serie", require("./series/DELETE"));
router.use("/get/serie", require("./series/GET"));
router.use("/post/serie", require("./series/POST"));
router.use("/put/serie", require("./series/PUT"));
// => Users.

module.exports = router;
