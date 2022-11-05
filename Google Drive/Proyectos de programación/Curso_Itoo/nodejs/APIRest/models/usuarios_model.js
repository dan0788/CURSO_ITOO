const mongoose = require("mongoose");
const {joiUserSchema}=require("./usuarios_validate");
const joigoose = require("joigoose")(mongoose, { convert: false });
//personalizar mensajes de error

let usuarioSchema = new mongoose.Schema(joigoose.convert(joiUserSchema));

module.exports = mongoose.model("usuarioModel", usuarioSchema);