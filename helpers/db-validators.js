
const Role = require('../models/role');
const Usuario = require('../models/usuario')

const esRoleValido = async (rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la base de datos`)
    }
}

const emailExiste = async (correo = '') => {

    const Existe = await  Usuario.findOne({ correo: correo });
    if (Existe) {
        throw new Error(`El correo ${correo} ya ha sido registrado `)
    }
}

const existeUsuarioID = async (id) => {

    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El registro no existe`)
    }
}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioID
}