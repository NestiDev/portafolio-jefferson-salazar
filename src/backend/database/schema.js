/* 
    requerimiento del archivo 'connectDB', en el cual definimos
    la conexion a mongoDB
*/
let connectDB = require('./connect');

/*
    requerimos el Schema el model del modulo mongoose
    que nos permiten crear el esquema de la coleccion
*/
let { Schema, model } = require('mongoose');

/* 
    a continuacion en una "const" almacenamos un nuevo esquema que 
    contiene dentro de su scope los mismos parametros definidos en la 
    base de datos, ademas hacemos uso de dos propiedades.
    'timestamps': para conocer la fecha de creacion
    'versionKey': para remover la version
*/
const COLLECTION = new Schema ({
    name:   { type: String, require: true },
    email:  { type: String, require: true },
    post:   { type: String, require: true }
}, { timestamps: true, versionKey: false });

/* 
    exportacion del archivo model
*/
module.exports = model(`${process.env.TABLE}`, COLLECTION);