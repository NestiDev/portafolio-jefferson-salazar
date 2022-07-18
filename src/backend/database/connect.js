/*
    mongoose: permite realizar 
    la conexion entre la base de datos y Nodejs
*/
let mongoose = require('mongoose');

/* 
    hacemos uso de 'mongoose' y su propiedad 'connect()', 
    para realizar la conexion pasamos la uri de la base de datos y 
    configuramos los parametros a true, este retorna una promesa 
    por lo que hacemos uso de 'then()' y 'catch()' para conocer el 
    estado de la conexion
*/
mongoose.connect(process.env.URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(res => console.log('mongoDB successful connection')).catch(err => console.log(err));

/* 
    exportacion del archivo connection
*/
module.exports = mongoose;