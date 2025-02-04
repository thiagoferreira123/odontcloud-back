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
-- Table structure for table `patient_receipt`
--

DROP TABLE IF EXISTS `patient_receipt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_receipt` (
  `receipt_id` varchar(255) NOT NULL,
  `receipt_patient_id` varchar(255) NOT NULL,
  `receipt_patient_name` varchar(255) DEFAULT NULL,
  `receipt_cpf_or_cnpj` varchar(255) DEFAULT NULL,
  `receipt_receipt_value` varchar(255) DEFAULT NULL,
  `receipt_value_in_extension` varchar(255) DEFAULT NULL,
  `receipt_referent_a` varchar(255) DEFAULT NULL,
  `receipt_issuer` varchar(255) DEFAULT NULL,
  `receipt_date_emission` varchar(255) DEFAULT NULL,
  `receipt_cep` varchar(255) DEFAULT NULL,
  `receipt_state` varchar(255) DEFAULT NULL,
  `receipt_city` varchar(255) DEFAULT NULL,
  `receipt_neighborhood` varchar(255) DEFAULT NULL,
  `receipt_street` varchar(255) DEFAULT NULL,
  `receipt_number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`receipt_id`),
  KEY `fk_receipt_idx` (`receipt_patient_id`),
  CONSTRAINT `fk_receipt` FOREIGN KEY (`receipt_patient_id`) REFERENCES `patient` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_receipt`
--

LOCK TABLES `patient_receipt` WRITE;
/*!40000 ALTER TABLE `patient_receipt` DISABLE KEYS */;
INSERT INTO `patient_receipt` VALUES ('e8409f07-ddf2-4672-9e84-f6ccd3adc7ce','4b46ba22-9377-43bb-bb85-d6bcaf027243','teste','166.456.356-43','150,00','cento e cinquenta','teste',NULL,'25/04/2024','29161-123','ES','Serra','Rosário de Fátima','Rua P','123');
/*!40000 ALTER TABLE `patient_receipt` ENABLE KEYS */;
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

-- Dump completed on 2024-06-04  3:46:29
