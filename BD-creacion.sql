-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ITIService
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ITIService` DEFAULT CHARACTER SET utf8 ;
USE `ITIService` ;

-- -----------------------------------------------------
-- Table `ITIService`.`Usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ITIService`.`Usuario` ;

CREATE TABLE IF NOT EXISTS `ITIService`.`Usuario` (
  `IdUsuario` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  `Paterno` VARCHAR(45) NOT NULL,
  `Materno` VARCHAR(45) NOT NULL,
  `Contrasenia` VARCHAR(45) NOT NULL,
  `Foto` LONGBLOB NULL,
  PRIMARY KEY (`IdUsuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ITIService`.`Alumno`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ITIService`.`Alumno` ;

CREATE TABLE IF NOT EXISTS `ITIService`.`Alumno` (
  `Matricula` INT NOT NULL,
  `Carrera` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Matricula`),
  CONSTRAINT `fk_Alumno_Usuario`
    FOREIGN KEY (`Matricula`)
    REFERENCES `ITIService`.`Usuario` (`IdUsuario`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ITIService`.`Administrador`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ITIService`.`Administrador` ;

CREATE TABLE IF NOT EXISTS `ITIService`.`Administrador` (
  `IdAministrador` INT NOT NULL,
  PRIMARY KEY (`IdAministrador`),
  CONSTRAINT `fk_Administrador_Usuario1`
    FOREIGN KEY (`IdAministrador`)
    REFERENCES `ITIService`.`Usuario` (`IdUsuario`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ITIService`.`Materia`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ITIService`.`Materia` ;

CREATE TABLE IF NOT EXISTS `ITIService`.`Materia` (
  `Codigo` VARCHAR(45) NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  `Creditos` INT NOT NULL,
  `HorasPeriodoPT` INT NOT NULL,
  PRIMARY KEY (`Codigo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ITIService`.`Prerrequisito`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ITIService`.`Prerrequisito` ;

CREATE TABLE IF NOT EXISTS `ITIService`.`Prerrequisito` (
  `Codigo` VARCHAR(45) NOT NULL,
  `CodigoPre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Codigo`, `CodigoPre`),
  CONSTRAINT `fk_Prerrequisito_Materia1`
    FOREIGN KEY (`Codigo`)
    REFERENCES `ITIService`.`Materia` (`Codigo`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ITIService`.`Aprobado`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ITIService`.`Aprobado` ;

CREATE TABLE IF NOT EXISTS `ITIService`.`Aprobado` (
  `Matricula` INT NOT NULL,
  `Codigo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Matricula`, `Codigo`),
  CONSTRAINT `fk_Alumno_has_Materia_Alumno1`
    FOREIGN KEY (`Matricula`)
    REFERENCES `ITIService`.`Alumno` (`Matricula`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Alumno_has_Materia_Materia1`
    FOREIGN KEY (`Codigo`)
    REFERENCES `ITIService`.`Materia` (`Codigo`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ITIService`.`Cursando`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ITIService`.`Cursando` ;

CREATE TABLE IF NOT EXISTS `ITIService`.`Cursando` (
  `Matricula` INT NOT NULL,
  `Codigo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Matricula`, `Codigo`),
  CONSTRAINT `fk_Alumno_has_Materia_Alumno2`
    FOREIGN KEY (`Matricula`)
    REFERENCES `ITIService`.`Alumno` (`Matricula`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Alumno_has_Materia_Materia2`
    FOREIGN KEY (`Codigo`)
    REFERENCES `ITIService`.`Materia` (`Codigo`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ITIService`.`PorCursar`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ITIService`.`PorCursar` ;

CREATE TABLE IF NOT EXISTS `ITIService`.`PorCursar` (
  `Matricula` INT NOT NULL,
  `Codigo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Matricula`, `Codigo`),
  CONSTRAINT `fk_Alumno_has_Materia_Alumno3`
    FOREIGN KEY (`Matricula`)
    REFERENCES `ITIService`.`Alumno` (`Matricula`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Alumno_has_Materia_Materia3`
    FOREIGN KEY (`Codigo`)
    REFERENCES `ITIService`.`Materia` (`Codigo`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ITIService`.`Reprobada`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ITIService`.`Reprobada` ;

CREATE TABLE IF NOT EXISTS `ITIService`.`Reprobada` (
  `Matricula` INT NOT NULL,
  `Codigo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Matricula`, `Codigo`),
  CONSTRAINT `fk_Alumno_has_Materia_Alumno4`
    FOREIGN KEY (`Matricula`)
    REFERENCES `ITIService`.`Alumno` (`Matricula`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Alumno_has_Materia_Materia4`
    FOREIGN KEY (`Codigo`)
    REFERENCES `ITIService`.`Materia` (`Codigo`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;






