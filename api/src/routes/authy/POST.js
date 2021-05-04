const server = require("express").Router();
const { Users } = require("../../db");
const { AUTHY_APIKEY } = process.env;
const authy = require('authy')(AUTHY_APIKEY);

server.post("/", async (req, res) => {

    try {

        const { email, cellphone, country_code } = req.body

        authy.register_user(email, cellphone, country_code, async function (err, res2) {

            if (res2) {
                await Users.update({
                    authyId: res2.user.id
                },
                    {
                        where: { email: email }
                    })
            }

            res.json(res2 ? res2 : err)
        })

    } catch (error) {
        console.log(error)
    }
})

server.post("/validation", async (req, res) => {

    try {

        const { userId, code } = req.body

        const user = await Users.findOne({
            where: { id: userId }
        })

        authy.verify(user.authyId, code, function (err, res2) {

            res.json(res2 ? res2 : err)

        });

    } catch (error) {
        console.log(error)
    }
})

module.exports = server;

