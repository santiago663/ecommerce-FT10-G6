const server = require('express').Router();
const { Products } = require('../db');




server.get('/products', async (_req, res) =>{
	

	try {
		
		let allProducts = await Products.findAll()

		let finalResultsProducts = allProducts.map((p) => {

			var oneProduct = {
				name: p.name,
				price: p.price,
				available: p.available,
			};
			return oneProduct;
		});

	res.json(finalResultsProducts);

	} catch (err) {
		res.send(404)
		console.error(err)
	}
})



module.exports = server;