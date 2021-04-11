const server = require('express').Router();
const { Products, Authors } = require('../db.js');

//name, email

server.delete('/id', (req, res, next) => {

    const id = req.query.id

    Authors.findAll({
        where:{ id: id},
        include: Products
        
    })      
    .then(author => {

            if(author[0].products.length > 0){

                return res.send("El Autor pertenece a uno o varios Productos. No es posible eliminar el Autor") 
            }
            else if(author[0].products.length === 0){

                Authors.destroy({
                    where:{ id: id}
                })
                .then(algo => console.log(algo))
                return res.send("Autor Eliminado") 
            }
        
    })  
});

server.post('/', (req, res)=>{
	
	
	const { 
	  name,
      email 
	  } = req.body

	  Authors.findOrCreate({
		  where:{
			  name: name,
              email: email
			  }       
	  }).then((newAuthor) =>{
		 
		  res.json(newAuthor[0])
	  }).catch(err => {
		  res.status(401).send(err.message)
	  })
});

server.put('/:id', async(req, res)=>{

	let id = req.params.id;

    const {name, email} = req.body;

    let resp1 = await Authors.update({
        name: name, email: email
    },{
        where:{id:id}
    })
   
    let resp2 = await Authors.findOne({
        where:{
            id: id
        }
    })

    if(resp1[0] === 0){
        return res.send("No existe el Autor")
    }
    return res.json(resp2)

});

module.exports = server;