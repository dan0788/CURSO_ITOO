function saludo(texto) {
    console.log(texto);
}
saludo("Hola mundo");
var nombres = ["Daniel", "Paúl"];
var mapeo = nombres.map((element) => {
    return element;
});
console.log(mapeo);
function sumar(num1, num2, callback) {
    let resultado = num1 + num2;
    callback(resultado);
}
function mostrarResultado(resultado) {
    console.log(`El resultado es: ${resultado}`);
}
sumar(5, 8, mostrarResultado);
//nodejs
const dato = require('./datos');
dato.funciones.setnombre("Daniel");
console.log("Mi nombre es " + dato.funciones.getnombre());
dato.funciones.setfilename(__filename);
console.log("Filename: " + dato.funciones.getfilename());
dato.funciones.setdirname(__dirname);
console.log("Dirname: " + dato.funciones.getdirname());
//------------------módulo Path-------------------------
const path = require('path');
const objPath = path.parse(__filename);//parse me manda como objeto la variable
console.log(objPath); console.log("Extensión: " + objPath.ext);
//------------------módulo OS-------------------------
const os = require('os');
var freememory = os.freemem();
var totalmemory = os.totalmem();
console.log("Free memory: " + (freememory / (1024 * 1024)) + "\nTotal memory: " + (totalmemory / (1024 * 1024)));
//------------------módulo Filesystem-------------------------
const fs = require('fs');
var archivos = fs.readdirSync("./");
console.log("Archivos lectura síncrona: " + archivos);
archivos = fs.readdir(objPath.dir, (err, files) => {
    if (err) console.log("Error: " + err);
    else console.log("Archivos lectura asíncrona: " + files);
});
//------------------módulo Events-------------------------
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
//registrar listener
myEmitter.on("mensajeloger", (arg) => {
    console.log("llamado...", arg.nombre);
});
//registrar el evento
myEmitter.emit("mensajeloger", { nombre: "Daniel" });
//------------------módulo Events-------------------------
const http = require("http");
const server = http.createServer((req, res)=>{
    if(req.url==="/"){
        res.write("Hola " + dato.funciones.getnombre());
        res.end();
    }
    if(req.url==="/api/calculadora.php"){
        res.write("Calculadora");
        res.end();
    }
});
server.listen(3000);








