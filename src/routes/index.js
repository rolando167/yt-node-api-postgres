const express = require('express');
const route = express.Router();


//Routes
route.get('/', function(req, res, next){
    res.send('Bienvenido al Api V1 😄');
});

route.use('/usuario', require('./usuarioRoute'));

module.exports = route;