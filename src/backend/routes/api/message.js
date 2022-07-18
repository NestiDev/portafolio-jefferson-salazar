/* 
    requerimiento del archivo 'schema'
*/
let schema = require('../../database/schema');

/* 
    requerimiento de 'express' y su '.Router()'
*/
const router = require('express').Router();

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

router.get('/users', async (req, res) => {
    let users = await schema.find()

    res.json(users);
})


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
        haciendo uso del 'schema' pasamos los datos que llegan
        en el req.body y los almacenamos en una constante
    */
    const contactMessage = new schema ({ name, email, post });

    /* 
        finalmente pasamos la constante que crea el nuevo
        schema el metodo save() de mongoDB que permite 
        almacenar un valor dentro de la base de datos
    */
    await contactMessage.save()

    /* 
        este metodo save() retorna una promesa con la cual
        podemos conocer si el dato se almaceno correctamente
    */
    .then(() =>  res.status(200).json({msn: 'mensaje guardado satisfactorimente'}))
    .catch(err => res.status(401).json({msn: err}));
});

/* 
    exportacion del archivo router
*/
module.exports = router;