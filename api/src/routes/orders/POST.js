const server = require("express").Router();
const { Orders, productOrder } = require("../../db");

server.post("/", async (req, res) =>{

const { date,total,userId,price,productId,state} = req.body;
try{

const order = { 
    date: date,
    total: total,
    state: state,   
}
const newOrder= await Orders.create(order);

await newOrder.addProducts(productId,{ through: { price: price }
}) 
res.send("GRACIAS, VUELVAS PRONTOS")
} catch (error) {
    console.log(error)
    res.status(500).send({ message: "Internal server error" })
 }
})

module.exports = server;