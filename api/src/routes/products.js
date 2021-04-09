const server = require('express').Router();
const { Products } = require('../db.js');

server.get('/', (req, res, next) => {
	Products.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
});

server.get('/:id', (req, res)=>{
	
	Videogames.findByPk(id)
		.then(resp => {
		   return res.json(resp)
		}).catch((error) =>{
			console.error(error.message)
		})
});

server.post('/', (req, res)=>{
    // const elem = products;

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
            res.send('Producto cargado correctamente')
        })
})

module.exports = server;
