const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

const Resto = require('../models/Resto');

const router = express.Router();

var cuisine = "Tout";
var ville = "Paris";

// router.post('/', async (req, res) => {
    
//     try{
//         console.log(req.body);
//         if(req.body.cuisine == 'Tout'){
//             const restos = await Resto.find({ 'ville' : req.body.ville});
//             res.render("discover", {data : restos});
//         } else{
//             const restos = await Resto.find({ 'cuisine' : req.body.cuisine, 'ville' : req.body.ville});
//             res.render("discover", {data : restos});
//         }
        
//     }
//     catch (err){
//         res.json({ message : err });
//     }
// });
function pagination(req, res, next) {
    var perPage = 9
    var page = req.params.page || 1
    console.log(page);
    console.log(cuisine);
    console.log(ville);
    if(req.body.cuisine == 'Tout'){
        Resto
        .find({'ville' : ville})
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec(function(err, restos) {
            Resto.count().exec(function(err, count) {
                if (err) return next(err)
                res.render('discover', {
                    data: restos,
                    current: page,
                    pages: Math.ceil(count / perPage)
                })
            })
        });
    }
    else{
        Resto
        .find({'cuisine':cuisine ,'ville' : ville})
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec(function(err, restos) {
            Resto.count().exec(function(err, count) {
                if (err) return next(err)
                res.render('discover', {
                    data: restos,
                    current: page,
                    pages: Math.ceil(count / perPage)
                })
            })
        });
    }
    
}

router.post('/', function(req, res, next) {
    cuisine = req.body.cuisine;
    ville = req.body.ville;
    pagination(req, res, next)
});

// router.post('/:page', function(req, res, next) {
//     pagination(req, res, next)
// });

router.get('/:page', function(req, res, next) {
    pagination(req, res, next)
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