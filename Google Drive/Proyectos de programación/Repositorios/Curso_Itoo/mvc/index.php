<?php
/*
    este es el archivo que va a buscar la URL, mostrará la salida de las vistas al usuario y también a través de él se enviará las distintas acciones que el usuario le envíe al controlador
*/
require_once './controladores/plantillaControlador.php';
$plantilla=new controladorPlantilla();
$plantilla->traerplantilla();
