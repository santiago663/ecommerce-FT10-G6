const server = require("express").Router();
const { Users } = require("../../db");

server.post("/", async (req, res) => {

    const {
        name,
        email,
        password,
        phone_Number,
        location_id,
        role_id,
        available,
    } = req.body;

    if (!name || !email || !password) {

        return res.status(422).json({ error: "Data is missing" })

    }

    try {
        var users = await Users.findOrCreate({
            where: {
                email: email,
            },
            defaults: {
                name,
                email,
                password,
                phone_Number,
                location_id,
                role_id,
                available
            }
        })
        if(users[1] === false && users[0].available === true) {
            return res.status(200).json({message: "User already exists"}) 
        }
        else if (users[1] === false && users[0].available === false){
            var guestUser = await Users.update(
                {
                    name,
                    password,
                    phone_Number,
                    location_id,
                    role_id,
                    available: true
                },
                {
                    where: { email },
                    returning: true,
                    plain: true
                }
                
            )
            return res.status(200).json(guestUser)
        }
        
        res.status(200).json(users)

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Internal server error" })
    }
    
});

module.exports = server;