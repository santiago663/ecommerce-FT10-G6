const { Router, static } = require("express");
const router = Router();


// ################ Routes.
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
router.use("/delete/user", require("./users/DELETE"));
router.use("/get/user", require("./users/GET"));
router.use("/post/user", require("./users/POST"));
router.use("/put/user", require("./users/PUT"));
// => Roles.
router.use("/delete/roles", require("./roles/DELETE"));
router.use("/get/roles", require("./roles/GET"));
router.use("/post/roles", require("./roles/POST"));
router.use("/put/roles", require("./roles/PUT"));
// => Orders.
router.use("/delete/order", require("./orders/DELETE"));
router.use("/get/order", require("./orders/GET"));
router.use("/post/order", require("./orders/POST"));
router.use("/put/order", require("./orders/PUT"));
// => Reviews
router.use("/get/review", require("./reviews/GET"));
router.use("/post/review", require("./reviews/POST"));
router.use("/put/review", require("./reviews/PUT"));
router.use("/delete/review", require("./reviews/DELETE"));
 //=> auth
router.use("/emails", require("./auth/POST"));
// => Payments
router.use("/post/payments", require("./payments/POST"));
// => Middleware
router.use(static("."));
// => Wishlist
router.use("/get/wishlist", require("./wishlist/GET"));
router.use("/post/wishlist", require("./wishlist/POST"));
router.use("/put/wishlist", require("./wishlist/PUT"));
// 2 Factor Authentication
router.use("/post/2fa", require("./authy/POST"));
// => Discount
router.use("/post/discount", require("./discounts/POST"));
router.use("/delete/discount", require("./discounts/DELETE"));
router.use("/get/discount", require("./discounts/GET"));

module.exports = router;
