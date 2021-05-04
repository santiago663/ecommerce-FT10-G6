const server = require("express").Router();
const { Users, Roles } = require("../../db");

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
        isGuest,
        profilePic,
        authyId
    } = req.body;

    //creación de usuario como guest
    if (isGuest) {

        if (!validateEmail(email)) return res.status(400).json({ message: "The email is invalid", status: 400})

        try {

            var roleGuest = await Roles.findOne({
                where: {
                    description: "Guest"
                }
            })

            var userGuest = await Users.findOrCreate({
                where: {
                    email,
                },
                defaults: {
                    name,
                    email,
                    phone_Number: phone_Number ? phone_Number : ["0","0"],
                    location_id,
                    roleId: roleGuest.id,
                    available: false,
                    profilePic,
                    authyId
                }, 
            })
            return res.status(200).json(userGuest)
            //puede enviar un mail para confirmar si es la misma persona

        } catch (error) {
            console.log(error)
            res.status(500).send({ message: "Internal server error", status: 500 })
        }
    }

    //creación de usuario al registrarse
    else if (!isGuest) {

        if (!name || !email) return res.status(400).json({ message: "Data is missing ", status:400 }) 
        if (!validateEmail(email)) return res.status(400).json({ message: "The email is invalid", status: 400 })

        try {

            var role = await Roles.findOne({
                where: {
                    description: "Registered"
                }
            })
            var users = await Users.findOrCreate({
                where: {
                    email: email,
                },
                defaults: {
                    name,
                    email,
                    phone_Number: phone_Number ? phone_Number : ["0","0"],
                    location_id,
                    roleId: role.id,
                    available: true,
                    profilePic,
                    authyId
                }
            })

            if (users[1] === false && users[0].available === true) {

                return res.status(400).json({ message: "User already exists", status: 400 })

            }
            else if (users[1] === false && users[0].available === false) {
                var guestUserRegister = await Users.update(
                    {
                        name,
                        phone_Number: phone_Number ? phone_Number : ["0","0"],
                        location_id,
                        roleId: role.id,
                        available: true,
                        profilePic,
                        authyId
                    },
                    {
                        where: { email },
                        returning: true,
                        plain: true
                    }
                )
                return res.status(200).json(guestUserRegister[1])
            }

            res.status(200).json(users[0])

        } catch (error) {
            console.log(error)
            res.status(500).send({ message: "Internal server error", status: 500 })
        }
    }
}
);

module.exports = server;
