const server = require('express').Router();
const { Products } = require('../db.js');

server.get('/', (req, res, next) => {
	Products.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
});

module.exports = server;
