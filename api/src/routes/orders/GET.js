const server = require("express").Router();
const { Orders, Products, Users, Methods } = require("../../db");

server.get("/users/:idUser/cart", async (req, res) => {
const { idUser } = req.params;

 try {
  var cart = await Orders.findAll({
  where: { userId: idUser, state: "open", },

  include: [{
   model: Products,
   through: { attributes: [] }, 
  }, ],
 });
    if (cart[0]) {
      return res.status(200).json(cart[0]);
    } else {
      return res.status(200).json({ message: "This user doesn't have a cart open", status:200});
    }
  } catch (err) {
     console.log(err);
     res.status(500).json({ message: "Internal server error", status:500 });
  }
});


server.get("/", async (req, res) => {
const state = req.query.status;
  
 try {
  if (state) {
  
    let cart = await Orders.findAll({
    where: { state: state, },
    include: [{
              model: Users,
              attributes:['id','name']
            },
            {
              model: Products,
              through: { attributes: [] },
            },
            {
               model: Methods,
            },
          
          ],
          }); 
          res.status(200).json(cart);
  }else{
   let cart = await Orders.findAll({
            include: [{
                  model: Users,
                  attributes:['id','name']
                },
                {
                    model: Products,
                    through: { attributes: [] },
                },
                {
                  model: Methods,
                  
              }, ],
            }); res.status(200).json(cart); }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error", status:500});
  }
});

server.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
      let cart = await Orders.findAll({
        where: {
          id: id,
        },
        include: [
            {
              model: Users,
              attributes:['id','name']
            },
            {
                model: Products,
                through: { attributes: [] },
            },
            {
              model: Methods,
              
          }, ],
          }); res.status(200).json(cart);
    } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error",status:500 });
  }
});

server.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  try {
      let cart = await Orders.findAll({
        where: {
          userId: id,
        },
        include: [
            {
              model: Users,
              attributes:['id','name']
            },
            {
                model: Products,
                through: { attributes: [] },
            }, ],
      }); res.status(200).json(cart);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error",status:500 });
  }
});

module.exports = server;
