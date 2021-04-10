const server = require('express').Router();
const { Products, Categories } = require('../db.js');

server.delete('/id', (req, res, next) => {

    const id = req.query.id

    Categories.findAll({
        where:{ id: id},
        include: Products
        
    })      
    .then(category => {

            if(category[0].products.length > 0){
                console.log(category[0].products)
                return res.send("La categoría pertenece a uno o varios Productos. No es posible eliminar la Categoría") 
            }
            else if(category[0].products.length === 0){
                // category.destroy()
                Categories.destroy({
                    where:{ id: id}
                })
                .then(algo => console.log(algo))
                return res.send("Categoría Eliminada") 
            }
        
    })  
});

server.post('/', (req, res)=>{
	
	const { 
	  name, 
	  } = req.body

	  Categories.findOrCreate({
		  where:{
			  name: name,
			  }       
	  }).then((newCategory) =>{
		 
		  res.json(newCategory[0])
	  }).catch(err => {
		  res.status(401).send(err.message)
	  })
});

server.put('/:id', async(req, res)=>{
	let id = req.params.id;

    const {name} = req.body;
    // console.log(id, name )

    let resp1 = await Categories.update({
        name: name
    },{
        where:{id:id}
    })
   
    let resp2 = await Categories.findOne({
        where:{
            id: id
        }
    })

    if(resp1[0] === 0){
        return res.send("No existe la Cateoria")
    }
    return res.json(resp2)

});

module.exports = server;