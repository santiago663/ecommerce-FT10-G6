const { Router } = require('express');
const productRouter = require('./products.js');
const categoryRouter = require('./category');
const authorRouter = require('./author.js');
const serieRouter = require('./serie');


const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/products', productRouter);
router.use('/category', categoryRouter);
router.use('/author', authorRouter);
router.use('/serie', serieRouter);
module.exports = router;
