

module.exports = function (app) {

    const express = require('express');

    //instrucciones para devolver JSON de nuestra api
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    const usuariosController = require('../controller/usuarios.contrroller')
    
    app.get('/', function (req, res) {
        usuariosController.acceso(req,res);
    });
    
    app.post('/nuevo', function (req, res) {
        usuariosController.nuevo(req,res);
    });

    app.get('/remove', function (req, res) {
        usuariosController.remover(req,res);
    });

    app.get('/query', function (req, res) {
        usuariosController.consultar(req,res);
    });
    
}


