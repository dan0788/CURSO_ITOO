const usuarios_model = require("../models/usuarios_model");
const bcrypt = require("bcrypt");

async function crearUsuario(body) {
    let usuario = new usuarios_model({
        nombre: body.nombre,
        apellido: body.apellido,
        edad: body.edad,
        email: body.email,
        genero: body.genero,
        curso: body.curso,
        user: body.user,
        pass: bcrypt.hashSync(body.pass,10),
        status: body.status,
        img: body.img
    });
    return usuario.save();
}
async function actualizarUsuario(body) {
    let result = await usuarios_model.findByIdAndUpdate(
        body.id,
        {
            $set: {
                [body.campo]: body.value
            }
        },
        {
            new: true
        }
    )
        .select({
            nombre: 1,
            apellido: 1,
            edad: 1,
            email: 1,
            genero: 1,
            curso: 1,
            img: 1
        });
    return result;
}
async function buscarUsuarioPorID(id) {
    let result = await usuarios_model.findById(id)
        .select({
            nombre: 1,
            apellido: 1,
            edad: 1,
            email: 1,
            genero: 1,
            curso: 1,
            img: 1
        });
    if (!result) {
        return false;
    }
    return result;
}
async function mostrarUsuarios() {
    let result = await usuarios_model.find()
    /* .select({
        nombre: 1,
        apellido: 1,
        edad: 1,
        email: 1,
        genero: 1,
        curso: 1,
        img: 1
    }) */;
    return result;
}
async function mostrarUsuariosActivos() {
    let result = await usuarios_model.find({ status: true });
    return result;
}
async function eliminarUsuario(id) {//esta function no elimina, cambia el status del estudiante a false
    let result = await usuarios_model.findByIdAndUpdate(
        id,
        {
            $set: {
                status: false
            }
        },
        {
            new: true
        }
    );
}

async function validateIfExists(field, valor) {
    let result = await usuarios_model.find({ [field]: valor });
    return result;
}
module.exports.datos = {
    actualizarUsuario: actualizarUsuario,
    crearUsuario: crearUsuario,
    buscarUsuarioPorID: buscarUsuarioPorID,
    mostrarUsuarios: mostrarUsuarios,
    mostrarUsuariosActivos: mostrarUsuariosActivos,
    eliminarUsuario: eliminarUsuario,
    validateIfExists: validateIfExists
}