const server = require('express').Router();
const products = require('../utils/products.json');

const { Products } = require('../db.js');



server.get('/', (req, res, next) => {

	Products.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
});



server.get('/id/:id', (req, res)=>{

	const id = req.params.id;
	
    Products.findByPk(id)
        .then(resp => {
           return res.json(resp)
        }).catch((error) =>{
            console.error(error.message)
        })
});

server.post('/', (req, res)=>{
      const { 
        name, 
        description, 
        price, 
        available, 
        fileLink, 
        preview, 
        authorId,
        seriesId
        } = req.body

    Products.findOrCreate({

            where:{
                name: name,
                description: description,
                price: price,
                available: available,
                fileLink: fileLink,
                preview: preview,
                authorId: authorId,
                seriesId: seriesId
                }       
        }).then(resp => {
			res.status(201).json(resp[0])
        }).catch(err => {
			res.status(401).send(err.message)
		})
});
		

module.exports = server;
