<?php
	header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    
    $json = file_get_contents('php://input');
    $params = json_decode($json); 
    require_once("ConexionBD.php");
    $conexion = conexion();
    $datos=[];
	$registros = mysqli_query($conexion,"SELECT materia.Codigo, materia.Nombre, materia.Creditos, materia.HorasPeriodoPT FROM aprobado INNER JOIN prerrequisito ON aprobado.Codigo = prerrequisito.CodigoPre INNER JOIN materia on materia.Codigo = prerrequisito.Codigo where aprobado.Matricula = '$params->matricula'");
    while($resultado = mysqli_fetch_assoc($registros)){
        $datos[]=$resultado;
    }
    
    $json = json_encode($datos);

    echo $json;
    header('Content-Type: application/json');
?>