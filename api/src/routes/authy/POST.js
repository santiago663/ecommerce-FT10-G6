const server = require("express").Router();
const { Users } = require("../../db");
const { AUTHY_APIKEY } = process.env;
const authy = require('authy')(AUTHY_APIKEY);

server.post("/", async (req, res) => {

    const { email, cellphone, country_code } = req.body

    console.log(email, cellphone, country_code)

    var resAuthy;

    authy.register_user(email, cellphone, country_code, async function (err, res) {
        console.log(res);
        console.log(err)
        await Users.update({
            authyId: res.user.id
        },
            {
                where: { email: email }
            })

    })
    res.json(resAuthy)

})

server.post("/validation", async (req, res) => {

    try {

        const { userId, code } = req.body

        const user = await Users.findOne({
            where: { id: userId }
        })

        var resp;

        authy.verify(user.authyId, code, function (err, res2) {
            if(res2) {
                console.log(res2);
                resp = true
            }
            if(err) {
                console.log(err);
                resp = false
            }
            res.json(res2 ? res2 : err )
        });

        

    } catch (error) {
        console.log(error)
    }

})

module.exports = server;

