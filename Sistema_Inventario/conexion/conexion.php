<?php

$servidor = "localhost";
$usuario = "root";
$contraseña = "";
$base_datos ="sistemas_inventarios";

//crear conexion
$conexion = new mysqli($servidor, $usuario, $contraseña, $base_datos);

//verificcar conexion 

if ($conexion->connect_error) {
    die("Conexion fallida". $conexion->connect_error);
}else{
    "Conexion exitosa";
}

?>
