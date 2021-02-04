const model = require('../models/utilisateur.model')();

var utilisateurController = function () { }

utilisateurController.show = function (req, res, next) {
    model.find({}, (err, result) => {
        if (err) { console.log(err); }

        //API
        res.json({
            status: 200,
            result,
            message: "User(s) retrieved successfully"
        })

        // res.render('utilisateur.ejs', {
        //     title: 'CRUD MongoDB',
        //     utilisateur: result,
        //     txtId: '',
        //     txtNom: '',
        //     txtPrenom: '',
        //     txtAdresse: '',
        // });
    });
    console.log('SHOWED !');
}

utilisateurController.edit = function (req, res) {
    let id = req.params.id;
    model.findById(id, (err, result) => {
        if (err) { console.log(err); }
        result.save();
        res.render('utilisateur.ejs', {
            title: 'CRUD MongoDB',
            utilisateur: [],
            txtId: result.id,
            txtNom: result.nom,
            txtPrenom: result.prenom,
            txtAdresse: result.adresse
        });
    });

    //API
    res.json({
        rows,
        status: 200,
        message: "User selected successfully"
    })
console.log('EDITED !');
}

utilisateurController.delete = function (req, res) {

    let id = req.params.id;
    model.deleteOne({ _id: id }, (err, result) => {
        if (err) { console.log(err); }
        res.redirect('/utilisateurs/');
    });
   
    //API
    res.json({
        status: 200,
        message: "User deleted successfully"
    })
    console.log('DELETED !');
}

utilisateurController.save = function (req, res) {
    if (req.body.id == 0) {

        var body = req.body;
        body.status = false;

        //API
        res.json({
            status: 200,
            message: "New user added successfully"
        })

        model.create(body, (err, result) => {
            if (err) { console.log(err); }
            res.redirect('/utilisateurs/');
        });
        console.log('ADDED !')

    } else {
        var body = req.body;

        model.updateOne({ _id: body.id }, {
            $set: {
                nom: body.nom,
                prenom :body.prenom,
                adresse: body.adresse
            }
        }, { multi: true }, (error, result) => {
            if (error)
                throw error;
            res.redirect('/utilisateurs/');
        });
        console.log('UPDATED !')

        //API
        res.json({
            status: 200,
            message: "Person updated successfully"
        })
    }
}

module.exports = utilisateurController;