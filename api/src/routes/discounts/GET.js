const server = require("express").Router();
const { Discounts, Products, Authors } = require("../../db");

server.get("/", async (req,res)=> {
try{
    let discountList = await Discounts.findAll({
        attributes: [
            "id",
            "percent",
            "productId"
        ],
        include: [{ model: Products,
        attributes:[ "name", "price","authorId"]
        }],
    })
   let  discountInfo =await Promise.all(
   discountList.map(async (e)=>{
    
    const author= await Authors.findOne({
        where: { id: e.product.authorId},
        attributes:[ "name", "email"]
    })
    const discountPrice = e.product.price - (e.product.price * e.percent)/100 
    const info = {
        percet: e.percent,
        productId: e.productId,
        price: e.product.price,
        discount: discountPrice,
        author: author.name,
        email: author.email,
    } 
    return info
   }))
    res.status(200).json(discountInfo)
}catch(error){
    res.status(500).json({ message: "Internal server error", status: 500 })
}
})
module.exports= server;
