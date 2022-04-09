const express = require('express');
const router = express.Router();
const ResaID = require('mongoose').Types.ObjectId; // recupere l id de la reservation 
const {Reservation} = require('/Users/lily/Desktop/AWS/models/Reservation') ;

//Affciher les reservations 
router.get('/', (req, res) => {

	Reservation.find((err, resa) => {
		if(!err) res.send(resa);
		else
			console.log("Erreur de recuperation de data") + err;
	})

});

//Ajouter Une reservation
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
		  console.log("Erreur de ceration de new data : " + err);

	})
});

//Modifier une reservation 

router.put("/:id", (req, res) =>  {

	if (!ResaID.isValid(req.params.id))
		return res.status(400).send("ID INCONNU : " + req.params.id);
	
	
	const modifResa = {

		Nom_client: req.body.Nom_client,

		Prenom_client: req.body.Prenom_client,

		Num_tel_client: req.body.Num_tel_client,

		Mail_client: req.body.Mail_client,
	
		Nombre_de_personnes : req.body.Nombre_de_personnes,

		date: req.body.date
	};

	Reservation.findByIdAndUpdate(
		req.params.id,
		{ $set: modifResa },
		{ new: true},
		(err, resa) => {
			if(!err) res.send(resa);
			else
				console.log("Erreur lors de la modification : " + err);
	})
	
});


//Supprimer ( Annuler ) reservation 

router.delete("/:id", (req, res) =>  {

	if (!ResaID.isValid(req.params.id))
		return res.status(400).send("ID INCONNU : " + req.params.id);

	Reservation.findByIdAndRemove(
		req.params.id,
		(err, resa) => {
			if(!err) res.send(resa);

			else
				console.log("Erreur de supression : " + err);
		})

});	

module.exports = router;