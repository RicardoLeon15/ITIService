<?php
	header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    
    $json = file_get_contents('php://input');
    $params = json_decode($json);
    if($params!=null){
        require_once("ConexionBD.php");
        $conexion = conexion();
    	$registros = mysqli_query($conexion, "INSERT INTO Usuario(IdUsuario,Nombre,Paterno,Materno,Contrasenia) Values('$params->matricula','$params->nombre','$params->paterno','$params->materno','$params->contrasenia')");
	    if($registros){
            $registros2 = mysqli_query($conexion,"INSERT INTO Alumno(Matricula,Carrera) VALUES('$params->matricula','$params->carrera')");
            if($registros2){
                $registros3 =mysqli_query($conexion,"INSERT INTO Cursando(Matricula,Codigo) VALUES('$params->matricula','ITIS 001'),('$params->matricula','ITIS 002'),('$params->matricula','ITIS 003'),('$params->matricula','FGUS 001'),('$params->matricula','FGUS 004')");
                if($registros3)
                    echo true;
            }
            echo false;
        }
        echo false;
    }
?>

