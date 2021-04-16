const server = require("express").Router();
const { Orders, Products, Users } = require("../../db");

server.get("/users/:idUser/cart", async (req, res) => {
  const { idUser } = req.params;
  try {
    var cart = await Orders.findAll({
      where: {
        userId: idUser,
        state: "open",
      },

      include: [
        {
          model: Products,
          through: { attributes: [] },
        },
      ],
    });
    if (cart[0]) {
      return res.status(200).json(cart[0].products);
    } else {
      return res
        .status(404)
        .send({ message: "This user doesn't have a cart open" });
    }
  } catch (err) {
    console.log(err);
    res.status(401).send({ message: "Internal server error" });
  }
});


server.get("/", async (req, res) => {
  const state = req.query.status;
  
  try {
    if (state) {
      let cart = await Orders.findAll({
        where: {
          state: state,
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
          ],
        
      });
      
      res.status(200).json(cart);
    }else{
        let cart = await Orders.findAll({
            
            include: [
                {
                  model: Users,
                  attributes:['id','name']
                },
                {
                    model: Products,
                    through: { attributes: [] },
                },
              ],
            
          });
          
          res.status(200).json(cart);
    }
  } catch (err) {
    console.log(err);
    res.status(401).send({ message: "Hubo un error" });
  }
});

server.get("/users/:id/orders", async (req, res) => {
  const id = req.params.id;
  console.log(id)
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
          ],
        
      });
      
      res.status(200).json(cart);
   
  } catch (err) {
    console.log(err);
    res.status(401).send({ message: "Hubo un error" });
  }
});

module.exports = server;

module.exports = server;
