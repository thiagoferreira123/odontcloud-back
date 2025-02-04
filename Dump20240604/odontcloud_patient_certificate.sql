-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: v2-beta.cho4s8ksgmal.us-east-2.rds.amazonaws.com    Database: odontcloud
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `patient_certificate`
--

DROP TABLE IF EXISTS `patient_certificate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_certificate` (
  `certificate_id` varchar(255) NOT NULL,
  `certificate_patient_id` varchar(255) NOT NULL,
  `certificate_patient_name` varchar(255) DEFAULT NULL,
  `certificate_cpf_or_cnpj` varchar(255) DEFAULT NULL,
  `certificate_permanence_start` varchar(255) DEFAULT NULL,
  `certificate_permanence_end` varchar(255) DEFAULT NULL,
  `certificate_date_emission` varchar(255) DEFAULT NULL,
  `certificate_cep` varchar(255) DEFAULT NULL,
  `certificate_state` varchar(255) DEFAULT NULL,
  `certificate_city` varchar(255) DEFAULT NULL,
  `certificate_neighborhood` varchar(255) DEFAULT NULL,
  `certificate_street` varchar(255) DEFAULT NULL,
  `certificate_number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`certificate_id`),
  UNIQUE KEY `certificate_id_UNIQUE` (`certificate_id`),
  KEY `fk_certificate_idx` (`certificate_patient_id`),
  CONSTRAINT `fk_certificate` FOREIGN KEY (`certificate_patient_id`) REFERENCES `patient` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_certificate`
--

LOCK TABLES `patient_certificate` WRITE;
/*!40000 ALTER TABLE `patient_certificate` DISABLE KEYS */;
INSERT INTO `patient_certificate` VALUES ('75c3a916-e063-47b7-99eb-b85d9d3514d6','210bca18-e5fa-4086-8503-8c30490f7ccd','aaaaaaa','048.247.911-62','18:00','19:00','30/06/1993','79071-560','MS','Campo Grande','Jardim Colibrí','Rua Paoco','12'),('a6bdbc5c-b605-4a52-a437-c6c84d606f1b','4b46ba22-9377-43bb-bb85-d6bcaf027243','teste','166.255.488-87','05:00','09:00','19/15/2025','29161-123','ES','Serra','Rosário de Fátima','Rua P','123'),('b8646cf4-a861-4ec6-a735-fb79b04cc99b','4b46ba22-9377-43bb-bb85-d6bcaf027243','teste','166.255.488-87','09:00','10:00','20/06/2024','29161-123','estado','cidade','bairro','rua','123'),('fa13c137-014e-4fa2-aeae-d2be4ec95b63','4b46ba22-9377-43bb-bb85-d6bcaf027243','teste','166.255.488-87','05:00','09:00','19/15/2025','29161-123','estado','cidade','bairro','rua','123');
/*!40000 ALTER TABLE `patient_certificate` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-04  3:47:27
