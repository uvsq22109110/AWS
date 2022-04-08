const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

const Resto = require('../models/Resto');

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const restos = await Resto.find();
        res.json(restos);
    }
    catch (err){
        res.json({ message : err });
    }
});

// AJOUTER UN RESTO
router.post('/', async (req, res) => {
    const resto = new Resto({
        nom : req.body.nom,
        cuisine : req.body.cuisine,
        adresse : req.body.adresse,
        places : req.body.places
    });

    try{
        const savedResto = await resto.save();
        res.json(savedResto);
    }

    catch (err){
        res.json({ message : err });
    }
});

module.exports = router;