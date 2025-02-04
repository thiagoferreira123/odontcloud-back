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
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient` (
  `patient_id` varchar(255) NOT NULL,
  `patient_clinic_id` varchar(255) NOT NULL,
  `patient_last_interaction` varchar(255) DEFAULT NULL,
  `patient_full_name` varchar(255) NOT NULL,
  `patient_photo` varchar(255) DEFAULT NULL,
  `patient_birth_date` varchar(255) DEFAULT NULL,
  `patient_cpf` varchar(14) DEFAULT NULL,
  `patient_rg` varchar(20) DEFAULT NULL,
  `patient_rg_issuer` varchar(255) DEFAULT NULL,
  `patient_sex` int DEFAULT NULL,
  `patient_marital_status` varchar(255) DEFAULT NULL,
  `patient_health_insurance` varchar(255) DEFAULT NULL,
  `patient_health_insurance_number` varchar(255) DEFAULT NULL,
  `patient_medical_record_number` varchar(255) DEFAULT NULL,
  `patient_reference` text,
  `patient_phone` varchar(20) DEFAULT NULL,
  `patient_email` varchar(255) DEFAULT NULL,
  `patient_extra_contact_full_name` varchar(255) DEFAULT NULL,
  `patient_extra_contact_cpf` varchar(14) DEFAULT NULL,
  `patient_extra_contact_phone` varchar(20) DEFAULT NULL,
  `patient_extra_contact_relationship` varchar(255) DEFAULT NULL,
  `patient_zip_code` varchar(9) DEFAULT NULL,
  `patient_number` varchar(10) DEFAULT NULL,
  `patient_street` varchar(255) DEFAULT NULL,
  `patient_complement` text,
  `patient_neighborhood` varchar(255) DEFAULT NULL,
  `patient_city` varchar(255) DEFAULT NULL,
  `patient_state` varchar(2) DEFAULT NULL,
  `patient_register_date` varchar(255) DEFAULT NULL,
  `patient_observation` text,
  PRIMARY KEY (`patient_id`),
  UNIQUE KEY `patient_id_UNIQUE` (`patient_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES ('0545505d-3c3c-44df-b8fa-f539210b15f6','6bc51bc6-72cf-4b49-a96e-328b9fb6ac45','2024-04-17T12:18:51.897Z','teste','','1997-02-02','','','',1,'','','','','','','','','','','','','','','','','','','2024-04-17',NULL),('191eda35-904c-4c7d-a820-945e8a05ca40','8cc8a7db-9d11-4efa-b93d-47643cd09428','2024-04-17','teste','','1997-02-02','','','',1,'','','','','','','','','','','','','','','','','','','2024-04-17',NULL),('210bca18-e5fa-4086-8503-8c30490f7ccd','6dcf36ce-6194-4037-8b59-8596c41e5405','2024-04-18T16:16:57.748Z','Patrícia Rodrigues','https://odontcloud.s3.us-east-2.amazonaws.com/paciente-foto/4b7fe48c-dbf1-438d-a8d6-f568838f2d09.png','1993-06-30','','','',0,'','','','','','','','','','','','','','','','','','','2024-04-16',''),('3bb2d70a-6ba6-408d-9886-3bd59f4ccfc3','273b53d6-4175-4fc6-bbc9-86d9b79d6be6','2024-05-14T01:55:15.705Z','Thiago Ferreira','','1993-06-30','','','',1,'','','','','','','','','','','','','','','','','','','2024-04-26',NULL),('4b46ba22-9377-43bb-bb85-d6bcaf027243','6dcf36ce-6194-4037-8b59-8596c41e5405','2024-04-16','Gabriel Ferreira','https://odontcloud.s3.us-east-2.amazonaws.com/paciente-foto/14873802-31ce-4e20-8205-00451d4ffbc9.png','1997-02-02','16.625.554/885','','',1,'','','','','','27855954456','email@email.email','','','','','29161-123','123','rua','','bairro','','es','2024-04-16','obs'),('5c379dc7-820f-4b80-be3d-649678b1c282','dc6b40ff-ca7b-4301-9a88-98090edaa849','2024-04-24','Thiago Ferreira','','1993-06-30','','','',0,'','','','','','','','','','','','','','','','','','','2024-04-24',NULL),('88a9e8d3-56fe-4546-b727-08e2aeefb7dc','273b53d6-4175-4fc6-bbc9-86d9b79d6be6','2024-05-21T21:38:46.984Z','Valentina Ferreira','','1993-06-30','','','',0,'','','','','','','','','','','','','','','','','','','2024-04-26',NULL),('a87badc2-9f46-42e3-9299-dbbab8a6540c','6dcf36ce-6194-4037-8b59-8596c41e5405','2024-04-16','Gustavo Santos','https://odontcloud.s3.us-east-2.amazonaws.com/paciente-foto/18543a16-20d1-41cd-8bbc-674d61991bb1.png','1993-06-30','','','',1,'','','','','','','','','','','','','','','','','','','2024-04-16',''),('a950a573-47ac-42c9-84c3-e5fa00470a14','0c2508cb-8b61-447d-9a08-544120dc846a','2024-04-24','Thiago 1','','1993-06-30','','','',0,'','','','','','','','','','','','','','','','','','','2024-04-24',NULL),('c0e9961f-e544-4175-86c1-da5b2d58c1d3','6dcf36ce-6194-4037-8b59-8596c41e5405','2024-04-16','Maria Oliveira','https://odontcloud.s3.us-east-2.amazonaws.com/paciente-foto/a6e7bf70-9f1f-4ec8-b05c-8b310eda3f31.png','1993-06-30','','','',0,'','','','','','','','','','','','','','','','','','','2024-04-16',''),('e638fa5a-00d3-43c0-af49-bf979cd6debd','c32db713-fca3-4196-8679-aa9cc8c4a1c6','2024-04-17T12:41:39.711Z','teste','','1997-02-02','','','',0,'','','','','','','','','','','','','','','','','','','2024-04-17',NULL);
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
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

-- Dump completed on 2024-06-04  3:46:24
