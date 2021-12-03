<?php
	header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    
    require_once("ConexionBD.php");
    $conexion = conexion();
    $datos=[];
	$registros = mysqli_query($conexion,"SELECT * FROM materia INNER JOIN cursando ON cursando.Codigo = materia.Codigo WHERE cursando.matricula = ".$_GET["matricula"]);
    while($resultado = mysqli_fetch_assoc($registros)){
        $datos[]=$resultado;
    }
    $json = json_encode($datos);

    echo $json;
    header('Content-Type: application/json');
?>