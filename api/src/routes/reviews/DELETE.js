const server = require("express").Router();
const{ Users, Orders, Reviews } = require("../../db");

server.delete("/:id", async (req, res) => {

    const { id } = req.params

    try {        
        const reviewDelete = await Reviews.destroy(
            {
                where: {
                    id
                }
            }
        )
                
        if(reviewDelete) {
            return res.status(200).json({message: `Review deleted`, status:200})
        }
        else {
            return res.status(400).json({message: `Review not found`, status:400})
        }
    } 
    catch (error) {
    console.log(error) 
    res.status(500).json({message: "Internal server error", status: 500})  
    }
})

module.exports = server;
