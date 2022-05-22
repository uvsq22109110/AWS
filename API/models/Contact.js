const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    Nom : {
        type: String,
        required : true
    },

    Prenom : {
        type: String,
        required : true
    },

    Num_tel : {
        type: String,
        required : true
    },

    Mail : {
        type: String,
        required : true
    },

     message : {
        type: String,
        required : true
    }
});

module.exports = mongoose.model('Contacts', ContactSchema);