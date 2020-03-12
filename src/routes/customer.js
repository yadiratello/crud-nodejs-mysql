const express = require('express');
const router = express.Router();

//importando del controlador
const customerController = require('../controllers/customerController');

//llamando al metodo list
router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);

module.exports = router;