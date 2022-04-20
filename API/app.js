const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors');
const req = require('express/lib/request');
const res = require('express/lib/response');
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

// connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    () => console.log('connected to DataBase!'));

// server listening
app.listen(PORT, () => console.log(`App listening on Port ${PORT}`)) ;