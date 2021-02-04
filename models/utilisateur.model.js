module.exports = function(){
    var db = require('../db/mongo-conn')();
    var Schema = require('mongoose').Schema;

    var utilisateur = Schema({
        nom: String,
        prenom: String,
        adresse: String
    });

    return db.model('utilisateurs', utilisateur);

}