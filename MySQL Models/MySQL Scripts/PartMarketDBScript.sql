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
-- Table `Vinnys first db`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Vinnys first db`.`Users` (
  `idUsers` INT NOT NULL,
  `Username` VARCHAR(45) NOT NULL,
  `Token` VARCHAR(128) NULL,
  `UserDesc` VARCHAR(400) NULL,
  `Location` VARCHAR(45) NULL,
  PRIMARY KEY (`idUsers`),
  UNIQUE INDEX `idUsers_UNIQUE` (`idUsers` ASC) VISIBLE,
  UNIQUE INDEX `Username_UNIQUE` (`Username` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Vinnys first db`.`Listings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Vinnys first db`.`Listings` (
  `idListing` INT NOT NULL AUTO_INCREMENT,
  `idSeller` INT NOT NULL,
  `isBid` TINYINT NULL,
  `itemTitle` VARCHAR(32) NULL,
  `itemDesc` VARCHAR(400) NULL,
  PRIMARY KEY (`idListing`),
  INDEX `idSeller_idx` (`idSeller` ASC) VISIBLE,
  CONSTRAINT `idSeller`
    FOREIGN KEY (`idSeller`)
    REFERENCES `Vinnys first db`.`Users` (`idUsers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Vinnys first db`.`Purchases`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Vinnys first db`.`Purchases` (
  `idPurchase` INT NOT NULL AUTO_INCREMENT,
  `idBuyer` INT NOT NULL,
  `idListing` INT NULL,
  PRIMARY KEY (`idPurchase`),
  INDEX `idBuyer_idx` (`idBuyer` ASC) VISIBLE,
  CONSTRAINT `idBuyer`
    FOREIGN KEY (`idBuyer`)
    REFERENCES `Vinnys first db`.`Users` (`idUsers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
