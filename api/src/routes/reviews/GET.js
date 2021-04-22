const server = require("express").Router();
const{ Users, Orders,Reviews } = require("../../db");


server.get("/", async (req,res)=>{

const{ productId } = req.query;
console.log(req.query)

    try{
        if(productId){
            const reviewUser = await Reviews.findAll({
                where:{ productId },
                include: [{ model: Users }]
            })
         return res.status(200).json(reviewUser)
        }else {
        const reviewDefault = await Reviews.findAll()
        return res.status(200).json(reviewDefault)
     }

    } catch(error){
     console.log(error)
     res.status(500).json({message:"server error",status:500})
    }
})

module.exports = server;
