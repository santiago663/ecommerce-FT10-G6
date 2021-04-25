const server = require("express").Router();
const{ Users, Orders, Reviews } = require("../../db");


server.post("/",async (req,res) =>{
    
    const{ comment, score } = req.body;
   const { productId,userId } = req.query;
    

try{
const review = await Reviews.findOrCreate({
    where: { productId, userId },
    defaults: {  comment, score,  productId,userId }
})
if(review[1]){ 
    
const response = await Reviews.findAll({
    where: { productId },
    include: [{ model: Users }]
})
    res.status(200).json(response)
} else {

    res.status(400).json({message:"you already comment this product", status: 400})
}

}catch(error){
    console.log(error)
}


})

module.exports = server;