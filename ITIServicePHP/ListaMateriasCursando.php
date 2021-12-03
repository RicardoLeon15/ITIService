<?php
	header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    
    require_once("ConexionBD.php");
    $conexion = conexion();
    $datos=[];
	$registros = mysqli_query($conexion,"SELECT Materia.Codigo, Nombre, Creditos, HorasPeriodoPT, count(Matricula) AS Alumnos FROM Cursando INNER JOIN Materia ON Cursando.Codigo=Materia.Codigo WHERE Matricula BETWEEN 201000000 AND 202200000 GROUP BY codigo");
    while($resultado = mysqli_fetch_assoc($registros)){
        $datos[]=$resultado;
    }
    $json = json_encode($datos);

    echo $json;
    header('Content-Type: application/json');
?>