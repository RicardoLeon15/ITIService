-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-11-2021 a las 04:55:49
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `itiservice`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--
DROP if exists DATABASE itiservice;

CREATE DATABASE itiservice;
USE itiservice;

CREATE TABLE `administrador` (
  `IdAministrador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`IdAministrador`) VALUES
(1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `Matricula` int(11) NOT NULL,
  `Carrera` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`Matricula`, `Carrera`) VALUES
(2, 'Ingeniería en Tecnologías de la Información'),
(3, 'Ingeniería en Tecnologías de la Información'),
(4, 'Ingeniería en Tecnologías de la Información'),
(5, 'Ingeniería en Tecnologías de la Información');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aprobado`
--

CREATE TABLE `aprobado` (
  `Matricula` int(11) NOT NULL,
  `Codigo` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursando`
--

CREATE TABLE `cursando` (
  `Matricula` int(11) NOT NULL,
  `Codigo` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia`
--

CREATE TABLE `materia` (
  `Codigo` varchar(45) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Creditos` int(11) NOT NULL,
  `HorasPeriodoPT` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `materia`
--

INSERT INTO `materia` (`Codigo`, `Nombre`, `Creditos`, `HorasPeriodoPT`) VALUES
('CCOS 260', 'Redes de Computadora', 6, 90),
('FGUS 001', 'Formación Humana y Social', 4, 72),
('FGUS 002', 'DHPC', 4, 72),
('FGUS 004', 'Lengua Extranjera I', 4, 72),
('FGUS 005', 'Lengua Extranjera II', 4, 72),
('FGUS 006', 'Lengua Extranjera III', 4, 72),
('FGUS 007', 'Lengua Extranjera IV', 4, 72),
('IDDS 001', 'Administración de Proyectos', 5, 72),
('IDDS 002', 'Proyectos I + DI', 5, 72),
('ISTI 200', 'Ingeniería de Software II', 6, 90),
('ISTI 201', 'Administración de Redes', 6, 90),
('ISTI 202', 'Inteligencia de Negocios', 6, 90),
('ISTI 203', 'Programación de Dispositivos Moviles', 6, 90),
('ISTI 204', 'Trabajo Colaborativo', 6, 90),
('ITIS 001', 'Introducción a las Matemáticas', 6, 90),
('ITIS 002', 'Introducción a la Programación', 6, 90),
('ITIS 003', 'Teoría General de Sistemas y Sistemas de la I', 4, 72),
('ITIS 004', 'Cálculo Diferencial e Integral', 6, 72),
('ITIS 005', 'Algebra Lineal con Aplicaciones', 6, 90),
('ITIS 006', 'Programación Orientada a Objetos I', 6, 90),
('ITIS 007', 'Modelado de Procesos de Negocio', 4, 72),
('ITIS 008', 'Matemáticas Discretas', 6, 90),
('ITIS 009', 'Probabilidad y Estatidistica', 6, 90),
('ITIS 010', 'Programación Orientada a Objetos II', 6, 90),
('ITIS 011', 'Herramientas Web', 6, 90),
('ITIS 012', 'Métodos Estadísticos', 6, 90),
('ITIS 013', 'Ingeniería de Software I', 6, 90),
('ITIS 014', 'Diseño De Base de Datos', 6, 90),
('ITIS 250', 'Redes y Servicios', 6, 90),
('ITIS 251', 'Integración de Sistemas y Arquitectura', 6, 90),
('ITIS 252', 'Administración de Bases de Datos', 6, 90),
('ITIS 253', 'Fundamentos de la Programación Lógica', 4, 72),
('ITIS 254', 'Administración de Sistemas Operativos', 7, 180),
('ITIS 255', 'Tecnologías Web', 6, 90),
('ITIS 256', 'Cómputo Distribuido', 6, 90),
('ITIS 257', 'Modelos de Desarrollo Web', 6, 90),
('ITIS 258', 'Minería de Datos', 6, 90),
('ITIS 259', 'Diseño de la interacción', 6, 90),
('ITIS 260', 'Servicios Web', 6, 90),
('ITIS 261', 'Control de Calidad de Software ', 6, 72),
('ITIS 600', 'Desarrollo Basado en Modelos', 6, 90),
('ITIS 601', 'Cómputo Orientado a Objetos', 6, 90),
('ITIS 602', 'Tecnologías de la Web Semántica', 6, 90),
('ITIS 603', 'Ingeniería de Conocimiento', 6, 90),
('ITIS 604', 'Inteligencia Artificial', 6, 90),
('ITIS 605', 'Métodos Formales', 6, 90),
('ITIS 606', 'Aprendizaje Artificial', 6, 90),
('ITIS 607', 'Investigación de Operación', 6, 90),
('ITIS 608', 'Introducción al Cómputo de Alto Rendimiento', 6, 90),
('ITIS 609', 'Logística', 6, 90),
('ITIS 610', 'Nuevas Tendencias de la Ingeniería de Softwar', 6, 90),
('ITIS 611', 'Arquitectura de Software', 6, 90),
('ITIS 612', 'Teoría de Decisiones', 6, 90),
('ITIS 613', 'Cómputo de Alto Rendimiento y Clusters', 6, 90),
('ITIS 700', 'Desarrollo de VideoJuegos', 6, 90),
('ITIS 701', 'Tecnologías Emergentes para TICS', 6, 90),
('ITIS 702', 'Desarrollo de Sitios WEB', 6, 90),
('PPTI 101', 'Práctica Profesional', 5, 250),
('SSTI 100', 'Servicio Social', 10, 480);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `porcursar`
--

CREATE TABLE `porcursar` (
  `Matricula` int(11) NOT NULL,
  `Codigo` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prerrequisito`
--

CREATE TABLE `prerrequisito` (
  `Codigo` varchar(45) NOT NULL,
  `CodigoPre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `prerrequisito`
--

INSERT INTO `prerrequisito` (`Codigo`, `CodigoPre`) VALUES
('CCOS 260', 'ITIS 009'),
('FGUS 005', 'FGUS 004'),
('FGUS 006', 'FGUS 005'),
('FGUS 007', 'FGUS006'),
('IDDS 001', 'IDDS 001'),
('ISTI 200', 'ITIS 013'),
('ISTI 201', 'ITIS 250'),
('ISTI 202', 'ITIS 258'),
('ISTI 203', 'ITIS 260'),
('ISTI 204', 'ITIS 257'),
('ITIS 004', 'ITIS 001'),
('ITIS 005', 'ITIS 001'),
('ITIS 006', 'ITIS 002'),
('ITIS 007', 'ITIS 003'),
('ITIS 008', 'ITIS 005'),
('ITIS 009', 'ITIS 004'),
('ITIS 010', 'ITIS 006'),
('ITIS 012', 'ITIS 009'),
('ITIS 013', 'ITIS 007'),
('ITIS 014', 'ITIS 007'),
('ITIS 250', 'CCOS 260'),
('ITIS 251', 'CCOS 260'),
('ITIS 252', 'ITIS 014'),
('ITIS 253', 'ITIS 008'),
('ITIS 254', 'ITIS 010'),
('ITIS 255', 'ITIS 011'),
('ITIS 256', 'ITIS 010'),
('ITIS 257', 'ITIS 255'),
('ITIS 257', 'ITIS 256'),
('ITIS 258', 'ITIS 252'),
('ITIS 259', 'ISTI 200'),
('ITIS 260', 'ITIS 257'),
('ITIS 261', 'ISTI 200'),
('ITIS 600', 'ITIS 257'),
('ITIS 601', 'ITIS 260'),
('ITIS 602', 'ITIS 260'),
('ITIS 603', 'ITIS 253'),
('ITIS 604', 'ITIS 253'),
('ITIS 605', 'ITIS 008'),
('ITIS 606', 'ITIS 604'),
('ITIS 607', 'ITIS 005'),
('ITIS 608', 'ITIS 254'),
('ITIS 609', 'ITIS 607'),
('ITIS 610', 'ITIS 200'),
('ITIS 611', 'ITIS 200'),
('ITIS 612', 'ITIS 258'),
('ITIS 613', 'ITIS 608'),
('PPTI 101', 'Práctica Profesional'),
('SSTI 100', '70% de los créditos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reprobada`
--

CREATE TABLE `reprobada` (
  `Matricula` int(11) NOT NULL,
  `Codigo` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `IdUsuario` int(11) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Paterno` varchar(45) NOT NULL,
  `Materno` varchar(45) NOT NULL,
  `Contrasenia` varchar(45) NOT NULL,
  `Foto` longblob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`IdUsuario`, `Nombre`, `Paterno`, `Materno`, `Contrasenia`, `Foto`) VALUES
(1, 'Juan', 'Aguilera', 'Valadez', '123456789', NULL),
(2, 'Erick', 'Nuñez', 'Grajales', '987654321', NULL),
(3, 'Pablo', 'Garcia', 'Bravo', '789456123', NULL),
(4, 'Ricardo', 'Gutierrez', 'Leon', '321654987', NULL),
(5, 'Juan', 'Sosa', 'Vega', '546879213', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`IdAministrador`);

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`Matricula`);

--
-- Indices de la tabla `aprobado`
--
ALTER TABLE `aprobado`
  ADD PRIMARY KEY (`Matricula`,`Codigo`),
  ADD KEY `fk_Alumno_has_Materia_Materia1` (`Codigo`);

--
-- Indices de la tabla `cursando`
--
ALTER TABLE `cursando`
  ADD PRIMARY KEY (`Matricula`,`Codigo`),
  ADD KEY `fk_Alumno_has_Materia_Materia2` (`Codigo`);

--
-- Indices de la tabla `materia`
--
ALTER TABLE `materia`
  ADD PRIMARY KEY (`Codigo`);

--
-- Indices de la tabla `porcursar`
--
ALTER TABLE `porcursar`
  ADD PRIMARY KEY (`Matricula`,`Codigo`),
  ADD KEY `fk_Alumno_has_Materia_Materia3` (`Codigo`);

--
-- Indices de la tabla `prerrequisito`
--
ALTER TABLE `prerrequisito`
  ADD PRIMARY KEY (`Codigo`,`CodigoPre`);

--
-- Indices de la tabla `reprobada`
--
ALTER TABLE `reprobada`
  ADD PRIMARY KEY (`Matricula`,`Codigo`),
  ADD KEY `fk_Alumno_has_Materia_Materia4` (`Codigo`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`IdUsuario`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD CONSTRAINT `fk_Administrador_Usuario1` FOREIGN KEY (`IdAministrador`) REFERENCES `usuario` (`IdUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD CONSTRAINT `fk_Alumno_Usuario` FOREIGN KEY (`Matricula`) REFERENCES `usuario` (`IdUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `aprobado`
--
ALTER TABLE `aprobado`
  ADD CONSTRAINT `fk_Alumno_has_Materia_Alumno1` FOREIGN KEY (`Matricula`) REFERENCES `alumno` (`Matricula`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Alumno_has_Materia_Materia1` FOREIGN KEY (`Codigo`) REFERENCES `materia` (`Codigo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `cursando`
--
ALTER TABLE `cursando`
  ADD CONSTRAINT `fk_Alumno_has_Materia_Alumno2` FOREIGN KEY (`Matricula`) REFERENCES `alumno` (`Matricula`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Alumno_has_Materia_Materia2` FOREIGN KEY (`Codigo`) REFERENCES `materia` (`Codigo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `porcursar`
--
ALTER TABLE `porcursar`
  ADD CONSTRAINT `fk_Alumno_has_Materia_Alumno3` FOREIGN KEY (`Matricula`) REFERENCES `alumno` (`Matricula`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Alumno_has_Materia_Materia3` FOREIGN KEY (`Codigo`) REFERENCES `materia` (`Codigo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `prerrequisito`
--
ALTER TABLE `prerrequisito`
  ADD CONSTRAINT `fk_Prerrequisito_Materia1` FOREIGN KEY (`Codigo`) REFERENCES `materia` (`Codigo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `reprobada`
--
ALTER TABLE `reprobada`
  ADD CONSTRAINT `fk_Alumno_has_Materia_Alumno4` FOREIGN KEY (`Matricula`) REFERENCES `alumno` (`Matricula`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Alumno_has_Materia_Materia4` FOREIGN KEY (`Codigo`) REFERENCES `materia` (`Codigo`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
