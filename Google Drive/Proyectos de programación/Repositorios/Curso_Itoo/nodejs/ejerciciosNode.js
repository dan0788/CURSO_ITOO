var contador = 0;
function hi() {
    contador++;
    console.log(`Hola mundo ${contador}`)
}
function exercise(num) {
    return new Promise((resolve, reject) => {
        while (contador <= num-1) {
            hi();
        }
    });
}
const readline=require('readline');
const{stdin:input, stout:output}=require('process');
const rl = readline.createInterface({ input, output });

rl.question('What do you think of Node.js? ',answer=>{
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.close();
});

exercise(2);
