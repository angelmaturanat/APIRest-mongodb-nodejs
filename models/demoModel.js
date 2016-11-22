'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Definimos la estructura de nuestro esquema
const ObjSchema = Schema({
	name: String,
	description: String
});


/*
|En mongodb la "tabla" queda representada por el nombre de abajo pero lo cambia a plural (ej:demomodels)
*/

module.exports = mongoose.model('demoModel', ObjSchema);