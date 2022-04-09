const express = require('express');
const router = express.Router();

const {Reservation} = require('/Users/lily/Desktop/AWS/models/Reservation') ;

router.get('/', (req, res) => {

	Reservation.find((err, resa) => {
		if(!err) res.send(resa);
		else
			console.log("Erreur de recuperation de data") + err;
	})

});

router.post('/', (req, res) => {
	
	const newRecord = new Reservation({

		Nom_client: req.body.Nom_client,

		Prenom_client: req.body.Prenom_client,

		Num_tel_client: req.body.Num_tel_client,

		Mail_client: req.body.Mail_client,
	
		Nombre_de_personnes : req.body.Nombre_de_personnes,

		date: req.body.date
	});

	newRecord.save((err, resa) => {
		if (!err) res.send(resa);
		else
		  console.log("Erreur de ceration de new data") + err;

	})
})


module.exports = router;