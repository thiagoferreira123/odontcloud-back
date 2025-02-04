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
-- Table structure for table `clinic`
--

DROP TABLE IF EXISTS `clinic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clinic` (
  `clinic_id` varchar(255) NOT NULL,
  `clinic_email` varchar(255) NOT NULL,
  `clinic_registration_date` varchar(255) DEFAULT NULL,
  `clinic_password` varchar(255) NOT NULL,
  `clinic_full_name` varchar(255) NOT NULL,
  `clinic_phone` varchar(255) DEFAULT NULL,
  `clinic_logo_link` varchar(255) DEFAULT NULL,
  `clinic_reset_password_token` varchar(255) DEFAULT NULL,
  `clinic_reset_password_token_expires` varchar(255) DEFAULT NULL,
  `clinic_cnpj_or_cpf` varchar(255) DEFAULT NULL,
  `clinic_zipcode` varchar(255) DEFAULT NULL,
  `clinic_state` varchar(255) DEFAULT NULL,
  `clinic_city` varchar(255) DEFAULT NULL,
  `clinic_neighborhood` varchar(255) DEFAULT NULL,
  `clinic_street` varchar(255) DEFAULT NULL,
  `clinic_number` int DEFAULT NULL,
  `clinic_signature_link` varchar(255) DEFAULT NULL,
  `clinic_stripe_customer_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`clinic_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clinic`
--

LOCK TABLES `clinic` WRITE;
/*!40000 ALTER TABLE `clinic` DISABLE KEYS */;
INSERT INTO `clinic` VALUES ('273b53d6-4175-4fc6-bbc9-86d9b79d6be6','nutricionistathiagoferreira@gmail.com',NULL,'$argon2id$v=19$m=65536,t=3,p=4$RiBwcIJXMWAji+vX75T9ZQ$ROaSro4DSeLUG/Nax5RUaBNWoJpB9cgRYVAFhb7GVcw','Thiago Ferreira','5567998841541',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'cus_PzostD5qdXqTll'),('8cc8a7db-9d11-4efa-b93d-47643cd09428','izael.dev@gmail.com',NULL,'$argon2id$v=19$m=65536,t=3,p=4$K6xzR24BhattRtu7IgqqpA$NiL+Pa6VPzjdmHScVWhdVx5awczUDGM2vC2nS4B+qHc','Consultório Thiago Ferreira','27 98999-9999','',NULL,NULL,'123.456.789-12','29161-123','ES','Serra','teste','',123,'https://odontcloud.s3.us-east-2.amazonaws.com/clinica-assinatura/44949838-5e97-42fb-b907-3fd02cea22a2.jpeg','cus_PzQDNq4IG95ngL'),('99c22827-8d0a-4537-af17-a3eac5d814d9','ivamadia@hotmail.com',NULL,'$argon2id$v=19$m=65536,t=3,p=4$XWP7HKOD6+HuIfvAadH3Zw$1kzrcZvD47OFcATBNBbbXEJ/UpVUWbgvh8q4p6sEd8c','Ivanir Gonçalves Madia','5567984225926',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `clinic` ENABLE KEYS */;
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

-- Dump completed on 2024-06-04  3:47:31
