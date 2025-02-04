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
-- Table structure for table `patient_care_plan`
--

DROP TABLE IF EXISTS `patient_care_plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_care_plan` (
  `care_plan_id` varchar(255) NOT NULL,
  `care_plan_clinic_id` varchar(255) NOT NULL,
  `procedure_patient_id` varchar(255) DEFAULT NULL,
  `care_plan_patient_id` varchar(255) NOT NULL,
  `care_plan_date_creation` varchar(255) NOT NULL,
  `care_plan_identification` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`care_plan_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_care_plan`
--

LOCK TABLES `patient_care_plan` WRITE;
/*!40000 ALTER TABLE `patient_care_plan` DISABLE KEYS */;
INSERT INTO `patient_care_plan` VALUES ('07c70590-f7e1-499f-be88-b2ce3389cf3d','',NULL,'e638fa5a-00d3-43c0-af49-bf979cd6debd','2024-04-17T12:41:36.381Z','teste'),('658d3f7d-2226-4bae-939e-ebc8b5fcca07','',NULL,'f906ddd5-b296-4602-87f8-7eace8935483','2024-04-16T00:46:56.742Z','aaaaaaaa'),('6db2057f-1408-4333-9dfe-7a25b213a05a','02ac3133-079a-40c7-9b85-125de020b07d',NULL,'e9e47008-4235-4709-aac5-906cf8e92112','2024-11-30',NULL),('8c77f14f-dcbf-4d03-a7ce-c5297eb0c93c','',NULL,'4b46ba22-9377-43bb-bb85-d6bcaf027243','2024-04-12T21:07:55.544Z','teste'),('9b2c0686-6f72-4f44-bcfb-6dcedb610af9','',NULL,'3bb2d70a-6ba6-408d-9886-3bd59f4ccfc3','2024-05-14T01:55:13.159Z','a'),('a14982e4-5827-4bed-bd55-511f83855095','',NULL,'0545505d-3c3c-44df-b8fa-f539210b15f6','2024-04-17T12:17:24.723Z','teste'),('aecfab3d-be67-435f-a23a-a98625c277b4','',NULL,'88a9e8d3-56fe-4546-b727-08e2aeefb7dc','2024-05-21T21:38:44.340Z','a'),('bb58e5ba-fd67-46d9-bf71-022b0254b2b7','',NULL,'3bb2d70a-6ba6-408d-9886-3bd59f4ccfc3','2024-05-14T01:52:54.286Z','a'),('bdc7a831-5ab9-425e-80de-feb643b61a7d','',NULL,'6fa4ea6e-873a-4fba-8c06-ba3e891543fb','2024-04-10T13:39:22.622Z','teste'),('c5877095-51b7-4cee-8651-1ce335416a44','',NULL,'3bb2d70a-6ba6-408d-9886-3bd59f4ccfc3','2024-04-26T15:14:04.706Z','oi'),('cf413174-8617-48b0-b399-8d82b2255aae','',NULL,'4b46ba22-9377-43bb-bb85-d6bcaf027243','2024-04-08T21:16:48.715Z','teste'),('d786a567-72b6-45a2-a5cb-3a04dff78d80','',NULL,'210bca18-e5fa-4086-8503-8c30490f7ccd','2024-04-16T22:37:22.708Z','ss'),('fdc50f16-b1be-415d-8baa-e545f911b95f','',NULL,'aa8d85b5-bd84-4b58-b108-b38dca80edd3','2024-04-16T20:15:46.389Z','teste');
/*!40000 ALTER TABLE `patient_care_plan` ENABLE KEYS */;
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

-- Dump completed on 2024-06-04  3:47:03
