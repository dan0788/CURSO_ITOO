const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("config");
const { joiUserSchema, joiUserSchema1 } = require("../models/usuarios_validate");
const usuarios_funciones = require("./usuarios_funciones");
const ruta = express.Router();

let verificarToken = (request, response, next) => {
    let token = request.get("token");
    jwt.verify(token, config.get("configToken.seed"), (error, decoded) => {
        if (error) {
            return response.status(401).json({ "msj": "Token inválido" });
        };
        request.usuario = decoded.user;
        next();
    });


}

ruta.get("/all", verificarToken, function (request, response) {
    let result = usuarios_funciones.datos.mostrarUsuarios();
    result.then(msj => response.json(msj))
        .catch(error => response.status(400).json(error));
});
ruta.get("/allactive", function (request, response) {
    let result = usuarios_funciones.datos.mostrarUsuariosActivos();
    result.then(msj => response.json(msj))
        .catch(error => response.status(400).json(error));
});
ruta.get("/:id", function (request, response) {
    let result = usuarios_funciones.datos.buscarUsuarioPorID(request.params.id);
    result.then(msj => response.json(msj))
        .catch(error => response.status(400).json({ "error": error, "msj": "No existe el usuario " + request.params.id }));
});

ruta.post("/", function (request, response) {
    let body = request.body;
    const { error, value } = joiUserSchema.validate({
        nombre: body.nombre,
        apellido: body.apellido,
        edad: body.edad,
        email: body.email,
        genero: body.genero,
        curso: body.curso,
        user: body.user,
        pass: body.pass,
        status: body.status,
        img: body.img
    });
    let validEmail = usuarios_funciones.datos.validateIfExists("email", body.email);
    validEmail.then(msj => {
        console.log(msj)
        if (msj != "") response.status(400).json("El email ya existe");
        else if (error) {
            response.status(400).json(error.details[0].message + validEmail);
        } else {
            try {
                let result = usuarios_funciones.datos.crearUsuario(body);
                result.then(msj => response.json({ "msj": "Usuario creado con éxito" }))
                    .catch(error => response.status(400).json("error1" + error));
            } catch (ex) {
                response.status(400).json("error2" + ex);
            }
        };
    }).catch(error => response.status(400).json({ "error": error }));
});
//primero obtener ruta para agregar a cada funcion ruta
ruta.put("/", (request, response) => {
    let body = request.body;
    const { error, value } = joiUserSchema1.validate({
        [body.campo]: body.value
    });
    if (error) {
        response.status(400).json(error.details[0].message);
    } else {
        let user = usuarios_funciones.datos.actualizarUsuario(body);
        user.then(msj => response.json(msj))
            .catch(error => response.status(400).json(error));
    }
});
ruta.delete("/", function (request, response) {
    let body = request.body;
    let result = usuarios_funciones.datos.eliminarUsuario(body.id);
    result.then(msj => response.json({ "msj": "Usuario eliminado con éxito" }))
        .catch(error => response.status(400).json({ "error": error, "msj": "No existe el usuario " + body.id }));
});


module.exports = ruta;