'use strict'

/*
|
|CRUD para cualquier objeto de base de datos mongodb
|
*/


//Importamos el o los modelos a utilizar
const Object = require('../models/demoModel');


/*
|
|Obtener un elemento en especifico desde la base de datos (por id)
|
*/
function getObj(req, res){
	let objid = req.params.objid;

	Object.findById(objid, function(err, obj){
		if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`});
		if(!obj) return res.status(404).send({message: `El objeto no existe`});

		res.status(200).send({ obj });
	});
}



/*
|
|Obtener todos los elementos de una base de datos
|
*/
function getObjs(req, res){
	Object.find({}, function(err, obj){
		if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`});
		if(!obj) return res.status(404).send({message: `No existen objeto`});

		res.send(200, { obj });
	});
}



/*
|
|Inserta datos en la base de datos de mongo (considerar parametros a insertar)
|
*/
function insertObj(req, res){
	console.log('POST /api/obj');
	console.log(req.body);

	let obj = new Object();
	obj.name = req.body.name;
	obj.description = req.body.description;

	obj.save(function(err, objStored){
		if(err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`});

		res.status(300).send({obj: objStored});
	});
}



/*
|
|Actualiza un elemento determinado en la base de datos (por id)
|
*/
function updateObj(req, res){
	let objid = req.params.objid;
	let update = req.body;

	Object.findByIdAndUpdate(objid, update, {new: true}, function(err, objUpdated){
		if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`});

		res.status(200).send({obj: objUpdated});
	});
}



/*
|
|Elimina un elemento determinado en la base de datos (por id)
|
*/
function deleteObj(req, res){
	let objid = req.params.objid;

	Object.findById(objid, function(err, obj){
		if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`});
		if(!obj) return res.status(404).send({message: `El objeto no existe`});

		obj.remove(function(err){
			if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`});
			res.status(200).send({message: 'El objeto ha sido eliminado'});
		});
	});
}

module.exports = {
	getObj,
	getObjs,
	insertObj,
	updateObj,
	deleteObj
}