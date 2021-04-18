const server = require("express").Router();
const { Authors } = require("../../db");

server.post("/", async (req, res) => {

  const { name, email } = req.body;

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
  try {

    if (!validateEmail(email)) return res.status(400).json({message: "The email format is invalid", status: 400})

    let author = await Authors.findOrCreate({
      where: {
        email: email,
      },
      defaults:{
        name,
        email,
        available: true
      }
    })

    if (author[1]) {
      return res.status(200).json({message: "Author created", author: author[0]})
    }
    else {
      return res.status(400).json({message: "The author already exist", status: 400})
    }

  } 
  catch (err) {
    console.log(err)
    res.status(500).json({ message: "Internal server error", status: 500 })
  }

});

module.exports = server;
