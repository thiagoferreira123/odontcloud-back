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
-- Table structure for table `patient_document`
--

DROP TABLE IF EXISTS `patient_document`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_document` (
  `documents_id` varchar(255) NOT NULL,
  `documents_patient_id` varchar(255) NOT NULL,
  `documents_folder_name` varchar(255) DEFAULT NULL,
  `documents_upload_date` varchar(255) DEFAULT NULL,
  `documents_aws_link` text,
  PRIMARY KEY (`documents_id`),
  UNIQUE KEY `patient_documents_id_UNIQUE` (`documents_id`),
  KEY `fk_documents_idx` (`documents_patient_id`),
  CONSTRAINT `fk_documents` FOREIGN KEY (`documents_patient_id`) REFERENCES `patient` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_document`
--

LOCK TABLES `patient_document` WRITE;
/*!40000 ALTER TABLE `patient_document` DISABLE KEYS */;
INSERT INTO `patient_document` VALUES ('210bca18-e5fa-4086-8503-8c30490f7cce','210bca18-e5fa-4086-8503-8c30490f7ccd','a','a','a'),('443ba0b9-29f7-457f-aa06-b613486cdb46','4b46ba22-9377-43bb-bb85-d6bcaf027243','uwp1267644.jpeg',NULL,'https://odontcloud.s3.us-east-2.amazonaws.com/paciente-documento/4b6adf89-bc77-4514-adc3-86a9edab66f3.jpeg'),('a7b75884-f93c-499c-82b1-b612ac4f18ce','3bb2d70a-6ba6-408d-9886-3bd59f4ccfc3','Banner Assinatura EletrÃ´nica (2).png',NULL,'https://odontcloud.s3.us-east-2.amazonaws.com/paciente-documento/2b28bbc4-cb68-457a-a693-6e4fb9b9b4fa.png');
/*!40000 ALTER TABLE `patient_document` ENABLE KEYS */;
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

-- Dump completed on 2024-06-04  3:46:09
