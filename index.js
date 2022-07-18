/* 
    requerimiento de 'express' a 'express()'
    'port' almacena la configuracion del puerto
*/
let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

/* 
    requerimiento del modulo path
*/
let path = require('path');

/*
    dotenv: permite crear variables de entorno
    para guardar de manera segura nuestras credenciales
*/
require('dotenv').config();

app.use(express.static('src/frontend'));

/* 
    configuracion del motor de platilla ejs
*/
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/frontend'));

/* 
    requerimiento de message.js donde definimos el 
    endpoint que recibe los datos enviados por el
    usuario a travez del formulario
*/
let portafolio = require('./src/backend/routes/views/portafolio');
let message = require('./src/backend/routes/api/message');

/*
    requerimiento de los modulos 'morgan' y 'cors' 
*/
let morgan = require('morgan'),
    cors = require('cors');

/*
    uso de los middlewares 'json()', 'urlencoded()'
    'morgan()', 'cors()'
*/
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/* 
    uso y acceso de las rutas al servidor local
*/
app.use('/', portafolio);
app.use('/contacts', message);

/* 
    configuracion del servidor
*/
app.listen(port, (err) => {
    (err) ? console.log(err):console.log('server running') ;
});