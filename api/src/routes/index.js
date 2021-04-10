const { Router } = require('express');
// import all routers;
const productRouter = require('./products.js');
const categoryRouter = require('./category');
const authorRouter = require('./author.js');
const serieRouter = require('./serie');


const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/products', productRouter);
router.use('/products/category', categoryRouter);
router.use('/products/author', authorRouter);
router.use('/products/serie', serieRouter);
module.exports = router;
