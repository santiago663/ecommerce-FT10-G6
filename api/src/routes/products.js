const server = require('express').Router();
const { Products } = require('../db.js');

server.get('/', (req, res, next) => {
	Products.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
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
