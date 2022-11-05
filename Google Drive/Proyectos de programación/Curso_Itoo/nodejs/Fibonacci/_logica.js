const fs = require("fs");

var fibonacci = (cantidad) => {
    if (cantidad < 2) {
        return cantidad;
    } else if (cantidad >= 2) {
        return fibonacci(cantidad - 1) + fibonacci(cantidad - 2);
    }
}
//Promise pr=new Promise();
function serieFibonacci(cantidad) {
    return new Promise((resolve, reject) => {
        var fib1 = 0; var fib2 = 1; var serie = "";
        fibonacci(cantidad);
        for (var i = 0; i < cantidad; i++) {
            serie += fibonacci(i) + "\n";
        }
        fs.writeFile("fibonacci.txt", serie, (err) => {
            if (err) reject(err);
            else resolve("Archivo creado con éxito");
        });
    })
}

module.exports.datos = {
    serieFibonacci: serieFibonacci
}
