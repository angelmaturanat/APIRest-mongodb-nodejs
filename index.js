'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

mongoose.connect(config.db, function(err, res){
	if(err){
		console.log(`Error al conectar con la base de datos: ${err}`);
	}

	console.log('Conexión a la base de datos exitosa');

	app.listen(config.port, function(){
		console.log(`API REST corriendo en puerto:${config.port}`)
	});
});

