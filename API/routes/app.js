const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
 const cors = require('cors');
 const req = require('express/lib/request');
 const res = require('express/lib/response');
 const Resto = require('./models/Resto');

 const app = express();
 const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
// Static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
// Set Views
app.set('views' , './views');
app.set('view engine', 'ejs');
// Import Routes
const restosRoute = require('./routes/restos');
const reservationRoutes = require('./routes/reservations');
//Middlewire
app.use('/reservations', reservationRoutes);
app.use('/restos', restosRoute);
// routes
app.get('/' , (req, res) =>{
    res.render('index', {text: 'this is a text'});
});
app.get('/contact' , (req, res) =>{
     res.render('contact');
 });

app.get('/reservation' , (req, res) =>{
     res.render('reservation');
 });

 app.get('/add-resto', function(req, res, next) {
     res.render('add-resto')
 })

 app.post('/add-resto', async function(req, res, next) {
     console.log( req.body.telephone)
     var resto = new Resto({
                 nom : req.body.nom,
                 cuisine : req.body.cuisine,
                 adresse : req.body.adresse,
                 ville : req.body.ville,
                 places : 50,
                 telephone : req.body.telephone
             });

             try{
                 var savedResto = await resto.save();
                 res.render('index');
             }

             catch (err){
                 res.json({ message : err });
                 console.log('Not working');
             }
 });

 // connect to DB
 mongoose.connect(
     "mongodb+srv://aws-user:awsuser123@cluster0.q0kqk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
     () => console.log('connected to DataBase!'));

 // server listening
 app.listen(process.env.PORT || PORT, () => console.log(`App listening on Port ${PORT}`)) ;