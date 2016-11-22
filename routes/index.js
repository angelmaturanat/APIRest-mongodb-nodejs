'use strict'

const express = require('express');

//Importamos el o los controladores a utilizar
const objController = require('../controllers/demoController');
const api = express.Router();

//Definimos rutas y su respectivo controlador.función

//Obtenemos todos los datos
api.get('/obj', objController.getObjs);

//Obtenemos un dato en especifico (:objid es un parametro por url ej: "localhost:3000/api/obj/1", se buscará el elemento con id 1)
api.get('/obj/:objid', objController.getObj);

//Inserta un elemento
api.post('/obj', objController.insertObj);

//Actualiza un elemento desde un id predeterminado
api.put('/obj/:objid', objController.updateObj);

//Elimina un elemento desde un id predeterminado
api.delete('/obj/:objid', objController.deleteObj);

module.exports = api