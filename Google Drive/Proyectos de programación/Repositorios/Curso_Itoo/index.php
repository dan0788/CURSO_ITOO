<!doctype html>
<html lang="es">
    <head>
        <title>Curso Itoo</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Daniel Ayala">
        <meta name="keywords" content="dan14">
        <link rel="stylesheet" href="index.css">
        <script src="http://localhost/Curso_Itoo/index.js"></script>

    </head>
    <body>

    </body>
</html>
<!--el script para llamar al archivo js se lo puede poner en el head
pero si no hay nada q pueda renderizar a la página, se lo pone al final del body
siempre la carpeta index.php va a buscar la url cuando entre a la página
una función hace máximo 1 o 2 cosas sino se llama código spaghetti o basura
-->
    
<?php
print "Mi primer código php!";//solo se puede imprimir una cadena
echo "<h2>Mi segundo código php!</h2>", "<h3>Mi tercer código php!</h3>";//se puede imprimir varias cadenas a la vez
define("constante", 3.14); //declarar constantes
$nombre = "Daniel"; //declarar variables
$apellido = "Ayala";
echo "<a href='?nombre=Daniel'><button class='nombre'>$nombre</button></a>";
echo "<a href='?apellido=Ayala'><button class='nombre'>$apellido</button></a>";
echo "<a href='?#'><button class='nombre'>Salir</button></a><br>";
if (isset($_GET['nombre'])) {//isset confirma si la variable está declarada y no es NULL
    echo "<p>Este es tu nombre:", $_GET['nombre'], "</p>";
} else if (isset($_GET['apellido'])) {
    echo "<p>Este es tu apellido:", $_GET['apellido'], "</p>";
    //para poder abrir otra página se pone include "(nombre del archivo).(extensión)"
}
//$array=[1,"dan14",true];//para declarar array es válida esta forma
$array = array(1, "dan14", true); //o esta forma
echo "<br>", "El array[1] es: $array[1]";
//////////trabajar con fechas//////////
echo "<br>Fecha actual:" . date('d-m-y');
echo "<br>Dia actual:" . date('d');
echo "<br>Mes actual:" . date('m');
echo "<br>Mes completo actual:" . date('F');
echo "<br>Año actual:" . date('y') + 2000;
echo "<br>Semana actual:" . date('W');
echo "<br>Número de dia de la semana actual:" . date('w');
echo "<br>Cuántos días tiene el mes actual:" . date('t');
$persona = array(
    "nombre" => "Daniel",
    "apellido" => "Ayala",
    "edad" => 27,
    "sexo" => "Masculino",
    "cristina" => array(
        "amiga" => true,
        "hijos" => 0,
        "pareja" => false,
    )
);
$persona1 = [//diccionarios en php
    "nombre" => "Daniel",
    "apellido" => "Ayala",
    "edad" => 27,
    "sexo" => "Masculino",
    $cristina = [
"amiga" => true,
 "hijos" => 0,
 "pareja" => false,
    ]
];
echo "<br>";
echo "<p>", var_dump($persona), "</p>"; //muestra todo el array
echo "<br>foreach<br>";
foreach ($persona as $key) {
    echo $key; //muestra error por variable $cristina
}
echo "<br>";
var_dump($persona1); //var_dump muestra el tipo de variable
/* for ($i = 0; $i < count($persona1); ++$i) {
  echo $persona1[$i];
  } */
$frutas = (object) ["fruta1" => "manzana", "fruta2" => "pera"]; //objeto fruto
$colores = array("rojo", "amarillo", "verde"); //array
echo $frutas->fruta1, "<br>";
var_dump($frutas);
echo "<br>Funciones<br>";

function saludo($nombre) {
    echo "Hola ", $nombre;
    return $nombre;
}

$name = saludo("Daniel");
/////////////if//////////////
if ($name == "Daniel") {
    echo "<br>Tú eres Daniel<br>";
} else {
    echo "<br>Tú no eres Daniel<br>";
}
if (2 == "2") {
    echo '2 es igual a 2';
} else {
    echo '2 no es igual a 2';
}
///////////switch/////////////
$opcion = 3;
switch ($opcion) {
    case 1:
        echo "Opción es igual a ", $opcion, "<br>";
        break;
    default :
        echo "No hay ninguna opción<br>";
        break;
}
switch ($opcion) {
    case 1:
    case 2:
        echo "El valor está entre 1 y 2<br>";
        break;
    case 3:
    case 4:
        echo "El valor está entre 3 y 4<br>";
        break;
}
////////////for//////////////
for ($i = 0; $i < 6; ++$i) {
    echo $i;
}echo "<br>";
////////////foreach/////////
foreach ($persona as $value) {
    echo "$value,";
}echo '<br>';
/////////////////código imperativo o código espaguetti
$automovil1 = (object) ["marca" => "Toyota", "modelo" => "Corolla"];
$automovil2 = (object) ["marca" => "Hyundai", "modelo" => "Accent"];
$automovil3 = array("manzanas", "peras", "n" => "naranjas");

function mostrarAuto($auto) {
    echo "<h4 id='auto'><i>Hola soy un $auto->marca, modelo $auto->modelo</i></h4>";
}

mostrarAuto($automovil1);
mostrarAuto($automovil2);

////////////////código POO////////////////
//Clase: es un modelo que se utiliza para crear objetos que comparten un mismo comportamiento, estado e identidad
class auto {

    //propiedades
    public $marca;
    public $modelo;

    //métodos
    public function mostrar() {
        echo "<h4 id='auto1'><i>Hola soy un $this->marca, modelo $this->modelo</i></h4>";
    }

}

$a = new auto();
$a->marca = "Toyota";
$a->modelo = "Corolla";
$a->mostrar();

///////////////pipeline de desarrollo web/////////////
//fase 1=planeación y diseño;
//fase 2=desarrollo front end;
//fase 3=desarrollo back end;

////////////patrón MVC
//modelo: es el encargado de la lógica de la aplicación y la conexión con la base de datos
//vista: responsable de mostrar al usuario el resultado que obtiene del modelo a través del controlador
//controlador: es el encargado de gestionar las peticiones del usuario, procesarlas invocando al modelo y mostrarlas al usuario a través de las vistas
//            Usuario
//  ----------------------------
//     ---->   Vista
//     ↑         ↓
//     <---- Controlador <----
//               ↓            ↑
//            Modelo   ------>
?>
<!--   
<br> para salto de linea en html
en php, la variable booleana false muestra un valor vacio
en php, al array se le llama con [], al objeto se le llama con ->
en php, == igual,=== identico
en php, el operador lógico 'y' es AND
en php, el operador lógico 'o' es OR (también se puede utilizar XOR)
-->
<!--
variables GET se conocen como cadenas de consultas
URL amigable es una URL fácil de entender
-->