//ideas
//historial con varios datos
//angular y deno usan typescript, node usa ecmascript
var nombre = "Daniel";
let apellido = "Ayala";
var numero = "55";
numero = true;
console.log(typeof numero);
//const para variables tipo constante
console.log(`Yo soy ${nombre} ${apellido}`);
//alert(`Yo soy ${nombre} ${apellido}`);
var persona = {//es un objeto
    nombre: "Alejandro",
    apellido: "Cuesta",
    edad: 27,
    sexo: "Masculino",
    cristina: {
        amiga: true,
        hijos: 0,
        pareja: false,
    }
};
/////////////anotacion por puntos y corchetes/////////////////////
var n = persona.nombre;
var n2 = persona["nombre"];
//se puede añadir propiedades al objeto desde afuera
persona.trabaja = true;
console.log(`${n} ${n2} ${persona.trabaja}`);
////////////////asignación por destructuring
const {edad, sexo, ...rest} = persona;//para sacar esas variables del objeto
console.log(`Yo soy ${persona.nombre} ${persona.apellido}`);
console.log(`De edad ${edad} y sexo ${sexo}`);
console.log(rest);
///////////////Funciones/////////////////
function saludo(nomb) {
    console.log(`Hola ${nomb}`);
    return nomb;
}
let name = saludo("Daniel");
//////////////if//////////////////
if (name === "Daniel") {
    console.log("Tú eres Daniel");
} else {
    console.log("Tú no eres Daniel");
}
console.log(name === "Daniel" ? "Tú eres Daniel" : "Tú no eres Daniel");
//////////switch//////////////////
var opcion = 1;
switch (opcion) {
    case 1:
        console.log(`Opción es igual a ${opcion}`);
        break;
    default:
        console.log("No hay ninguna opción");
        break;
}
//////////////arrays//////////////
var array = [5, "asd", true];/*se puede combinar tipos de datos en un array*/
array.push("hola");/*se añade el elemento al final del array*/
array.pop();/*elimina el último elemento del array*/
array.shift();/*elimina el primer elemento del array*/
console.log(array.indexOf("asd"));
console.log(array);/*indexof devuelve el índice del elemento en el array*/
/*array.slice() devuelve un clon del array sin modificar al array original*/
////////////////array de objetos////////////////
let arrayObjects = [
    {
        nombre: "Paúl",
        apellido: "Cuesta"
    },
    {
        nombre: "Cristina",
        apellido: "Figueroa"
    },
    {
        nombre: "Tatiana",
        apellido: "Places"
    }
];
console.log(arrayObjects[2].nombre);
////////////foreach////////////
arrayObjects.forEach(element => {/*foreach es más ligero y conveniente*/
    console.log(`${element.nombre} ${element.apellido}`);
});
///////////////////////funciones simples///////////////
function holaMundo() {
    console.log("hola mundo!");
}
holaMundo();
function edadFoo(anoNacimiento) {
    let date = new Date();
    console.log(`Tienes ${date.getFullYear() - anoNacimiento} años`);
}
edadFoo(1994);
/////////////////////funciones tipo flecha////////////////////
/*siempre son anónimas, son más ligeras, gastan menos memoria*/
/*si se le quiere dar un nombre, se la guarda en una variable(generalmente en constantes)*/
const f = (txt) => {
    console.log(txt);
};
let g = f("Yo soy Daniel");
/////////////////funcion setTimeOut///////////////
/*recibe como parámetro una función tipo flecha más el delay en milisegundos*/
setTimeout(() => {
    console.log("Han pasado 5 segundos desde la carga de la página");
}, 5000);
var miEdad = () => {
    let date = new Date();
    console.log(`Tu edad es ${date.getFullYear() - 1994}`);
};
var calc = () => {
    console.log("Calculando tu edad...");
    setTimeout(miEdad, 6000);
};
calc();
/////////////función map///////////////
/*siempre devuelve algo, recorre arrays*/
console.log("Mapeo");
var mapeo = arrayObjects.map((element) => {
    //let obj={};
    //obj[elemento.clave]=elemento.valor;
    element.edad=18;
    console.log(element);
});
///////////////función callback////////////////
function sumar(num1, num2, callback){
    let resultado=num1+num2;
    callback(resultado);
}
function mostrarResultado(resultado){
    console.log(`El resultado es: ${resultado}`);
}
sumar(5, 8, mostrarResultado);
///////////////función filter////////////////
var arrayHeroes = ["Capitan America", "Thor", "Naruto", "Sasuke", "Ban"];
var newArray = arrayHeroes.filter((element) => {
    return element.length > 5;
});
console.log(newArray);
var i=0;
var newArray2=["Naruto",56,true,'c',198,false,"Sasuke"].filter((element)=>{
    return typeof element==="string";
});console.log(newArray2);
////////////////variables a string/////////////////
var bool =true;
var boolString=bool.toString();
console.log(`La variable ${bool} es de tipo ${typeof bool}`);
console.log(`La variable ${boolString} es de tipo ${typeof boolString}`);
////////////////string a number/////////////////
var bool ="56";
bool=bool.replace("6","8");/*replace sirve para reemplazar una parte de un texto, solo se utiliza en string*/
var boolString=parseInt(bool);
console.log(`La variable ${bool} es de tipo ${typeof bool}`);
console.log(`La variable ${boolString} es de tipo ${typeof boolString}`);
console.log("stringify:"+JSON.stringify(persona));//transforma un objeto javascript a json
console.log("parse:");console.log(JSON.parse(JSON.stringify(persona)));//transforma un texto json a un objeto javascript
//var objetos=new arrayObjects();//new le proporciona un tipo al objeto
//console.log(objetos);
const crearCookies = (llave,valor) =>{
    let expiracion= new Date();
    expiracion.setDate(expiracion.getDate()+1);
    llave=escape(llave);valor=escape(valor);
    document.cookie=`${llave}=${valor};expires=${expiracion}`;
};
const obtenerCookies=()=>{
    let arrayCookies=document.cookie.split("; ");//split separa el string en un array
    let Cookies={};
    arrayCookies.forEach(element=>{
        let objCookies=element.split("=");
        let key=objCookies[0];
        Cookies[key]=unescape(objCookies[1]);
    });
    console.log(Cookies);
};
crearCookies("nombre","Dan;iel");crearCookies("apellido","Ayala");
obtenerCookies();