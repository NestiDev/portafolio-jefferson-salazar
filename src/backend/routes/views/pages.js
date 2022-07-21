/* 
  requerimiento de 'express' y su '.Router()'
*/
const router = require('express').Router();

/* 
  /: endpoint que muestra la vista de index.ejs
*/
router.get('/', (req, res) => {
  res.render('pages/index');
});

/* 
  portfolio: endpoint que muestra la vista portfolio.ejs
*/
router.get('/portfolio', (req, res) => {
  res.render('pages/portfolio');
});

/* 
  exportacion del archivo router
*/
module.exports = router;