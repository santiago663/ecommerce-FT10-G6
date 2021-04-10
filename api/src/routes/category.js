const server = require('express').Router();
const { Categories } = require('../db.js');

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