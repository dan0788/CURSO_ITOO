const usuarios_model = require("../models/usuarios_model")
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const ruta = express.Router();

ruta.post("/", (request, response) => {
    let body = request.body;
    usuarios_model.findOne({ user: body.user })
        .then(msj => {
            if (msj) {
                const passValid = bcrypt.compareSync(body.pass, msj.pass);//devuelve true or false
                if (!passValid) {
                    response.status(400).json({ "error1": "Usuario o contraseña incorrectos" });
                } else {
                    const jwtoken = jwt.sign(
                        {
                            data: {
                                _id: msj._id,
                                nombre: msj.nombre,
                                apellido: msj.apellido,
                                email: msj.email
                            }
                        }, config.get("configToken.seed"),
                        { expiresIn: config.get("configToken.expiration") });
                    response.json({ "msj": "Acceso permitido", "user": jwtoken });
                }
            } else {
                response.status(400).json({ "error1": "Usuario o contraseña incorrectos" });
            }
        })
        .catch(error => response.status(400).json({ "error2": "Usuario o contraseña incorrectos", "error": error }));
});
async function login(user, password) {
    let usuario = await usuarios_model.find({ user: user })
        .then(msj => {
            msj == "" ? response.json({ "error1": "Usuario o contraseña incorrectos" }) :
                response.json({ "msj": "Acceso permitido", "user": msj });
        })
        .catch(error => response.status(400).json({ "error2": "Usuario o contraseña incorrectos" }));
    return usuario;
}

module.exports = ruta;