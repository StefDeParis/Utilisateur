module.exports = function(){
    var db = require('../db/mongo-conn')();
    var Schema = require('mongoose').Schema;

    var employes = Schema({
        nom: String,
        prenom: String,
        status: Boolean
    });

    return db.model('employes', employes);

}