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
-- Table structure for table `patient_care_plan_budget`
--

DROP TABLE IF EXISTS `patient_care_plan_budget`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_care_plan_budget` (
  `budget_id` varchar(255) NOT NULL,
  `budget_care_plan_id` varchar(255) NOT NULL,
  `budget_care_plan_professional_id` varchar(255) NOT NULL,
  `budget_care_plan_patient_id` varchar(255) NOT NULL,
  `budget_clinic_id` varchar(255) NOT NULL,
  `budget_date_creation` varchar(255) DEFAULT NULL,
  `budget_value` varchar(255) DEFAULT NULL,
  `budget_payment_method` varchar(255) DEFAULT NULL,
  `budget_discount_type` varchar(255) DEFAULT NULL,
  `budget_discount_value` varchar(255) DEFAULT NULL,
  `budget_number_installments` varchar(255) DEFAULT NULL,
  `budget_due_first_installment` varchar(255) DEFAULT NULL,
  `budget_entry_payment` varchar(255) DEFAULT NULL,
  `budget_pay_day` varchar(255) DEFAULT NULL,
  `budget_observations` varchar(255) DEFAULT NULL,
  `budget_name` varchar(255) DEFAULT NULL,
  `budget_number` int DEFAULT NULL,
  PRIMARY KEY (`budget_id`),
  UNIQUE KEY `budget_id_UNIQUE` (`budget_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_care_plan_budget`
--

LOCK TABLES `patient_care_plan_budget` WRITE;
/*!40000 ALTER TABLE `patient_care_plan_budget` DISABLE KEYS */;
INSERT INTO `patient_care_plan_budget` VALUES ('1278944d-61e4-4c96-b911-d44695ae07f7','d786a567-72b6-45a2-a5cb-3a04dff78d80','','210bca18-e5fa-4086-8503-8c30490f7ccd','','2024-04-18T16:12:16.245Z','650,00','cartoes_credito',NULL,NULL,'12','2024-04-18T16:12:17.141Z','2024-04-18T16:12:17.141Z','100',NULL,'ss',66600702),('4ad41d95-9977-4f0b-a9ef-65fd9e1579fe','658d3f7d-2226-4bae-939e-ebc8b5fcca07','','f906ddd5-b296-4602-87f8-7eace8935483','','2024-04-16T01:01:20.902Z','500,00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'aaaaaaaa',72178715),('841ded26-e7ca-40f5-a8c5-b20b5eb2aef1','bdc7a831-5ab9-425e-80de-feb643b61a7d','','6fa4ea6e-873a-4fba-8c06-ba3e891543fb','','2024-04-16T20:10:22.571Z','3.000,00','dinheiro',NULL,NULL,NULL,'2024-05-17T20:10:23.000Z','2024-04-17T20:10:23.000Z','120,00',NULL,'teste',24659690),('91dc98b8-03d1-46f9-b6eb-066469fd6665','658d3f7d-2226-4bae-939e-ebc8b5fcca07','','f906ddd5-b296-4602-87f8-7eace8935483','','2024-04-16T01:20:51.976Z','500,00','cartoes_credito','percentage','10','10','2024-04-16T01:20:53.041Z','2024-04-16T01:20:53.041Z','50',NULL,'aaaaaaaa',40394647),('a1f91293-4c29-410b-aac1-8d0c07c515cc','fdc50f16-b1be-415d-8baa-e545f911b95f','83171ab6-3add-48a2-a051-15980e6471d1','aa8d85b5-bd84-4b58-b108-b38dca80edd3','','2024-04-16T20:20:40.339Z','1.250,00','dinheiro',NULL,NULL,'10','2024-05-16T20:22:18.000Z','2024-04-16T20:22:18.572Z','250',NULL,'teste',14288893);
/*!40000 ALTER TABLE `patient_care_plan_budget` ENABLE KEYS */;
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

-- Dump completed on 2024-06-04  3:46:39
