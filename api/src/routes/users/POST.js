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
    } = req.body;

    //creación de usuario como guest
    if (!password) {

        try {

            var userGuest = await Users.findOrCreate({
                where: {
                    email: email,
                },
                defaults: {
                    name,
                    email,
                    phone_Number,
                    location_id,
                    role_id,
                    available: false
                }
            })
            return res.status(200).json(userGuest)
            //puede enviar un mail para confirmar si es la misma persona

        } catch (error) {
            console.log(error)
            res.status(500).send({ message: "Internal server error" })
        }
    }

    //creación de usuario al registrarse
    else if (password) {

        if (!name || !email) {
            return res.status(422).json({ message: "Data is missing " })
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
                    available: true
                }
            })

            if (users[1] === false && users[0].available === true) {

                return res.status(200).json({ message: "User already exists" })

            }
            else if (users[1] === false && users[0].available === false) {
                var guestUserRegister = await Users.update(
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
                return res.status(200).json(guestUserRegister)
            }

            res.status(200).json(users)

        } catch (error) {
            console.log(error)
            res.status(500).send({ message: "Internal server error" })
        }
    }
}
);

module.exports = server;