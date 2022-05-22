const express = require('express');
const router = express.Router();
const cont = require('../models/Contact');


//Ajouter Un message
router.post('/',  (req, res) => {

  console.log(req.body);

  const newmessage = new cont({

    Nom: req.body.Nom,

    Prenom: req.body.Prenom,

    Num_tel: req.body.Num_tel,

    Mail: req.body.Mail,
  
    message: req.body.message    
  }


);

    newmessage.save((err, resa) => {
    if (!err) {

      

      res.render("Message_envoye", {nom : req.body.Nom, prenom : req.body.Prenom, 
      Telephone : req.body.Num_tel, Mail : req.body.Mail , 
      Message : req.body.message }
      );


    }
    else
      console.log(err);
      res.status(401).send(
                "Erreur de saisi : \n Vous avez oublié un champs ou mal le saisir \n Veuillez revenir en arriere pour corriger ! \n ");


  })
  

});



module.exports = router;