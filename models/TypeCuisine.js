const mongoose = require("mongoose");

const Type_Cuisine = mongoose.model(

	"myFirstDatabase",
	{
		Nom_type_cuisine: {
			type: String,
			required: true
		}
    },
        "Type_Cuisine"

);
    
module.exports = {Type_Cuisine};