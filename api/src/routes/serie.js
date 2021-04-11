const server = require('express').Router();
const { Products, Series } = require('../db.js');

//name, email
server.get('/', async (req, res) => {

    try {
        let series = await Series.findAll();
        console.log(series)
        series === null ? res.send('hubo un error al buscar series') : res.json(series);
    } catch (err) {
        res.status(401).send(err.message);
    }
})

server.post('/', (req, res) => {

    const {
        name,
        description
    } = req.body

    Series.findOrCreate({
        where: {
            name: name,
            description: description
        }
    }).then((newSerie) => {

        res.json(newSerie[0])
    }).catch(err => {
        res.status(401).send(err.message)
    })
});

server.put('/:id', async (req, res) => {

    let id = req.params.id;

    const { name, description } = req.body;

    let resp1 = await Series.update({
        name: name, description: description
    }, {
        where: { id: id }
    })

    let resp2 = await Series.findOne({
        where: {
            id: id
        }
    })

    if (resp1[0] === 0) {
        return res.send("No existe la Serie")
    }
    return res.json(resp2)

});


// if(products.length === 0){
//        
// }

server.delete('/:id', (req, res, next) => {

    const id = req.params.id

    Products.findAll({
        where: { seriesId: id },
    })
        .then(products => {
            console.log("produuucts", products)

            if (products.length > 0) {
                return res.send(products)
            }
            else {
                Series.destroy({
                    where: { id: id }
                })
                    .then(resp => {
                        if (resp === 0) {
                            return res.send("No existe la Serie")
                        } else {
                            return res.send("Serie eliminada")
                        }
                    })
            }
        })
});

module.exports = server;