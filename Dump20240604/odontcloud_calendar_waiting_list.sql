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
-- Table structure for table `calendar_waiting_list`
--

DROP TABLE IF EXISTS `calendar_waiting_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `calendar_waiting_list` (
  `calendar_waiting_list_id` varchar(255) NOT NULL,
  `calendar_waiting_list_clinic_id` varchar(255) NOT NULL,
  `calendar_waiting_list_scheduling_date` varchar(255) DEFAULT NULL,
  `calendar_waiting_list_patient_name` varchar(255) DEFAULT NULL,
  `calendar_waiting_list_email` varchar(255) DEFAULT NULL,
  `calendar_waiting_list_contact` varchar(255) DEFAULT NULL,
  `calendar_waiting_list_health_insurance` varchar(255) DEFAULT NULL,
  `calendar_waiting_list_appointment_type` varchar(255) DEFAULT NULL,
  `calendar_waiting_list_observation` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`calendar_waiting_list_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calendar_waiting_list`
--

LOCK TABLES `calendar_waiting_list` WRITE;
/*!40000 ALTER TABLE `calendar_waiting_list` DISABLE KEYS */;
INSERT INTO `calendar_waiting_list` VALUES ('1fbbbfc8-0381-4f9d-bff3-abf6e00aed3f','8cc8a7db-9d11-4efa-b93d-47643cd09428',NULL,'teste edit','email@email.email','279885561','NotreDame Intermédica','OTHER','Outros\nNotreDame Intermédica'),('29e13534-7315-4aa2-bb74-a9ec80beb295','8cc8a7db-9d11-4efa-b93d-47643cd09428',NULL,'paciente','izael.dev@gmail.com','27988126640','Unimed Nacional','RETURN','retorno\nUnimed Nacional'),('3226eb71-a9ba-43ec-a2fa-359583dd9b6b','8cc8a7db-9d11-4efa-b93d-47643cd09428',NULL,'teste novo','email@email.email','27855954456','Hapvida','SCHEDULED_WEBSITE','Agendado pelo site\nHapvida'),('75ff66c6-1477-44de-ba46-8a6e88149a04','8cc8a7db-9d11-4efa-b93d-47643cd09428',NULL,'Gabriel Ferreira','email@email.email','27855954456','Amil','POSSIBLE_RETURN','Possivel retorno\nAmil'),('9d6a606b-ed5e-4a7d-a588-234a0daa944d','8cc8a7db-9d11-4efa-b93d-47643cd09428',NULL,'teste aaaaaaaaaa','testeemail@email.com','27855954456','Bradesco Saúde','CONSULTATION','consulta bradesco');
/*!40000 ALTER TABLE `calendar_waiting_list` ENABLE KEYS */;
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

-- Dump completed on 2024-06-04  3:48:00
