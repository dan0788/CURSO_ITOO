const joi = require("joi");

var joiCurseSchema = new joi.object().keys({
    curso: joi.string().required().min(5).max(50),
    maxUsers: joi.number().required().integer().min(1).max(45),
    profesor: joi.string().required().min(5).max(30),
    duration: joi.number().required().integer().min(10).max(80),//en horas
    description: joi.string(),
    status: joi.boolean().default(true)
});
var joiCurseSchema1 = new joi.object().keys({
    curso: joi.string().min(5).max(50),
    maxUsers: joi.number().integer().min(1).max(45),
    profesor: joi.string().min(5).max(30),
    duration: joi.number().integer().min(10).max(80),//en horas
    description: joi.string(),
    status: joi.boolean().default(true)
});

module.exports = {joiCurseSchema,joiCurseSchema1};