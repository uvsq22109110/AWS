const express = require('express');
const router = express.Router();
const ResaID = require('mongoose').Types.ObjectId; // recupere l id de la reservation 
const {Reservation} = require('../models/Reservation') ;
const resto = require('../models/Resto');

//Affciher les reservations 
// router.get('/details',async (req, res) => {

// 	// Reservation.find((err, resa) => {
// 	// 	if(!err) 
// 	// 		Reservation.find()
//  //      		.populate("Nom_client", ).exec((err, details_restaurants) => {
//  //      		res.render("fin_de_reservations",
//  //                    details_restaurants);
//  //   	 })
       
// 	// 	else
// 	// 		console.log("Erreur de recuperation de data") + err;
// 	// })

// 	// res.render('reservation'); 

	
// });

//Ajouter Une reservation
router.post('/',  (req, res) => {

	console.log(req.body);

	const newRecord = new Reservation({

		Nom_client: req.body.Nom_client,

		Prenom_client: req.body.Prenom_client,

		Num_tel_client: req.body.Num_tel_client,

		Mail_client: req.body.Mail_client,
	
		Nombre_de_personnes : req.body.Nombre_de_personnes,

		date: req.body.date
 	
		// restaurant_id: req.params.id
	}
	);


	Reservation.date instanceof Date;

	   newRecord.save((err, resa) => {
		if (!err) {
			
			res.render("fin_de_reservations", {nom : req.body.Nom_client, prenom : req.body.Prenom_client, 
			Telephone : req.body.Num_tel_client, Mail : req.body.Mail_client , 
			Nbr_Personnes : req.body.Nombre_de_personnes , Date : req.body.date}
			);

		}
		else
		  console.log("Erreur de ceration de new data : " + err);

	})
	

});


//Modifier une reservation 

// router.put("/:id/:id1", (req, res) =>  {

// 	if (!ResaID.isValid(req.params.id))
// 		return res.status(400).send("ID INCONNU : " + req.params.id);
	
	
// 	const modifResa = {

// 		Nom_client: req.body.Nom_client,

// 		Prenom_client: req.body.Prenom_client,

// 		Num_tel_client: req.body.Num_tel_client,

// 		Mail_client: req.body.Mail_client,
	
// 		Nombre_de_personnes : req.body.Nombre_de_personnes,

// 		date: req.body.date,

// 		restaurant_id: req.params.id1
// 	};

// 	Reservation.findByIdAndUpdate(
// 		req.params.id,
// 		{ $set: modifResa },
// 		{ new: true},
// 		(err, resa) => {
// 			if(!err) res.send(resa);
// 			else
// 				console.log("Erreur lors de la modification : " + err);
// 	})
	
// });


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