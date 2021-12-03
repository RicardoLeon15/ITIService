<?php
	header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    
    $json = file_get_contents('php://input');
    $params = json_decode($json); 
    require_once("ConexionBD.php");
    $conexion = conexion();
    $datos=[];
	$registros = mysqli_query($conexion,"call tabla_cursando('$params->matricula')");
    while($resultado = mysqli_fetch_assoc($registros)){
        $datos[]=$resultado;
    }
    
    $json = json_encode($datos);

    echo $json;
    header('Content-Type: application/json');
?>