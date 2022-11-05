const joi = require("joi");

var joiUserSchema = joi.object().keys({
    nombre: joi.string().required().min(3).max(25),
    apellido: joi.string().required().min(3).max(25),
    edad: joi.number().required().integer().min(17).max(70),
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "es", "ec"] } }).default("noemail@ups.edu.ec"),
    genero: joi.array().items(joi.string().pattern(new RegExp('a-zA-Z')).valid("Masculino", "Femenino", "Gey", "Bisexual", "Transexual")),
    curso: joi.string().required(),
    user: joi.string().required().min(5),
    pass: joi.string().required().min(5).trim(false),
    status: joi.boolean().default(true),
    img: joi.string()
});
var joiUserSchema1 = joi.object().keys({
    nombre: joi.string().min(3).max(25),
    apellido: joi.string().min(3).max(25),
    edad: joi.number().integer().min(17).max(70),
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "es", "ec"] } }).default("noemail@ups.edu.ec"),
    genero: joi.array().items(joi.string().pattern(new RegExp('a-zA-Z')).valid("Masculino", "Femenino", "Gey", "Bisexual", "Transexual")),
    curso: joi.string(),
    user: joi.string().min(5).max(15),
    pass: joi.string().min(5).max(20),
    status: joi.boolean().default(true),
    img: joi.string()
});

module.exports = { joiUserSchema, joiUserSchema1 };