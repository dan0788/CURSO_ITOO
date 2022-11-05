const mongoose = require("mongoose");
const {joiCurseSchema} = require("./cursos_validate");
const joigoose = require("joigoose")(mongoose, { convert: false });



let curseSchema = new mongoose.Schema(joigoose.convert(joiCurseSchema));

module.exports = mongoose.model("cursoModel", curseSchema);