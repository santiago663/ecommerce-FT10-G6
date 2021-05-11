const server = require("express").Router();
const { Discounts, Products, Authors, Categories } = require("../../db");

server.post("/", async (req, res) => {
  const { productId, percent } = req.body;

  try {
    Promise.all(
      productId.map(async (id) => {
        const findProductDiscount= await Discounts.findOne({
         where: { productId: id }})

        if (!findProductDiscount) {
           Discounts.create({
            percent: percent,
            productId: id,
          });
        }
        if (findProductDiscount) {
           Discounts.update(
            { percent: percent },
            { where: { productId: id } }
          );
        }
      }
      )
    ).then(async () => {
        let products = await Products.findAll({
            attributes: [
              "id",
              "name",
              "description",
              "price",
              "available",
              "fileLink",
              "preview",
              "score",
              "stock",
              "initialStock",
            ],
            include: [{ model: Authors }, { model: Categories }, { model: Discounts },],
          });

          return res.status(200).json(products)
    });
 } catch (error) {
    res.status(500).json({ message: "server internal problem" });
  }
});

// server.post("/",async (req,res)=>{

//     const { productId, percent } = req.body;

//     try{ 
//     const promesas = await Promise.all(
//     productId.map(async (prodId)=>{
//             const product= await Products.findOne({
//                 where: { id : prodId },
//             })
//             const author= await Authors.findOne({
//                 where: { id: product.authorId }
//             })
//            const findProductDiscount= await Discounts.findOne({
//                where: { productId: prodId }
//            })

//            if( !findProductDiscount ){
//              let discount= await Discounts.create({
//                     percent: percent, 
//                     productId: prodId
//                 })
//             } 
//             if(findProductDiscount) {
//                 let discount= await Discounts.update({ percent: percent }, 
//                   { where: { productId: prodId } },
//                 )}
//             const discountPrice = product.price - (product.price * percent)/100 
//             const updateInfo = {
//                 name: product.name,
//                 productId: prodId,
//                 price: product.price,
//                 discountPercent: percent,
//                 discountPrice: discountPrice,
//                 authorName: author.name
//             } 
//              return updateInfo
//         })
//     )
//     res.status(200).json(promesas)
//     } catch(error) {
//         res.status(500).json({message:"server internal problem"})
//     }
// })

module.exports = server;
