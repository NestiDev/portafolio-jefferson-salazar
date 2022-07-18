/* 
  requerimiento de 'express' y su '.Router()'
*/
const router = require('express').Router();

/* 
  message: endpoint que recibe los datos que envia el usuario a travez 
  del formulario
*/
router.get('/', (req, res) => {
  res.render('pages/index');
});

router.get('/portfolio', (req, res) => {
  res.render('pages/portfolio');
});

/* 
  exportacion del archivo router
*/
module.exports = router;