const cursos_funciones = require("./cursos_funciones");
const { joiCurseSchema, joiCurseSchema1 } = require("../models/cursos_validate");
const express = require("express");

const ruta = express();

ruta.get("/all", (request, response) => {
    let result = cursos_funciones.datos.mostrarCursos();
    result.then(msj => response.json(msj))
        .catch(error => response.status(400).json({ "msj": "Parece que no existen datos" }));
});

ruta.get("/allactive", (request, response) => {
    let result = cursos_funciones.datos.mostrarCursos();
    result.then(msj => response.json(msj))
        .catch(error => response.status(400).json({ "msj": "Parece que no existen datos" }));
});

ruta.get("/:id", (request, response) => {
    let result = cursos_funciones.datos.buscarCursoByID(request.params.id);
    let body=request.body;
    result.then(msj => response.json(msj))
        .catch(error => response.status(400).json({ "msj": "El Usuario " + body.id + " no existe" }));
});

ruta.post("/", (request, response) => {
    let body = request.body;
    const { error, value } = joiCurseSchema.validate({
        curso: body.curso,
        maxUsers: body.maxUsers,
        profesor: body.profesor,
        duration: body.duration,
        description: body.description
    });
    if (error) {
        response.status(400).json(error.details[0].message);
    } else {
        let result = cursos_funciones.datos.crearCurso(body);
        result.then(msj => response.json({"msj":"Curso creado con éxito"}))
            .catch(error => response.status(400).json(error));
    }
});

ruta.put("/", (request, response) => {
    let body = request.body;
    const { error, value } = joiCurseSchema1.validate({
        [body.campo]: body.value
    });
    if (error) {
        response.status(400).json(error.details[0].message);
    } else {
        let result = cursos_funciones.datos.actualizarCursoByID(body.id, body.campo, body.value);
        result.then(msj => response.json(msj))
            .catch(error => response.status(400).json({ "msj": "El curso " + body.id + " no existe" }));
    }
});

ruta.delete("/", (request, response) => {
    let body = request.body;
    let result = cursos_funciones.datos.eliminarCurso(body.id);
    result.then(msj => response.json(msj))
        .catch(error => response.status(400).json({ "msj": "El curso " + body.id + " no existe" }));
});
module.exports = ruta;