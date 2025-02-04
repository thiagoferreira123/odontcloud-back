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
-- Table structure for table `clinic_financial_control`
--

DROP TABLE IF EXISTS `clinic_financial_control`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clinic_financial_control` (
  `financial_control_id` varchar(255) NOT NULL,
  `financial_control_clinic_id` varchar(255) NOT NULL,
  `financial_control_description` varchar(255) NOT NULL,
  `financial_control_value` varchar(255) NOT NULL,
  `financial_control_entry_or_exit` varchar(255) DEFAULT NULL,
  `financial_control_date` varchar(255) NOT NULL,
  `financial_control_category` varchar(255) DEFAULT NULL,
  `financial_control_payment_method` varchar(255) DEFAULT NULL,
  `financial_control_observation` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`financial_control_id`),
  KEY `fk_control_financial_clinic_idx` (`financial_control_clinic_id`),
  CONSTRAINT `fk_control_financial_clinic` FOREIGN KEY (`financial_control_clinic_id`) REFERENCES `clinic` (`clinic_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clinic_financial_control`
--

LOCK TABLES `clinic_financial_control` WRITE;
/*!40000 ALTER TABLE `clinic_financial_control` DISABLE KEYS */;
INSERT INTO `clinic_financial_control` VALUES ('05c0a247-8f91-4e77-96f4-fbcab5a7f63b','8cc8a7db-9d11-4efa-b93d-47643cd09428','Recebimento da parcela 1/5','480,14','entrance','2024-04-11T21:31:29.747Z','Recebimento de parcela de plano de tratamento - Inicial','dinheiro',NULL),('3c4253ed-3c14-4d1e-a9d3-9f7cb835618b','8cc8a7db-9d11-4efa-b93d-47643cd09428','february','150,00','output','2024-02-05T03:00:00.000Z','Gastos','Pix',''),('4ba49e27-8245-4e3e-a09c-88a8c6f0e31d','8cc8a7db-9d11-4efa-b93d-47643cd09428','january','150,00','output','2024-01-08T03:00:00.000Z','Gastos','Pix','obs'),('695674c0-66b1-4a01-b8b0-84b981dcefc2','8cc8a7db-9d11-4efa-b93d-47643cd09428','march','150,00','output','2024-03-04T03:00:00.000Z','Gastos','Pix',''),('6bebc55a-a91c-4eb8-b067-bf4a58302622','8cc8a7db-9d11-4efa-b93d-47643cd09428','entrance 2',' 150,00','entrance','2024-04-11T03:00:00.000Z','Ganhos Avulsos','Pix','');
/*!40000 ALTER TABLE `clinic_financial_control` ENABLE KEYS */;
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

-- Dump completed on 2024-06-04  3:46:14
