const { response, request } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const usuariosActivos = {estado: true};

const usuariosGet = async (req, res = response) => {

    const { limite = 5, desde = 0} = req.query
    const usuarios = await Usuario.find(usuariosActivos)
        .skip(Number(desde))
        .limit(Number(limite));
    // const query = req.query;

    const total = await Usuario.countDocuments(usuariosActivos);

    res.json({
        total,
        usuarios
    });
}


const usuariosPut = async (req, res = response) => {

    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;

    //TODO validar contra base de datos
    if (password) {
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);
    

    res.json({
        msg: 'put API controlador',
        "id": id
    });
    

}

const usuariosPost = async (req, res = response) => {

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    //Encriptar pass
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync(password, salt);

    //Guardar
    await usuario.save();

    res.json({
        usuario
    });

}

const usuariosPatch = async (req, res = response) => {
    
    const {id} = req.params;


    res.json({
       id
    });
}
const usuariosDelete = async(req, res = response) => {
    
    const {id} = req.params;

    //Eliminar fisicamente
    // const usuario = await(Usuario.findByIdAndDelete(id));

    const usuario = await Usuario.findByIdAndUpdate(id, {estado: false});

    res.json({
        Usuario
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete

}