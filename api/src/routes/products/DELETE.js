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
  
      return res.status(205).json({ message: "Product deleted" });
    }  
    else {
      return res.status(400).json({ message: "This product doesn't exist", status: 400});
    }
    
  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Internal server error", status: 500})
  }

  
});

server.delete("/:idProduct/category/:idCategory", async (req, res) => {
  const { idProduct, idCategory } = req.params;

  try {
    var product = await Products.findOne({
      where: { id: idProduct },
    })
  
    if (!product) {
      return res.status(400).json({ message: "Product does not exists", status: 400 });
    }

    var resp = await product.removeCategories([idCategory])
      if (resp === 0) {
        return res.status(400).json({message:"Product does not belong to this category", status: 400});
      } 
      else {
        return res.status(400).json({message:"Category deleted", status: 400});
      }    
  } 
  catch (error) {
    console.log(error)
    res.status(500).json({message: "Internal server error", status: 500})
  }

});

module.exports = server;