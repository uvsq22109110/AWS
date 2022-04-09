const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Import Routes
const restosRoute = require('/Users/lily/Desktop/AWS/routes/restos');
const reservationRoutes = require('/Users/lily/Desktop/AWS/routes/reservations');

//Middlewire
app.use('/reservations', reservationRoutes);
app.use('/restos', restosRoute);

// routes
app.get('/' , (req, res) =>{
    res.send('home page')
});


// connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    () => console.log('connected to DataBase!'));

// server listening
app.listen(PORT);