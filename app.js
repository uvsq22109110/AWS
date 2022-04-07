const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const PORT = 3000;


// routes
app.get('/' , (req, res) =>{
    res.send('home page')
});

app.get('/restos' , (req, res) =>{
    res.send('Liste des restaurants')
});

// connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    () => console.log('connected to DataBase!'));

// server listening
app.listen(PORT);