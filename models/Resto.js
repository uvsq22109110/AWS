const mongoose = require('mongoose');

const RestoSchema = mongoose.Schema({
    nom : {
        type: String,
        required : true
    },

    cuisine : {
        type: String,
        required : true
    },

    adresse : {
        type: String,
        required : true
    },

    places : {
        type: Number,
        required : true
    }
});

module.exports = mongoose.model('Restos', RestoSchema);