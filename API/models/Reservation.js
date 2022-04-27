const mongoose = require("mongoose");

const Reservation = mongoose.model(

	"myFirstDatabase",
	{
		Nom_client: {
			type: String,
			required: true
		},

		Prenom_client: {
			type: String,
			required: true
		},
		
		Num_tel_client: {
			type: String,
			required: true
		},

		Mail_client: {
			type: String,
			required: true
		},
	
		Nombre_de_personnes : {
			type: Number,
        	required : true
		},

		date: {
			type: Date,
			required : true
		},

		// restaurant_id : {
		//     type: mongoose.Schema.Types.ObjectId,
		//     ref: 'Restos', 
  // 		}
	
	},
	"reservations"

	);

	module.exports = {Reservation};