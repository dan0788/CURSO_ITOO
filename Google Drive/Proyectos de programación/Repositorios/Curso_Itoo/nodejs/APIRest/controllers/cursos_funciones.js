const cursos_model = require("../models/cursos_model");
const mongoose = require("mongoose");
//añadir función para agregar alumnos en cada curso
//añadir campo alumnos[] en el modelo de mongoose
async function crearCurso(body) {
    let result = new cursos_model({
        curso: body.curso,
        maxUsers: body.maxUsers,
        profesor: body.profesor,
        duration: body.duration,
        description: body.description
    });
    return result.save();
}
async function buscarCursoByID(id) {
    let result = await cursos_model.findById(id)
    .select({
        curso: 1,
        profesor: 1,
        duration: 1,
        description: 1
    });
    return result;
};
async function mostrarCursos() {
    let result = await cursos_model.find()
    /* .select({
        curso: 1,
        profesor: 1,
        duration: 1,
        description: 1
    }) */;
    return result;
};
async function mostrarCursosActivos() {
    let result = await cursos_model.find({status:true})
    /* .select({
        curso: 1,
        profesor: 1,
        duration: 1,
        description: 1
    }) */;
    return result;
};
async function actualizarCursoByID(idUpdate, fieldUpdate, valueUpdate) {
    let result = await cursos_model.findByIdAndUpdate(
        idUpdate,
        {
            $set: {
                [fieldUpdate]: valueUpdate
            }
        },
        {
            new: true
        }
    )
    .select({
        curso: 1,
        profesor: 1,
        duration: 1,
        description: 1
    });
    return result;
};
async function eliminarCurso(id) {
    let result = await cursos_model.findByIdAndUpdate(
        id,
        {
            $set: {
                status: false
            }
        },
        {
            new: false
        }
    );
    return result;
}

async function validateIfExists(field, valor) {
    let result = await cursos_model.find({[field]:valor});
    return result;
}
module.exports.datos = {
    crearCurso: crearCurso,
    buscarCursoByID: buscarCursoByID,
    mostrarCursos: mostrarCursos,
    mostrarCursosActivos:mostrarCursosActivos,
    actualizarCursoByID: actualizarCursoByID,
    eliminarCurso: eliminarCurso,
    validateIfExists:validateIfExists
}