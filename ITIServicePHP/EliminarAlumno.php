<?php
	header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    
    $json = file_get_contents('php://input');
    $params = json_decode($json);
        require_once("ConexionBD.php");
        $conexion = conexion();
    	$registros = mysqli_query($conexion, "DELETE FROM Usuario WHERE IdUsuario='$params->matricula'");
	    if($registros){
            echo true;
        }
        echo false;
?>

