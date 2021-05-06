const server = require("express").Router();
const { Discounts, Products } = require("../../db");

server.delete("/:productId", async (req,res) => {
    const { productId } = req.params;

    try{ 
      let deleteProduct = await Discounts.destroy({
       where : { productId }
    })

    if(deleteProduct) {
        res.status(200).json({ message: "Discount deleted successfully" })
    }
}catch( error ){ 
    res.status(500).json({ message: "internal server error "})
}
})
module.exports= server;