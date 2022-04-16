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
        Nom_restaurant : req.body.Nom_restaurant,
        type_cuisine : req.body.type_cuisine,
        Adresse : req.body.Adresse,
        Ville : req.body.Ville,
        Num_tel : req.body.Num_tel
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