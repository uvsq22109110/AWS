const mongoose = require("mongoose");

const ReservationScheme = mongoose.Schema({
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
			type: String,
			required : true
		},

	restaurant_id : {
		    type: mongoose.Schema.Types.ObjectId,
		    ref: 'Restos', 
  		}
});

module.exports = mongoose.model('Reservations', ReservationScheme);
