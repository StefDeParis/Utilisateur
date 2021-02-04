const express = require('express');
const router = express.Router();

//const model = require('../models/employes.model')();
var employeController = require('../controllers/employe.controller');

router.get('/', employeController.show);

router.post('/add', employeController.save);

router.get('/select/:id', employeController.edit);

router.get('/delete/:id', employeController.delete);

module.exports = router;