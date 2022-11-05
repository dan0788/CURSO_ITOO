<?php
$nombre='Daniel';$apellido="Ayala";
print "<h4>$nombre $apellido</h4>";
$n1="Alejandro";
$n2="Paúl";
$n3="Karen";
$n4="Andrés";
$n5="Isabel";
$n6="Nicolás";
$n7="David";
$n8="María";
$n9="Sheila";
$n10="Sebastián";
$array=array();
$print_array="";
array_push($array, $n1, $n2, $n3, $n4, $n5, $n6, $n7, $n8, $n9, $n10);
foreach ($array as $key => $value) {
    if($value== end($array)){
        $print_array.=$value.")";
    }elseif($value== reset($array)){
        $print_array.="(".$value.", ";
    }else{
        $print_array.=$value.", ";
    }
}
$lista_completa="Lista completa";
print "<h4>$print_array{$lista_completa}</h4>";
function first_letter($letra){
    $print_array="";$lista_completa="Lista completa";GLOBAL $array;
    foreach ($array as $key => $value) {
        if(add($letra, $value)){
            $print_array.=",".$value;
        }
    }
    $print_array=ltrim($print_array,',');
    $print_array="(".$print_array.")";
    print "<h4>$print_array{$lista_completa}</h4>";
}

function add($caracter,$string){
    if(strpos($string, $caracter)===0){
        return true;
    }else{
        return false;
    }
}
first_letter("M");first_letter("A");first_letter("D");first_letter("S");
function first_letter_link($letra){
    $print_array="";$lista_completa="Lista completa con links";GLOBAL $array;
    foreach ($array as $value) {
        if(add($letra, $value)){
            $print_array.=","."<a href=?nombre={$value}>$value</a>";
        }
    }
    $print_array=ltrim($print_array,',');
    $print_array="(".$print_array.")";
    print "<h4>$print_array{$lista_completa}</h4>";
}
first_letter_link("");
if(isset($_GET["nombre"])){
    echo $_GET["nombre"]." existe";
} else {
    echo "No existe nadie\n";
}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

