const express = require('express');
const router = express.Router();

//const model = require('../models/employes.model')();
var utilisateurController = require('../controllers/utilisateur.controller');

router.get('/', utilisateurController.show);

router.post('/add', utilisateurController.save);

router.get('/select/:id', utilisateurController.edit);

router.get('/delete/:id', utilisateurController.delete);

module.exports = router;