const { Router } = require('express');
// import all routers;
const productRouter = require('./products.js');
const category = require('./Category.js');


const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/products', productRouter);
router.use('/products/category', category);

module.exports = router;
