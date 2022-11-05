var nombre;
var apellido;
var filename;
var dirname;
function setNombre(nombre) {
    this.nombre = nombre;
}
function setApellido(apellido) {
    this.apellido = apellido;
}
function setFilename(filename) {
    this.filename = filename;
}
function setDirname(dirname) {
    this.dirname = dirname;
}
function getNombre() {
    return this.nombre;
}
function getApellido() {
    return this.apellido;
}
function getFilename() {
    return this.filename;
}
function getDirname() {
    return this.dirname;
}
module.exports.funciones = {
    getnombre:getNombre,
    getapellido:getApellido,
    getfilename:getFilename,
    getdirname:getDirname,
    setnombre:setNombre,
    setapellido:setApellido,
    setfilename:setFilename,
    setdirname:setDirname
}

