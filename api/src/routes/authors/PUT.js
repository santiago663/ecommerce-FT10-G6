const server = require("express").Router();
const { Authors } = require("../../db");

server.put("/:id", async (req, res) => {

  const id = req.params.id;
  const { name, email, available } = req.body;

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  try {

    if(!validateEmail(email)) return res.status(400).json({message: "The email format is invalid", status: 400})

    let authorSearch = await Authors.findOne(
      {
        where: {
          email
        }
      })

    if(authorSearch) if (authorSearch.id != id) return res.status(400).json({ message: "That email is already used by an author", status: 400 })

    let author = await Authors.update(
      {
        name,
        email,
        available
      },
      {
        where: { id: id },
        returning: true,
        plain: true,
      }
    );

    if (author) return res.status(200).json({ message: "Data moddified", author: author[1] })
    else res.status(200).json({ message: "The author doesn't exist", status: 200 })

  }
  catch (err) {
    console.log(err)
    res.status(500).json({ message: "Internal server error", status: 500 })
  }

});

module.exports = server;
