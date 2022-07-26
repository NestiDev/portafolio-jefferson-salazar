/* 
    requerimiento de 'express' a 'express()'
    'port' almacena la configuracion del puerto
*/
let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

/* 
    requerimiento de path
*/
let path = require('path');

/* 
    aqui definimos la configuracion de los archivos img, json,
    fonts, javascript y css que necesitamos
*/
app.use(express.static(path.join(__dirname, './src/frontend')));

/* 
    configuracion del motor de platilla ejs que me permite
    definnir codigo html
*/
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/frontend'));

/* 
    requerimiento de los endpoint
*/
let pages = require('./src/backend/routes/views/pages');
let message = require('./src/backend/routes/api/message');

/*
    requerimiento de 'morgan' y 'cors' 
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
    definicion del acceso a los endpoints
*/
app.use('/', pages);
app.use('/contacts', message);

/* 
    configuracion del servidor
*/
app.listen(port, (err) => {
    (err) ? console.log(err):console.log('server ok') ;
});