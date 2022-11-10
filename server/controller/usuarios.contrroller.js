const Usuarios = require('../model/usuario.model')
const bcrypt = require('bcrypt')

module.exports = {
    acceso: async function (req, res) {
        const users = await Usuarios.users.find();
        res.json(users);
    },
    
    nuevo: async function (req, res) {
        // {
        //     first_name: 'steve',
        //     last_name: 'Jobs',
        //     email: 'steve.jobs@gmail.com',
        //     password: '123456'
        // }
        const body = req.body;
        const user = new Usuarios.users(body);
        user.save()
        .then( data => res.json(data))
        .catch(err => res.json(err));
    },

    remover: async function (req, res) {
        // {
        //     "_id": "636d57dee80f54419378d9a1"
        // }
        let id = req.body._id;
        
        Usuarios.users.remove({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    consultar: async function (req, res) {
        // {
        //     "_id": "636d57dee80f54419378d9a1"
        // }
        let id = req.body._id;
        
        Usuarios.users.find({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }

};




