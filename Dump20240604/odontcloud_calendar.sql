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
-- Table structure for table `calendar`
--

DROP TABLE IF EXISTS `calendar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `calendar` (
  `calendar_id` varchar(255) NOT NULL,
  `calendar_clinic_id` varchar(255) NOT NULL,
  `calendar_professional_id` varchar(255) NOT NULL,
  `calendar_patient_id` varchar(255) DEFAULT NULL,
  `calendar_name` varchar(255) NOT NULL,
  `calendar_phone` varchar(255) DEFAULT NULL,
  `calendar_email` varchar(255) DEFAULT NULL,
  `calendar_agreement` varchar(255) DEFAULT NULL,
  `calendar_date` varchar(255) DEFAULT NULL,
  `calendar_start_time` varchar(255) NOT NULL,
  `calendar_end_time` varchar(255) NOT NULL,
  `calendar_type` varchar(255) NOT NULL,
  `calendar_status` varchar(255) DEFAULT NULL,
  `calendar_recurrence` varchar(45) DEFAULT NULL,
  `calendar_recurrence_type` varchar(255) DEFAULT NULL,
  `calendar_recurrence_quantity` varchar(255) DEFAULT NULL,
  `calendar_recurrency_type_qnt` varchar(255) CHARACTER SET ascii COLLATE ascii_general_ci DEFAULT NULL,
  `calendar_recurrence_date_end` date DEFAULT NULL,
  `calendar_medical_insurance` varchar(255) DEFAULT NULL,
  `calendar_observation` longtext,
  PRIMARY KEY (`calendar_id`),
  UNIQUE KEY `calendar_id_UNIQUE` (`calendar_id`),
  KEY `fk_clinic_idx_new` (`calendar_clinic_id`),
  CONSTRAINT `fk_clinic1` FOREIGN KEY (`calendar_clinic_id`) REFERENCES `clinic` (`clinic_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calendar`
--

LOCK TABLES `calendar` WRITE;
/*!40000 ALTER TABLE `calendar` DISABLE KEYS */;
INSERT INTO `calendar` VALUES ('0b5d7b20-e886-4f0c-b4e2-7f0ddb02f0f4','8cc8a7db-9d11-4efa-b93d-47643cd09428','','191eda35-904c-4c7d-a820-945e8a05ca40','teste','067991374895','izael.dev@gmail.com',NULL,'2024-04-23','09:45','10:00','CONSULTATION','CONFIRMED',NULL,NULL,NULL,NULL,NULL,'',''),('c1b532ff-b6d7-4d8b-bdd1-0651cb593408','8cc8a7db-9d11-4efa-b93d-47643cd09428','','191eda35-904c-4c7d-a820-945e8a05ca40','teste','67991374895','',NULL,'2024-04-25','11:15','19:00','CONSULTATION','SCHEDULED',NULL,NULL,NULL,NULL,NULL,'',''),('fec3b354-7c56-4f89-8274-c37bfa1efcbf','8cc8a7db-9d11-4efa-b93d-47643cd09428','','191eda35-904c-4c7d-a820-945e8a05ca40','teste','679981490781','nutricionistathiagoferreira@gmail.com',NULL,'2024-04-25','07:00','13:45','CONSULTATION','SCHEDULED',NULL,NULL,NULL,NULL,NULL,'','');
/*!40000 ALTER TABLE `calendar` ENABLE KEYS */;
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

-- Dump completed on 2024-06-04  3:47:56
