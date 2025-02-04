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
-- Table structure for table `patient_care_plan_procedure`
--

DROP TABLE IF EXISTS `patient_care_plan_procedure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_care_plan_procedure` (
  `procedure_id` varchar(255) NOT NULL,
  `procedure_name` varchar(255) NOT NULL,
  `procedure_care_plan_id` varchar(255) DEFAULT NULL,
  `procedure_professional_id` varchar(255) DEFAULT NULL,
  `procedure_value` varchar(255) DEFAULT NULL,
  `procedure_deciduous_or_permanent` varchar(255) DEFAULT NULL,
  `procedure_status` varchar(255) DEFAULT NULL,
  `procedure_observations` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`procedure_id`),
  UNIQUE KEY `procedure_id_UNIQUE` (`procedure_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_care_plan_procedure`
--

LOCK TABLES `patient_care_plan_procedure` WRITE;
/*!40000 ALTER TABLE `patient_care_plan_procedure` DISABLE KEYS */;
INSERT INTO `patient_care_plan_procedure` VALUES ('','APM - Aparelho de Protração Mandibular','057c1e77-277b-4094-873f-99d4b653bdab',NULL,'250,00','deciduos','pending',''),('09165f6f-2cfb-4a37-8f5f-cb5c333b4340','APM - Aparelho de Protração Mandibular','057c1e77-277b-4094-873f-99d4b653bdab',NULL,'250,00','deciduos','pending',''),('1319dfd0-5bdf-497a-9112-26464296c092','Acompanhamento de tratamento/procedimento cirúrgico em odontologia','cf413174-8617-48b0-b399-8d82b2255aae','6fcc1ae0-9e0e-44dd-bad9-a2b23c2f49be','500,00','permanent','pending',''),('19658c64-47b4-4679-8141-5d1252fd2c7f','Acompanhamento de tratamento/procedimento cirúrgico em odontologia','d786a567-72b6-45a2-a5cb-3a04dff78d80','02278eb4-6145-42d4-9ace-117bd146e7b6','250,00','permanent','pending',''),('1a7bdf6d-9073-4d91-a515-5c9ad386dab8','Aparelho de Thurow','057c1e77-277b-4094-873f-99d4b653bdab',NULL,'250,00','deciduos','pending',''),('1f781d74-d8a0-482a-a02c-f254b353a339','Ajuste Oclusal por acréscimo','bdc7a831-5ab9-425e-80de-feb643b61a7d','69b6bf58-dfa4-4b3b-bf72-bd93c12fbe23','250,00','permanent','pending',''),('20a95d2d-ae5c-4b4a-8ec8-0eef32801248','APM - Aparelho de Protração Mandibular','057c1e77-277b-4094-873f-99d4b653bdab',NULL,'250,00','deciduos','pending',''),('232ee809-eb4e-453d-a458-92ec1a9d75d5','APM - Aparelho de Protração Mandibular','057c1e77-277b-4094-873f-99d4b653bdab',NULL,'250,00','deciduos','realized',''),('253d71e5-c5de-49e7-ab39-6186d842f507','Acompanhamento de tratamento/procedimento cirúrgico em odontologia','bd1e7f6f-8173-4ff9-ad47-6d602a628f67',NULL,'200,00','deciduos','pending',''),('259e3d20-be78-4ef4-8299-3962adcc70a7','Cirurgia para torus mandibular – unilateral','057c1e77-277b-4094-873f-99d4b653bdab',NULL,'250,00','permanent','pending',''),('33844005-a1f2-4e7f-a5aa-e563a4e1164d','Aparelho ortodôntico fixo metálico','769e06ce-e1a8-4efa-88a9-64a8f4391985','','50,00','permanent','pending',''),('36fec0ed-3cdb-496f-977d-4f80afbe7433','Aletas Gomes','057c1e77-277b-4094-873f-99d4b653bdab',NULL,'250,00','permanent','pending',''),('3ac0422a-5259-44b5-99a3-0767504ee767','Aparelho de protração mandibular - APM','c79a5426-e170-41b8-ada9-50982a0d99aa',NULL,'250,00','deciduos','pending',''),('411cecc3-6a4f-4d32-bc62-c971480fdbf5','Aparelho ortodôntico fixo estético parcial','3f582c3e-9e5e-4eb8-8af1-3621815acf22',NULL,'250,00','permanent','pending',''),('4d97a452-dabd-4ceb-9421-ad0cab5c6cc7','Acompanhamento de tratamento/procedimento cirúrgico em odontologia','bd1e7f6f-8173-4ff9-ad47-6d602a628f67',NULL,'500,00','deciduos','pending',''),('63441f27-2ed4-436c-99c0-008e0daf9d44','Acompanhamento de tratamento/procedimento cirúrgico em odontologia','28f19ff7-9c5a-4cf4-82f3-fd31a0077923','','50,00','permanent','pending',''),('6db2057f-1408-4333-9dfe-7a25b2112a0fv','Limpeza dentária',NULL,NULL,'380.50','permanent','Realizada','Nenhuma'),('6db2057f-1408-4333-9dfe-7a25b213a11','Limpeza dentária','6db2057f-1408-4333-9dfe-7a25b213a05a',NULL,'380.50','permanent','Realizada','Nenhuma'),('6db2057f-1408-4333-9dfe-7a25b213a12','Extração dentária','6db2057f-1408-4333-9dfe-7a25b213a05a',NULL,'250.00','deciduos','Pendente','Nenhuma'),('6db2057f-1408-4333-9dfe-7a25b213a13','Clareamento','6db2057f-1408-4333-9dfe-7a25b213a05a',NULL,'450.00','permanent','Pendente','Nenhuma'),('8e25f247-4509-4706-ac0e-3d2611eb481e','Acompanhamento de tratamento/procedimento cirúrgico em odontologia','5f584bfc-0c53-41f8-b956-6478159b2c65','','1.121.212,12','permanent','pending',''),('931beb20-4a85-4898-a216-4e98ab578b25','Acompanhamento de tratamento/procedimento cirúrgico em odontologia','fdc50f16-b1be-415d-8baa-e545f911b95f','','250,00','permanent','pending',''),('a7616db9-a130-4c37-8594-e97671323d2a','Apicetomia multirradiculares com obturação retrógrada','d786a567-72b6-45a2-a5cb-3a04dff78d80','02278eb4-6145-42d4-9ace-117bd146e7b6','150,00','permanent','pending',''),('a7a2d881-e374-4d94-a3e2-01208d9566e9','Ajuste Oclusal por acréscimo','658d3f7d-2226-4bae-939e-ebc8b5fcca07','02278eb4-6145-42d4-9ace-117bd146e7b6','250,00','permanent','pending',''),('a823e916-8ca2-4195-b6b4-384e620180df','Aletas Gomes','f478fa1f-a269-4555-ab10-83ae28c08849','','2.500,00','permanent','pre-existing',''),('aeb28c39-6ec1-4f35-922d-3462466d9af8','APM - Aparelho de Protração Mandibular','8c77f14f-dcbf-4d03-a7ce-c5297eb0c93c','69b6bf58-dfa4-4b3b-bf72-bd93c12fbe23','250,00','permanent','pending',''),('bf6d884b-fbdc-4cd6-ab4e-45efda16cb0e','Aparelho de protração mandibular - APM','d786a567-72b6-45a2-a5cb-3a04dff78d80','02278eb4-6145-42d4-9ace-117bd146e7b6','250,00','permanent','pending',''),('c392947c-deb7-4303-96c5-e62dbe286085','Aletas Gomes','057c1e77-277b-4094-873f-99d4b653bdab',NULL,'250,00','permanent','pending',''),('c69a9976-f756-473e-9752-908a34b197c1','APM - Aparelho de Protração Mandibular','bdc7a831-5ab9-425e-80de-feb643b61a7d','69b6bf58-dfa4-4b3b-bf72-bd93c12fbe23','250,00','permanent','pending',''),('cb690a68-0994-4674-87ff-5a0e16ca7312','Ajuste Oclusal por desgaste seletivo','057c1e77-277b-4094-873f-99d4b653bdab',NULL,'250,00','permanent','pending',''),('df7d03d3-b4d8-4e61-a447-403f60af88e6','Acompanhamento de tratamento/procedimento cirúrgico em odontologia','057c1e77-277b-4094-873f-99d4b653bdab',NULL,'250,00','permanent','pending',''),('e655c0b3-5e25-486c-90ad-cecbeda344fa','Ajuste Oclusal por desgaste seletivo','3f582c3e-9e5e-4eb8-8af1-3621815acf22',NULL,'350,00','permanent','realized','');
/*!40000 ALTER TABLE `patient_care_plan_procedure` ENABLE KEYS */;
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

-- Dump completed on 2024-06-04  3:46:48
