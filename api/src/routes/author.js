const server = require('express').Router();
const { Products, Authors } = require('../db.js');


server.get('/', async (req, res) => {

    try {
        let autors = await Authors.findAll();
        autors === null ? res.send('hubo un error al encontrar los autores') : res.json(autors);
    } catch (err) {
        res.status(401).send(err.message);
    }
})

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

server.delete('/:id', (req, res, next) => {

    const id = req.params.id

    Products.findAll({
        where: { seriesId: id },
    })
    .then(products => {

        if (products.length > 0) {
            return res.json(products)
        }
        else {
            Authors.destroy({
                where: { id: id }
            })
                .then(resp => {
                    if (resp === 0) {
                        return res.send("No existe el Autor")
                    } else {
                        return res.send("Autor eliminado")
                    }
                })
        }
    })
});

module.exports = server;