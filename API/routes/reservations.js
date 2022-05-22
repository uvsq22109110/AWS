const express = require('express');
const router = express.Router();
const ResaID = require('mongoose').Types.ObjectId; // recupere l id de la reservation 
const Reservation = require('../models/Reservation') ;
const resto = require('../models/Resto');
const RestoID = require('mongoose').Types.ObjectId; 

//Affciher les reservations 
// router.get('/details',async (req, res) => {

// 	Reservation.find((err, resa) => {
// 		if(!err) 
// 			Reservation.find({Nom_client: 'Yao'})
//       		.populate({path:'restaurant_id' , select: ['nom']}).exec((err, details_restaurants) => {
//       		// res.render("fin_de_reservations",
//         //             details_restaurants);
//         console.log(details_restaurants);
//    	 })
       
// 		else
// 			console.log("Erreur de recuperation de data") + err;
// 	})

// 	// res.render('reservation'); 

	
// });

router.get('/', (req, res) => {

    if (!RestoID.isValid(req.query.id))
        return res.status(400).send("ID INCONNU : " + req.query.id);      
       	   
   res.render('reservation',{data: req.query.id, nom_resto: req.query.nom});

   
	
});


//Ajouter Une reservation
router.post('/',  (req, res) => {

	console.log(req.body);

	const newRecord = new Reservation({

		Nom_client: req.body.Nom_client,

		Prenom_client: req.body.Prenom_client,

		Num_tel_client: req.body.Num_tel_client,

		Mail_client: req.body.Mail_client,
	
		Nombre_de_personnes : req.body.Nombre_de_personnes,

		date: req.body.date,
 		
 		restaurant_id: require('mongoose').mongoose.Types.ObjectId(req.query.id)
		
	}


);

	  newRecord.save((err, resa) => {
		if (!err) {

			

			res.render("fin_de_reservations", {nom : req.body.Nom_client, prenom : req.body.Prenom_client, 
			Telephone : req.body.Num_tel_client, Mail : req.body.Mail_client , 
			Nbr_Personnes : req.body.Nombre_de_personnes , Date : req.body.date, Restaurant : req.query.nom }
			);


		}
		else
		  res.status(401).send(
                "Erreur de saisi : \n Vous avez oublié un champs ou mal le saisir \n Veuillez revenir en arriere pour corriger ! \n ");


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

// router.delete("/t/:id", (req, res) =>  {

// 	if (!ResaID.isValid(req.params.id))
// 		return res.status(400).send("ID INCONNU : " + req.params.id);

// 	Reservation.findByIdAndRemove(
// 		req.params.id,
// 		(err, resa) => {
// 			if(!err) res.send(resa);

// 			else
// 				console.log("Erreur de supression : " + err);
// 		})

// });	

module.exports = router;