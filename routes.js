const express =  require('express');
const router = express.Router();

const conexion = require('./database/db');
const sesionController = require('./controllers/sesionController');

router.get('/', (req,res) => {
    res.render('index.ejs');
});

router.post('/sesion', sesionController.sesion)

router.get('/nv', (req,res) => {
    res.render('create.ejs');
})
module.exports = router;