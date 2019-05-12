-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Vinnys first db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Vinnys first db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Vinnys first db` DEFAULT CHARACTER SET utf8 ;
USE `Vinnys first db` ;

-- -----------------------------------------------------
-- Table `Vinnys first db`.`Sellers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Vinnys first db`.`Sellers` (
  `idSeller` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NULL,
  `location` VARCHAR(45) NULL,
  PRIMARY KEY (`idSeller`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Vinnys first db`.`Buyers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Vinnys first db`.`Buyers` (
  `idBuyer` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `location` VARCHAR(45) NULL,
  PRIMARY KEY (`idBuyer`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Vinnys first db`.`Listings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Vinnys first db`.`Listings` (
  `idListing` INT NOT NULL AUTO_INCREMENT,
  `idSeller` VARCHAR(45) NOT NULL,
  `isBid` TINYINT NULL,
  `itemTitle` VARCHAR(32) NOT NULL,
  `itemDesc` VARCHAR(400) NULL,
  PRIMARY KEY (`idListing`),
  INDEX `idSeller_idx` (`idSeller` ASC) VISIBLE,
  CONSTRAINT `idSeller`
    FOREIGN KEY (`idSeller`)
    REFERENCES `Vinnys first db`.`Sellers` (`idSeller`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Vinnys first db`.`Purchases`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Vinnys first db`.`Purchases` (
  `idPurchase` INT NOT NULL,
  `idBuyer` INT NULL,
  `idListing` VARCHAR(45) NULL,
  PRIMARY KEY (`idPurchase`),
  INDEX `idBuyer_idx` (`idBuyer` ASC) VISIBLE,
  CONSTRAINT `idBuyer`
    FOREIGN KEY (`idBuyer`)
    REFERENCES `Vinnys first db`.`Buyers` (`idBuyer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
