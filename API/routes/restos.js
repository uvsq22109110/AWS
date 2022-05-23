const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

const Resto = require('../models/Resto');
 
const router = express.Router();

var cuisine = "Tout";
var ville = "Paris";


function pagination(req, res, next) {
    var perPage = 6
    var page = req.params.page || 1
    console.log(page);
    console.log(cuisine);
    console.log(ville);
    if(req.body.cuisine == 'Tout'){
        Resto
        .find({ ville: ville})
        .sort( '-nom' )
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
        .find({ville : ville, cuisine: cuisine})
        .sort( '-nom' )
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

router.post('/:page', function(req, res, next) {
    pagination(req, res, next)
});

router.get('/:page', function(req, res, next) {
    pagination(req, res, next)
});

router.get('/', (req, res) => {
    
    res.render('restos');   
});



module.exports = router;