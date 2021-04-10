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



server.get('/:id', (req, res)=>{

	const id = req.params.id;
	
    Products.findByPk(id)
        .then(resp => {
			if(resp === null){
				return res.send("Producto inexistente")
			}
           return res.json(resp)
        }).catch((error) =>{
            console.error(error.message)
        })
});

server.get('/:idProduct/category/:idCategory', (req, res)=>{

	const {idProduct, idCategory} = req.params;
    Products.findByPk(idProduct)
        .then(product => {
			if(product === null){
				return res.send("Product does not exists")
			}
		product.addCategories(idCategory)
			.then(p => res.status(200).json(product))		
			.catch(err =>{
			return res.status(250).send(err.parent.detail)
			})	
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
	  categories,
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
	  }).then((newProduct) =>{
		  if(categories === null || categories === undefined){
			return res.json(newProduct[0])
		  }
		  categories.forEach(id => newProduct[0].addCategories(id))
		 return res.json(newProduct[0])
	  }).catch(err => {
		  res.status(401).send(err.message)
	  })
});

server.put('/:id', (req, res)=>{
	const idProduct = req.params.id

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

	Products.update({
		name: name,
		description: description,
		price: price,
		available: available,
		fileLink: fileLink,
		preview: preview,
		authorId: authorId,
		seriesId: seriesId
	}, {

		where: {
			id: idProduct,
		}
	}).then(() => {
	
		Products.findOrCreate({

			where: {
				id: idProduct,
			}
		}).then(resp2 =>{
			res.status(201).json(resp2[0])
		}).catch( () => {
			res.status(401).send("Producto inexistente")
		})
	
	})
});

module.exports = server;
