const server = require("express").Router();
const { Users } = require("../../db");

server.post("/", async (req, res) => {    

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const {
        name,
        email,
        phone_Number,
        location_id,
        roleId,
        isGuest,
    } = req.body;

    //creación de usuario como guest
    if (isGuest) {

        if (!validateEmail(email)) return res.status(422).json({ message: "The email is invalid" })

        try {

            var userGuest = await Users.findOrCreate({
                where: {
                    email,
                },
                defaults: {
                    name,
                    email,
                    phone_Number,
                    location_id,
                    roleId,
                    available: false
                }, 
            })
            return res.status(200).json(userGuest)
            //puede enviar un mail para confirmar si es la misma persona

        } catch (error) {
            console.log(error)
            res.status(500).send({ message: "Internal server error" })
        }
    }

    //creación de usuario al registrarse
    else if (!isGuest) {

        if (!name || !email) return res.status(400).json({ message: "Data is missing " }) 
        if (!validateEmail(email)) return res.status(400).json({ message: "The email is invalid" })

        try {
            var users = await Users.findOrCreate({
                where: {
                    email: email,
                },
                defaults: {
                    name,
                    email,
                    phone_Number,
                    location_id,
                    roleId,
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
                        phone_Number,
                        location_id,
                        roleId,
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
