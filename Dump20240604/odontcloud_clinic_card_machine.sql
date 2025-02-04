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
-- Table structure for table `clinic_card_machine`
--

DROP TABLE IF EXISTS `clinic_card_machine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clinic_card_machine` (
  `card_machine_id` varchar(255) NOT NULL,
  `card_machine_clinic_id` varchar(255) NOT NULL,
  `card_machine_brand` varchar(255) DEFAULT NULL,
  `card_machine_surname` varchar(255) DEFAULT NULL,
  `card_machine_fee_per_pix_operation` varchar(255) DEFAULT NULL,
  `card_machine_fee_per_debit_transaction` varchar(255) DEFAULT NULL,
  `card_machine_fee_per_cash_credit_transaction` varchar(255) DEFAULT NULL,
  `card_machine_fee_per_credit_operation_2_to_6_times` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`card_machine_id`),
  UNIQUE KEY `card_machine_id_UNIQUE` (`card_machine_id`),
  KEY `fk_card_and_clinic_idx` (`card_machine_clinic_id`),
  CONSTRAINT `fk_card_and_clinic` FOREIGN KEY (`card_machine_clinic_id`) REFERENCES `clinic` (`clinic_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clinic_card_machine`
--

LOCK TABLES `clinic_card_machine` WRITE;
/*!40000 ALTER TABLE `clinic_card_machine` DISABLE KEYS */;
/*!40000 ALTER TABLE `clinic_card_machine` ENABLE KEYS */;
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

-- Dump completed on 2024-06-04  3:47:22
