<?php
	header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    
    $json = file_get_contents('php://input');
    $params2 = json_decode($json, true);
        require_once("ConexionBD.php");
        $conexion = conexion();
        $params = json_decode($params2["datos"], true);
        foreach($params as $value){
                mysqli_query($conexion, "INSERT INTO aprobado (Matricula, Codigo) VALUES (".$value['Matricula'].", '".$value['Codigo']."')");
                mysqli_query($conexion, "DELETE Cursando (Matricula, Codigo) VALUES (".$value['Matricula'].", '".$value['Codigo']."')");
        }
        echo true;
?>

