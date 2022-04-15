const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const RestID = require('mongoose').Types.ObjectId; // recupere l id du resto 

const Resto = require('/Users/lily/Desktop/AWS/models/Resto');

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

 router.get('/italien', async (req, res) => {
    
     try{
         const restos = await Resto.find({
           type_cuisine : 'Italienne'
       });
      res.json(restos);
  }
  catch (err){
      res.json({ message : err });
   }
});

 router.get('/japonais', async (req, res) => {
    
    try{
         const restos = await Resto.find({
             type_cuisine : 'Japonaise'
         });
         res.json(restos);
     }
    catch (err){
        res.json({ message : err });
    }
});


 router.get('/chinois', async (req, res) => {
    
    try{
        const restos = await Resto.find({
            type_cuisine : 'Chinoise'
         });
         res.json(restos);
     }
     catch (err){
         res.json({ message : err });
    }
});

 router.get('/portugais', async (req, res) => {
    
    try{
         const restos = await Resto.find({
                         type_cuisine : 'Portugaise'
        });
        res.json(restos);
   }
   catch (err){
      res.json({ message : err });
  }
});


 router.get('/turque', async (req, res) => {
    
     try{
         const restos = await Resto.find({
             type_cuisine : 'Turque'
         });
         res.json(restos);
     }
     catch (err){
         res.json({ message : err });
     }
 });


 router.get('/indien', async (req, res) => {
    
     try{
         const restos = await Resto.find({
             type_cuisine : 'Indienne'
         });
         res.json(restos);
     }
     catch (err){
         res.json({ message : err });
     }
 });


 router.get('/italien', async (req, res) => {
    
     try{
         const restos = await Resto.find({
             type_cuisine : 'Italienne'
         });
         res.json(restos);
     }
     catch (err){
         res.json({ message : err });
     }
 });


 router.get('/mexicain', async (req, res) => {
    
     try{
         const restos = await Resto.find({
             type_cuisine : 'Mexicaine'
         });
         res.json(restos);
     }
     catch (err){
         res.json({ message : err });
     }
 });


 router.get('/italien', async (req, res) => {
    
     try{
         const restos = await Resto.find({
             type_cuisine : 'Italienne'
         });
         res.json(restos);
     }
     catch (err){
         res.json({ message : err });
     }
 });


 router.get('/francais', async (req, res) => {
    
     try{
         const restos = await Resto.find({
             type_cuisine : 'Francaise'
         });
         res.json(restos);
     }
     catch (err){
         res.json({ message : err });
     }
 });


 router.get('/libanais', async (req, res) => {
    
     try{
         const restos = await Resto.find({
             type_cuisine : 'Libanaise'
         });
         res.json(restos);
     }
     catch (err){
         res.json({ message : err });
     }
 });


 router.get('/algerien', async (req, res) => {
    
     try{
         const restos = await Resto.find({
             type_cuisine : 'Algerienne'
         });
         res.json(restos);
     }
     catch (err){
         res.json({ message : err });
     }
 });


 router.get('/thai', async (req, res) => {
    
     try{
         const restos = await Resto.find({
             type_cuisine : 'Thai'
        });
        res.json(restos);
    }
    catch (err){
         res.json({ message : err });
     }
 });

 router.get('/poisson', async (req, res) => {
    
    try{
         const restos = await Resto.find({
            type_cuisine : 'Fruit De Mer Poisson'
        });
         res.json(restos);
    }
     catch (err){
         res.json({ message : err });
     }
 });

 router.get('/vegan', async (req, res) => {
    
  try{
        const restos = await Resto.find({
           type_cuisine : 'vegan'
        });
        res.json(restos);
     }
     catch (err){
      res.json({ message : err });
    }
 });

 router.get('/bresilien', async (req, res) => {
    
     try{
         const restos = await Resto.find({
            type_cuisine : 'Bresilienne'
       });
        res.json(restos);
   }
    catch (err){
         res.json({ message : err });
    }
});



 router.get('/africain', async (req, res) => {
    
     try{
         const restos = await Resto.find({
            type_cuisine : 'Africaine'
         });
         res.json(restos);
     }
     catch (err){
        res.json({ message : err });
} });


router.get('/pakistanais', async (req, res) => {
    
   try{
      const restos = await Resto.find({
           type_cuisine : 'Pakistanaise'
       });
        res.json(restos);
     }
     catch (err){
         res.json({ message : err });
     }
 });


 router.get('/afghan', async (req, res) => {
    
     try{
         const restos = await Resto.find({
             type_cuisine : 'Afghan'
         });
         res.json(restos);
     }
     catch (err){
         res.json({ message : err });
     }
 });


router.get('/gastronomie', async (req, res) => {
        try{
        const restos = await Resto.find({
             type_cuisine : 'Gastronomique'
        });
       res.json(restos);
   }
    catch (err){
         res.json({ message : err });
     }
 });


 router.get('/marocain', async (req, res) => {
    
   try{
            const restos = await Resto.find({
             type_cuisine : 'Marocaine'
         });
        res.json(restos);
   }
   catch (err){
        res.json({ message : err });
    }
 });


router.get('/tunisien', async (req, res) => {
    
   try{
                const restos = await Resto.find({
               type_cuisine : 'Tunisienne'
    });
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

router.get('/recherche', async (req, res, next) => {
    
    // Get user input
    console.log(req.body);


});


module.exports = router;