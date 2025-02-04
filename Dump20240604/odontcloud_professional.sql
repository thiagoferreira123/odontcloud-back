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
-- Table structure for table `professional`
--

DROP TABLE IF EXISTS `professional`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `professional` (
  `professional_id` varchar(255) NOT NULL,
  `professional_clinic_id` varchar(255) NOT NULL,
  `professional_email` varchar(255) NOT NULL,
  `professional_full_name` varchar(255) NOT NULL,
  `professional_phone` varchar(255) DEFAULT NULL,
  `professional_cro_state` varchar(255) NOT NULL,
  `professional_cro_number` varchar(255) NOT NULL,
  `professional_photo_link` varchar(255) DEFAULT NULL,
  `professional_specialty` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`professional_id`),
  KEY `fk_clinic_idx` (`professional_clinic_id`),
  CONSTRAINT `fk_clinic` FOREIGN KEY (`professional_clinic_id`) REFERENCES `clinic` (`clinic_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `professional`
--

LOCK TABLES `professional` WRITE;
/*!40000 ALTER TABLE `professional` DISABLE KEYS */;
INSERT INTO `professional` VALUES ('69b6bf58-dfa4-4b3b-bf72-bd93c12fbe23','8cc8a7db-9d11-4efa-b93d-47643cd09428','izael.dev@gmail.com','profissional','27999999999','cro','123','https://odontcloud.s3.us-east-2.amazonaws.com/profissional-foto/d2b064a3-372c-42e2-b484-e2678f87bea3.jpeg','espeialidade'),('6fcc1ae0-9e0e-44dd-bad9-a2b23c2f49be','8cc8a7db-9d11-4efa-b93d-47643cd09428','','teste 2','','cro','123','','espeialidade');
/*!40000 ALTER TABLE `professional` ENABLE KEYS */;
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

-- Dump completed on 2024-06-04  3:47:51
