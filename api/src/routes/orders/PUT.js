const server = require("express").Router();
const { Orders } = require("../../db");

server.put("/", async (req, res) => {

const orderState = { open: 1, pending: 2, cancelled: 3, completed: 3 };
const { id, state, payment, methodId } = req.body;

try {
    let actualOrder = await Orders.findOne({
    where: { id }
    })
    
    if (orderState[actualOrder.state] < orderState[state]) {
        if (!payment){
            await Orders.update({ state: state }, { where: { id } });
        }else{
            await Orders.update({ state: state, payment: payment, methodId: methodId }, { where: { id } });
        }
        
        return res.status(200).json({message: `Order status changed to ${state}`});
    }
    else {
        return res.status(400).json({ message: "The new order status is invalid",status:400 })
    }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error",status:500 })
    }
})

module.exports = server;
