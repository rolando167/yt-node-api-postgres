const express = require('express');
const route = express.Router();
const UsuarioController = require('../controllers/UsuarioController');

route.get('/', UsuarioController.getUsuarios);

route.post('/', UsuarioController.storeUsuario)

route.get('/:id', UsuarioController.getUser);


route.put('/:id', UsuarioController.updateUser);

route.delete('/:id', UsuarioController.deleteUser);

module.exports = route;