const { Router } = require('express');
const router = Router();
const { Categories } = require('../db');
//traer los modelos necesarios cuando los tengas



//get/products/:id

//retorna un objeto de tipo producto con todos sus datos.(incluidas las categorias e imagenes)
router.get('/home/products/:id', async (req,res) =>{
	let id = req.params.id;
	try {

		puntualArtist = await artistName.findOne({

			where: { id : `${id}`},
			include: [categoriesName]
		});
		return res.json(idGame.data);
	} catch (err) {
		console.error(err);

	}
})