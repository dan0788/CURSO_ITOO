const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/testdb")
    .then((msj) => console.log("Connected to MongoDB"))
    .catch((msj) => console.log("No connected to MongoDB: " + msj));
const schema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    edad:Number,
    hobbies:[String],
    birth:{type:Date, default:Date.now}
});
const modelo=new mongoose.model("Datos",schema);//Datos es el nombre de la colleccion

async function crearCurso(){
    const instanciaModelo=new modelo({
        nombre:"Andrea",
        apellido:"Solano",
        edad:32,
        hobbies:["naruto"],
        birth: 2000-05-24
    });//objeto
    const resultado=await instanciaModelo.save();
    console.log(resultado);
};
async function consultarDoc(){
    let numberPage=1;
    let sizePage=4;
    const byName=await modelo
    .find({edad:{$gte:20,$lte:35}})
    //.find({edad:{$in: [28,32]}})
    //.find({nombre: /.*i.*/})
    //.or([{edad:28},{edad:32}])
    //and([{edad:28},{nombre:"Daniel"}])
    //.limit(10)/*para limitar la consulta */
    .skip((numberPage-1)*sizePage)
    .limit(sizePage)
    .sort({nombre:-1})/*1: ascendente, -1:descendente */
    .select({nombre:1,hobbies:1, edad:1});/*solo trae los campos seleccionados */
    console.log(byName);
}
async function actualizar(id){
    const curso=await modelo.findById(id);
    if(!curso){
        console.log("No existe registro con ese ID");
        return;
    }
    curso.edad=15;
    //o esta otra función
    curso.set({
        edad: 15
    });
    const resultado=await curso.save();
    console.log(resultado);
}
async function actualizar2(id){
    const resultado=await modelo.update(
    {
        _id: id/*condición */
    },
    {
        $set:{/*operador de update a utilizar */
            edad: 14
        }
    });
    console.log(resultado);
}
async function idAndUpdate(id){
    const resultado=await modelo.findByIdAndUpdate(
    {
        _id:id
    },
    {
        $set:{
            hobbies:["death note","full metal alchemist","your name","silent voice"]
        }
    },{
        new:true//para que el resultado apareca actualizado
    });
    console.log(resultado);
};
async function borrarDoc(id){
    const result=await modelo.deleteOne({_id:id},{new:true});//no muestra el doc que se está eliminando
    //const result=await modelo.findByIdAndDelete({_id:id},{new:true});//para mostrar el doc que se está eliminando
    console.log(result);
}
//actualizar2("61f72e0933390a4b1d46c9a5");
//actualizar("61f70bdaa5f0906eae562488");
//crearCurso();
//idAndUpdate("61f72e16c2203e4bde2dc377");
//borrarDoc("61f72e2f5ebf525d13651278");
consultarDoc();

/* operadores de comparación
eq=igual
ne=no igual
gt=mayor que
gte=mayor que o igual
lt=menor que
lte=menor que o igual
in=verificar si valor está dentro de
nin=verificar si valor no está dentro de*/
/*operadores lógicos
or
and */
/*expresiones regulares
/^letras/=inicia con
/letras$/=termina con
/.*letras.asterisco/=contiene 

relaciones por referencias
relaciones por documentos embebidos*/