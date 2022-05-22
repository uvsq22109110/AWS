const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

const Resto = require('../models/Resto');
 
const router = express.Router();

// // AJOUTER UN RESTO
router.post('/', (req, res) => {

console.log(req.body);
    const resto = new Resto({
        nom : req.body.nom,
        cuisine : req.body.cuisine,
        adresse : req.body.adresse,
        ville : req.body.ville,
        places : req.body.nbr_places,
        telephone : req.body.telephone
    });
    
    try{
        resto.save((err, resa) => {
        if (!err) {

            res.render("Restaurant_inscrit", { 
                nom : req.body.nom,
                cuisine : req.body.cuisine,
                adresse : req.body.adresse,
                ville : req.body.ville,
                places : req.body.nbr_places,
                telephone : req.body.telephone 
            });


        }
        else
          console.log("Erreur de creation de new data : " + err);

    });
        
        

    }

    catch (err){
        res.json({ message : err });
    }
});

module.exports = router;