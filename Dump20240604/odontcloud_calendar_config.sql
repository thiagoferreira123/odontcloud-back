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
-- Table structure for table `calendar_config`
--

DROP TABLE IF EXISTS `calendar_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `calendar_config` (
  `calendar_config_id` varchar(255) NOT NULL,
  `calendar_config_clinic_id` varchar(255) NOT NULL,
  `calendar_config_time_start` varchar(255) NOT NULL,
  `calendar_config_time_end` varchar(255) NOT NULL,
  `calendar_config_interval_start` varchar(255) NOT NULL,
  `calendar_config_interval_end` varchar(255) NOT NULL,
  `calendar_config_service_days` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`calendar_config_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calendar_config`
--

LOCK TABLES `calendar_config` WRITE;
/*!40000 ALTER TABLE `calendar_config` DISABLE KEYS */;
INSERT INTO `calendar_config` VALUES ('016cb8ee-a266-4588-a712-15e6b4abe2ed','','09:00','18:00','11:00','12:00','2,3,4,5,6,8'),('1q','6dcf36ce-6194-4037-8b59-8596c41e5405','08:00','18:00','14:00','14:30','1,2,3,4,5,6,7,8'),('39e095a2-20ea-46b6-ba73-0fc065341f9d','c32db713-fca3-4196-8679-aa9cc8c4a1c6','07:00','18:00','','','0,1,2,3,4,5,6,7'),('49d30125-191c-482b-9a97-baa83ef2b4b6','8cc8a7db-9d11-4efa-b93d-47643cd09428','08:30','18:00','12:00','12:45','2,4,6,8,3,5'),('536aac51-3796-4e3c-aafa-5e2ef39b7e8f','9be1ad7f-b2c3-4f56-b3d9-b306bbeef690','07:00','18:00','','','0,1,3,5,7'),('954e2c10-21ed-4fdc-860f-15e2d0447912','783e184d-f156-4696-ac1d-e1d9fa3356bf','07:00','18:00','','','1,2,3,4,5,6,7,8');
/*!40000 ALTER TABLE `calendar_config` ENABLE KEYS */;
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

-- Dump completed on 2024-06-04  3:46:19
