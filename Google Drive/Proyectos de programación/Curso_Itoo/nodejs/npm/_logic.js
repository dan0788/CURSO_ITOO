const express = require("express");
const joi = require("joi");
const fs = require("fs");
const app = express();
app.use(express.json());
function setPort(puerto) {/* correct */
    return process.env.port || puerto;
}
var server;
function startListen(port, msj) {
    let portNumber = validateNumber(port);
    if (isNaN(portNumber)) return;
    let newPort = setPort(portNumber);
    server = app.listen(newPort, () => {
        console.log(msj + portNumber);
    });
}
function getURLParam(url, port, msj) {
    startListen(port, msj);
    return new Promise((resolve, reject) => {
        app.get(url, (request, response) => {
            let id = validateNumber(request.params.id);
            if (!id) reject("");
            else resolve(id);
            response.send("");
        });
    });
}
function post() {

}
function getCountry(port, JSONfile) {
    fs.readFile(JSONfile, (err, data) => {
        if (err) throw err;
        let jsondata = JSON.parse(data);

    });
    getURLParam("/countries/:id", port, `Escuchando en el puerto `);
}
function validateNumber(number) {/* correct */
    const schema = joi.object({
        num: joi.number().required().min(1).integer()
    });
    let { error, value } = schema.validate({ num: number });
    if (error) return error.details[0].message;
    return parseInt(value.num);
}
/* getCountry(3600, "countries.json"); */
getURLParam("/countries/:id", 3600, `Escuchando en el puerto `)
    .then(msj => console.log(msj))
    .catch(msj => console.log(msj));