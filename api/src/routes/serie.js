const server = require('express').Router();
const { Products, Series } = require('../db.js');

//name, email

server.delete('/id', (req, res, next) => {

    const id = req.query.id

    Series.findAll({
        where:{ id: id},
        include: Products
        
    })      
    .then(serie => {

            if(serie[0].products.length > 0){
              
                return res.send("La Serie pertenece a uno o varios Productos. No es posible eliminar la Serie") 
            }
            else if(serie[0].products.length === 0){

                Series.destroy({
                    where:{ id: id}
                })
                .then(algo => console.log(algo))
                return res.send("Serie Eliminada") 
            }
        
    })  
});

server.post('/', (req, res)=>{
	
	
	const { 
	  name,
      description 
	  } = req.body

	  Series.findOrCreate({
		  where:{
			  name: name,
              description: description
			  }       
	  }).then((newSerie) =>{
		 
		  res.json(newSerie[0])
	  }).catch(err => {
		  res.status(401).send(err.message)
	  })
});

server.put('/:id', async(req, res)=>{

	let id = req.params.id;

    const {name, description} = req.body;

    let resp1 = await Series.update({
        name: name, description: description
    },{
        where:{id:id}
    })
   
    let resp2 = await Series.findOne({
        where:{
            id: id
        }
    })

    if(resp1[0] === 0){
        return res.send("No existe la Serie")
    }
    return res.json(resp2)

});

module.exports = server;