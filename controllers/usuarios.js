const { response } = require('express');

const usuariosGet = (req, res  = response) => {

    const query = req.query;

    res.json({
        msg: 'get API controlador'
    });
}
const usuariosPut = (req, res  = response) => {

    const {id} = req.params;

    res.json({
        msg: 'put API controlador',
        "id": id
    });
}
const usuariosPost = (req, res  = response) => {

    const body = req.body;

    
    res.json({
        msg: 'post API controlador'
    });
}
const usuariosPatch = (req, res  = response) => {
    res.json({
        msg: 'patch API controlador'
    });
}
const usuariosDelete = (req, res  = response) => {
    res.json({
        msg: 'delete API controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete

}