const server = require("express").Router();
const { Discounts, Products } = require("../../db");

server.delete("/", async (req,res) => {
   const {productsId} = req.body

    try{ 
productsId.forEach( async (id) => {
    let deleteProduct = await Discounts.destroy({
     where : { productId: id }
})
    })
  res.status(200).json({ message: "Discount deleted successfully" })

}catch( error ){ 
    res.status(500).json({ message: "internal server error "})
}
})
module.exports= server;