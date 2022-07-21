/* 
    requerimiento de 'express' y su '.Router()'
*/
const router = require('express').Router();

/* 
    requerimiento del modulo fs
*/
let fs = require('fs');

/*
    requerimos body y validationResult del modulo express-validator
    que nos permiten crear las validaciones a los diferentes campos
*/
let { body, validationResult } = require('express-validator');

/* 
    VALIDATIONS: definimos un arreglo de validaciones para cada campo
    haciendo uso de la propiedad body
*/
const VALIDATIONS = [
    body('name').trim().matches(/^[a-zA-Z\s]{4,16}$/).withMessage('este campo no admite numeros'),
    body('email').trim().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}$/).withMessage('el email no es valido'),
    body('post').trim().matches(/^[a-zA-Z0-9_.+-À-ÿ\s]{10,100}$/).withMessage('este campo no admite simbolos')
];

/* 
    readFileJson: hacemos uso del modulo fs y su metodo readFileSync()
    que recibe la ruta del archivo .json que necesitamos leer traemos
    nuestro archivo message.json donde tenemos almacenado los mensajes 
    de los usuarios

    messages: hacemos uso de JSON.parse() para desconvertir los objetos json
*/
let fileJson = fs.readFileSync('./src/backend/database/message.json', 'utf-8');
let messages = JSON.parse(fileJson);

/* 
    message: endpoint que recibe los datos que envia el usuario a travez 
    del formulario
*/
router.post('/message', VALIDATIONS, async (req, res) => {
    /* 
        valores que envian desde el frontend por el 
        cuerpo del requerimiento
    */
    let { name, email, post } = req.body;

    /* 
        validationResult: toma los valores envieados en el
        req.body y los almacenamos en una variable
    */
    let errors = validationResult(req);

    /* 
        definimos un condicional que retorna un error 400 si
        los valores almacenados en 'errors' no cumplen con
        las validaciones
    */
    if(!errors.isEmpty()) return res.status(400).json({err: errors.array()});

    /* 
        newMessage: definimos un objeto el cual recibe los valores
        que envia el usuario a traves del formulario con los cuales
        creamos un nuevo mensaje
    */
    const newMessage = { name, email, post };

    /* 
        finalmente haciendo uso del metodo push() enviamos al array
        de mensajes existentes el nuevo mensaje
    */
    await messages.push(newMessage)

    /* 
        saveMessage: hacemos uso de JSON.stringify() para convertir a objetos json
        los parametros null y 2 nos ayudan en la configuracion de los valores
    */
    let saveMessage = JSON.stringify(messages, null, 2);

    /* 
        hacemos uso del modulo fs y su metodo writeFile() que recibe la ruta 
        del archivo .json en el cual necesitamos guardar los mensajes 
        de los usuarios, como segundo parametro pasamos el mensaje a guardar
        y finalmente definimos una funcion
    */
    fs.writeFile('./src/backend/database/message.json', saveMessage, 'utf8', (err) => {
        /* 
            el servidor responde con un status(200) solo si el mensaje se
            guarda de manera correcta
        */
        res.status(200).json({msn: 'mensaje guardado satisfactorimente'})
    });
});

/* 
    exportacion del archivo router
*/
module.exports = router;