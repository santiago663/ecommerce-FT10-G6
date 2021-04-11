const server = require('express').Router();
const { Products, Categories } = require('../db.js');


server.get('/', async (req, res) => {
  
    try {
		let category = await Categories.findAll();
		category === null ? res.send('hubo un error en la busqueda categorias') : res.json(category);
	} catch (err) {
		res.status(401).send(err.message);
	}
})

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

server.delete('/:id', (req, res) => {

    const id = req.params.id

    Categories.findAll({
        where:{ id: id},
        include: Products        
    })
    .then(category => {

            if(category[0].products.length > 0){
                return res.json(category[0].products) 
            }
            else if(category[0].products.length === 0){              
                Categories.destroy({
                    where:{ id: id}
                })
                
                return res.send("Categoría Eliminada") 
            }        
    })  
});
module.exports = server;