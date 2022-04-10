const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

const Type_Cuisine = require('../models/TypeCuisine');

const router = express.Router();

//Récuprer les types de cuisine 
router.get('/', async (req, res) => {
    try{
        const type = await Type_Cuisine.find();
        res.json(type);
    }
    catch (err){
        res.json({ message : err });
    }
});