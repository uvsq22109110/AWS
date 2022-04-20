const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

const Resto = require('../models/Resto');

const router = express.Router();

router.post('/', async (req, res) => {
    
    try{
        console.log(req.body);
        if(req.body.cuisine == 'Tout'){
            const restos = await Resto.find({ 'ville' : req.body.ville});
            res.render("discover", {data : restos});
        } else{
            const restos = await Resto.find({ 'cuisine' : req.body.cuisine, 'ville' : req.body.ville});
            res.render("discover", {data : restos});
        }
        
    }
    catch (err){
        res.json({ message : err });
    }
});

router.get('/', (req, res) => {
    
    res.render('index');   
});



// // AJOUTER UN RESTO
// router.post('/', async (req, res) => {
//     const resto = new Resto({
//         nom : req.body.nom,
//         cuisine : req.body.cuisine,
//         adresse : req.body.adresse,
//         ville : req.body.ville,
//         places : req.body.places,
//         telephone : req.body.telephone
//     });

//     try{
//         const savedResto = await resto.save();
//         res.json(savedResto);
//     }

//     catch (err){
//         res.json({ message : err });
//     }
// });

module.exports = router;