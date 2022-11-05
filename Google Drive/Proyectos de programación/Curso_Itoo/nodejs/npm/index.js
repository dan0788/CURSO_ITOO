const colors = require("colors");
const express = require("express");
const morgan = require("morgan");
const joi = require("joi");//validación de datos

console.log("Hola mundo".yellow.bgRed);
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red); // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass

var error = colors.red;
error('this is red');
// set theme
colors.setTheme({
    silly: ['rainbow', 'bgWhite'],
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});
// outputs red text
console.log(colors.error("this is an error"));
// outputs yellow text
console.log(colors.warn("this is a warning"));
console.log(colors.silly("this is a silly message"));
console.log(colors.prompt("this is a prompt message"));
console.log(colors.verbose("this is a verbose message"));
console.log(colors.help("this is a help message"));

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(function(request, resolve, next){
    console.log("Logging...");
    next();
});
app.use(morgan("tiny"));
console.log("morgan en uso");
const miPuerto = process.env.PORT || 3000;
app.listen(miPuerto, () => {
    console.log(`Escuchando en ${miPuerto}`);
});

/* app.get('/:id', (request, response) => {
    response.send(request.params);
}); */
app.get("/", (request, response) => {
    response.send(request.query);
});
const usuarios = [
    { id: 1, name: "Daniel", lastname: "Ayala", birth: "05/04/1994" },
    { id: 2, name: "Paúl", lastname: "Cuesta", birth: "11/10/2005" },
    { id: 3, name: "Carlos", lastname: "Pinto", birth: "14/06/1993" },
    { id: 4, name: "Karen", lastname: "Cuesta", birth: "21/07/2002" }
];
app.get("/usuario", (request, response) => {
    response.send(usuarios);
});
app.get("/usuario/:id", (request, response) => {
    let usuario = usuarios.find(user => user.id === parseInt(request.params.id));
    if (!usuario) response.status(404).send("Usuario no encontrado");
    response.send(usuario);
});

app.post("/usuario/:id", (request, response) => {
    //    if(!request.body.name || request.body.name.length <=2){//valida q sea string y un mínimo de datos
    //        response.status(400).send("Bad request");
    //        return;
    //    }
    const schema = joi.object({
        name: joi.string().required().min(3).max(10),
        lastname: joi.string().required().min(3).max(10),
        day: joi.number().integer().required().min(1).max(31),
        month: joi.number().integer().required().min(1).max(12),
        year: joi.number().integer().required().min(1900).max(2022)
    });
    const { error, value } = schema.validate({ 
        name: request.body.name, 
        lastname: request.body.lastname,
        day: request.body.day,
        month: request.body.month,
        year: request.body.year
    });
    if (error) {
        response.status(400).send(error.details[0].message);
    } else if (!error) {
        const user = {
            id: usuarios.length+1,
            name: value.name,
            lastname: value.lastname,
            birth: value.day+"/"+value.month+"/"+value.year
        };
        usuarios.push(user);
        response.send(usuarios);
    }
});
app.put("/usuario/:id", (request, response) => {
    let usuario = usuarios.find((user) => user.id === parseInt(request.params.id));
    if (!usuario) {
        response.status(404).send("Usuario no encontrado");
        return;
    }
    const schema = joi.object({
        name: joi.string().required().min(3).max(10)
    });
    const { error, value } = schema.validate({ name: request.body.name });
    if (error) {
        response.status(400).send(error.details[0].message);
        return;
    }
    usuario.name = value.name;
    response.send(usuario);
});
app.delete("/usuario/:id", (request, response) => {
    let usuario = usuarios.find((user) => user.id === parseInt(request.params.id));
    if (!usuario) {
        response.status(404).send("Usuario no encontrado");
        return;
    }
    let index = usuarios.indexOf(usuario);
    usuarios.splice(index,1);
    response.send(usuarios);
});
//cualquier función asíncrona devuelve una promesa