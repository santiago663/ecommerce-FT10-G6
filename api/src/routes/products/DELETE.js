const server = require("express").Router();
const { Products, Categories } = require("../../db");

server.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    var product = await Products.findOne({
      where: { id: id },
      include: Categories,
    })
      
    if (product.id) {
  
      product.categories.map(c => product.removeCategories([c]))
  
      Products.update(
        {
          available: false
        },
        {
          where: { id: id },
        })
  
      return res.status(200).json({ message: "Product deleted" });
    }  
    else {
      return res.status(400).json({ message: "This product doesn't exist" });
    }
    
  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Internal server error"})
  }

  
});

server.delete("/:idProduct/category/:idCategory", async (req, res) => {
  const { idProduct, idCategory } = req.params;

  try {
    var product = await Products.findOne({
      where: { id: idProduct },
    })
  
    if (!product) {
      return res.status(400).json({ message: "Product does not exists" });
    }

    var resp = await product.removeCategories([idCategory])
      if (resp === 0) {
        return res.status(400).json({message:"Product does not belong to this category"});
      } 
      else {
        return res.status(400).json({message:"Category deleted"});
      }    
  } 
  catch (error) {
    console.log(error)
    res.status(500).json({message: "Internal server error"})
  }

});

module.exports = server;