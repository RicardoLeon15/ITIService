<?php
	header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    
    require_once("ConexionBD.php");
    $conexion = conexion();
    $datos=[];
	$registros = mysqli_query($conexion,"SELECT Matricula, Nombre, Paterno, Materno, Carrera FROM Usuario INNER JOIN Alumno ON IdUsuario=Matricula");
    while($resultado = mysqli_fetch_assoc($registros)){
        $datos[]=$resultado;
    }
    $json = json_encode($datos);

    echo $json;
    header('Content-Type: application/json');
?>