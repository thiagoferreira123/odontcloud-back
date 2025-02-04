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
-- Table structure for table `patient_care_plan_budget_payment_historic`
--

DROP TABLE IF EXISTS `patient_care_plan_budget_payment_historic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_care_plan_budget_payment_historic` (
  `payment_id` varchar(255) NOT NULL,
  `payment_budget_id` varchar(255) NOT NULL,
  `payment_due_date` varchar(255) DEFAULT NULL,
  `payment_installments_number` varchar(255) DEFAULT NULL,
  `payment_installments_value` decimal(10,2) DEFAULT NULL,
  `payment_installments_value_date_received` varchar(255) DEFAULT NULL,
  `payment_status` varchar(255) DEFAULT NULL,
  `payment_description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`payment_id`),
  UNIQUE KEY `payment_id_UNIQUE` (`payment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_care_plan_budget_payment_historic`
--

LOCK TABLES `patient_care_plan_budget_payment_historic` WRITE;
/*!40000 ALTER TABLE `patient_care_plan_budget_payment_historic` DISABLE KEYS */;
INSERT INTO `patient_care_plan_budget_payment_historic` VALUES ('02f94bbf-e332-4c43-b96b-218f373b9d55','3504cb15-bbb2-492a-844b-19f79f0ac15f','2025-02-15','10',37.50,NULL,'pending','10/12'),('03179b59-8930-4294-aae5-34fa27c09738','e159e3f6-2fde-444a-b2aa-334dba46bfb7','2024-04-12','1',550.00,NULL,'pending','1/5'),('0435a240-75fa-4342-849a-2581d1734b24','46571c0d-b3af-415f-8efb-e8f900b2b2e8','2024-08-15','5',63.33,NULL,'pending','5/12'),('04984b1c-8284-4d4b-a0b2-6515f2bde089','a1f91293-4c29-410b-aac1-8d0c07c515cc','2024-04-16','0',250.00,'2024-04-16','received','Entrada'),('070f380b-3a40-412f-9d3d-c5d067c9e272','ac511962-5932-4b39-b214-d4a8c1db9857','2024-06-17','3',27.92,NULL,'pending','3/12'),('086d40e6-9c10-4032-8bc2-df8d74bc3115','8c5937f1-45af-4b0d-a8e5-010c1796fcef','2024-02-10','2',480.14,'2024-04-11T21:32:25.103Z','received','2/5'),('090f685f-d43e-4274-aee1-a3ca7cd92c5d','ac511962-5932-4b39-b214-d4a8c1db9857','2024-05-17','2',27.92,NULL,'pending','2/12'),('098c37b5-ce82-4149-ae74-f5753b63e14f','8c5937f1-45af-4b0d-a8e5-010c1796fcef','2024-03-10','3',480.14,NULL,'pending','3/5'),('0bd9b047-e189-4dd6-948f-e4fcbc3f2436','91dc98b8-03d1-46f9-b6eb-066469fd6665','2024-08-15','5',45.00,NULL,'pending','5/10'),('0c6f17e3-dd19-4a20-b375-0b5031d9f711','bf69c335-47a2-4ff9-b325-ba3aa24a3db9','2024-08-10','5',72.00,'2024-04-10T19:18:05.146Z','received','5/10'),('0f43dbbc-c560-4ece-a144-cc9eb0ec93b8','bf69c335-47a2-4ff9-b325-ba3aa24a3db9','2024-06-10','3',72.00,'2024-04-10T19:18:10.812Z','received','3/10'),('160d5f3d-439e-467a-8a8d-5e7bea23c4e9','50863cb1-cf07-4daa-99f8-a3a225614904','2024-04-10','4',600.00,NULL,'pending','4/5'),('182a59f7-0bd2-4e82-8aa0-343785a86e8f','','2024-04-16','0',500.00,NULL,'received','Entrada'),('19a84bef-2535-4cfe-9b9f-5ffe1b9803cb','1278944d-61e4-4c96-b911-d44695ae07f7','2024-12-18','9',45.83,NULL,'pending','9/12'),('20e74409-65e4-47d8-8297-3e1205b221fa','a92c885a-8848-406a-97f4-fab434d0c57c','2024-02-10','2',480.00,NULL,'pending','2/5'),('214852bf-2660-445f-b274-8c2574c57ce1','d3eb448a-e47f-4c17-a9f0-5d130ac25027','2024-09-15','6',250.00,NULL,'pending','6/8'),('246c47d1-80af-4048-9b4c-cb96b0c55163','841ded26-e7ca-40f5-a8c5-b20b5eb2aef1','2024-05-17','1',2880.00,NULL,'pending','1/1'),('253eebd5-4d3f-48c0-8e32-1146f2d2673d','91dc98b8-03d1-46f9-b6eb-066469fd6665','2024-09-15','6',45.00,NULL,'pending','6/10'),('27004412-0893-46b6-a76a-60a83a21861e','ac511962-5932-4b39-b214-d4a8c1db9857','2024-09-17','6',27.92,NULL,'pending','6/12'),('2da89f10-3fe0-4d13-bbfd-7098d4c7cf5f','d3eb448a-e47f-4c17-a9f0-5d130ac25027','2024-10-15','7',250.00,NULL,'pending','7/8'),('2e4f3ca7-c4e5-4ca8-917b-f42f349cd4fd','e159e3f6-2fde-444a-b2aa-334dba46bfb7','2024-05-12','2',550.00,NULL,'pending','2/5'),('2ee78ead-3a08-4051-96f3-74fc4e325554','bf69c335-47a2-4ff9-b325-ba3aa24a3db9','2024-04-10','1',72.00,'2024-04-10T19:18:00.698Z','received','1/10'),('2efd9527-d887-49ac-9b95-351b7613a3c7','a1f91293-4c29-410b-aac1-8d0c07c515cc','2024-05-16','1',100.00,NULL,'pending','1/10'),('2f1a539e-9fbe-499c-8d58-fcb8bdc9c087','1278944d-61e4-4c96-b911-d44695ae07f7','2025-01-18','10',45.83,NULL,'pending','10/12'),('32b7228e-e8e3-44ba-9d5a-29d8abcda208','bf69c335-47a2-4ff9-b325-ba3aa24a3db9','2024-09-10','6',72.00,'2024-04-10T19:18:06.323Z','received','6/10'),('3604c36f-dd81-4015-ad8e-05d6d6d0d2c8','8c5937f1-45af-4b0d-a8e5-010c1796fcef','2024-05-10','5',480.14,NULL,'pending','5/5'),('393fa5f7-b693-4bd7-a620-0c2c336f5eb4','98ec5ed4-4c15-47c0-b79a-07871b1e926f','2024-04-16','0',500.00,NULL,'pending','Entrada'),('39ed08bf-22c3-4284-91fd-0762af430aaa','3504cb15-bbb2-492a-844b-19f79f0ac15f','2025-01-15','9',37.50,NULL,'pending','9/12'),('4101b9e5-ee08-4eff-a0fb-8a4fc7d828eb','91dc98b8-03d1-46f9-b6eb-066469fd6665','2024-11-15','8',45.00,NULL,'pending','8/10'),('434459af-a22a-47a4-8974-4345fca2f848','a92c885a-8848-406a-97f4-fab434d0c57c','2024-05-10','5',480.00,NULL,'pending','5/5'),('444f4cf5-8cb6-42fa-a5df-36c39439fc46','bf69c335-47a2-4ff9-b325-ba3aa24a3db9','2024-12-10','9',72.00,'2024-04-10T19:18:19.281Z','received','9/10'),('4601c94d-2dc4-4aaf-a69d-259301155b97','a92c885a-8848-406a-97f4-fab434d0c57c','2024-01-10','1',480.00,'2024-04-10T14:24:53.142Z','received','1/5'),('46664ceb-94f5-43c9-91f0-54f61a08327b','3504cb15-bbb2-492a-844b-19f79f0ac15f','2024-11-15','7',37.50,NULL,'pending','7/12'),('46999efd-d408-491b-8ce6-249b07805fb5','46571c0d-b3af-415f-8efb-e8f900b2b2e8','2024-09-15','6',63.33,NULL,'pending','6/12'),('46d5c800-8155-4e3a-82c8-7712901330b4','bf69c335-47a2-4ff9-b325-ba3aa24a3db9','2024-07-10','4',72.00,'2024-04-10T19:18:08.511Z','received','4/10'),('4700561f-4d33-4b0a-84d2-89078025e548','a1f91293-4c29-410b-aac1-8d0c07c515cc','2024-07-16','3',100.00,NULL,'pending','3/10'),('488fea38-b406-474e-8cb3-7b4201598a95','a92c885a-8848-406a-97f4-fab434d0c57c','2024-04-10','4',480.00,NULL,'pending','4/5'),('49fd6ab6-292b-4a67-a559-f26c47d45829','98ec5ed4-4c15-47c0-b79a-07871b1e926f','2024-06-16','2',1250.00,NULL,'pending','2/2'),('4b1019e3-8570-49f1-8ce9-8578fe7f2e6b','a1f91293-4c29-410b-aac1-8d0c07c515cc','2024-12-16','8',100.00,NULL,'pending','8/10'),('4e2afada-4996-4356-b79f-0b6ddf98fe7c','1278944d-61e4-4c96-b911-d44695ae07f7','2024-05-18','2',45.83,NULL,'pending','2/12'),('52732a85-be20-4124-b3ae-2dc831790702','1278944d-61e4-4c96-b911-d44695ae07f7','2024-10-18','7',45.83,NULL,'pending','7/12'),('554eab72-71bd-4733-b1a0-338b787d5029','1278944d-61e4-4c96-b911-d44695ae07f7','2024-07-18','4',45.83,NULL,'pending','4/12'),('55e9b1c7-3fb9-4eda-9c7a-bfd07b07bada','3504cb15-bbb2-492a-844b-19f79f0ac15f','2024-09-15','5',37.50,NULL,'pending','5/12'),('5602d2ae-93e6-48eb-8004-79773e67bd65','46571c0d-b3af-415f-8efb-e8f900b2b2e8','2024-11-15','8',63.33,NULL,'pending','8/12'),('56e6ba1e-3231-47d5-b3b8-90763b59e67f','a1f91293-4c29-410b-aac1-8d0c07c515cc','2025-01-16','9',100.00,NULL,'pending','9/10'),('5f84f7c5-6674-4b6e-90b1-bab7aae40eba','841ded26-e7ca-40f5-a8c5-b20b5eb2aef1','2024-04-17','0',120.00,NULL,'pending','Entrada'),('6139d43e-6a03-48d6-8589-1e3ba17ebee0','91dc98b8-03d1-46f9-b6eb-066469fd6665','2024-05-15','2',45.00,NULL,'pending','2/10'),('61500700-b324-4f07-84c1-dfc6386c6702','1278944d-61e4-4c96-b911-d44695ae07f7','2024-09-18','6',45.83,NULL,'pending','6/12'),('618768e2-1f59-4081-bef0-f7c1edf581ac','d3eb448a-e47f-4c17-a9f0-5d130ac25027','2024-06-15','3',250.00,NULL,'pending','3/8'),('64de113f-735f-4c02-bb86-71c1a77c007f','46571c0d-b3af-415f-8efb-e8f900b2b2e8','2024-05-15','2',63.33,NULL,'pending','2/12'),('67cb1e8b-834d-457f-ad20-0876c9658ea1','91dc98b8-03d1-46f9-b6eb-066469fd6665','2024-10-15','7',45.00,NULL,'pending','7/10'),('688dbb52-f9b0-4e98-8f6f-8ec28eea3738','ac511962-5932-4b39-b214-d4a8c1db9857','2024-10-17','7',27.92,NULL,'pending','7/12'),('6e012f2c-ffe6-4f7a-ae4f-e5b6cb771051','46571c0d-b3af-415f-8efb-e8f900b2b2e8','2024-04-15','1',63.33,NULL,'pending','1/12'),('70e42744-94e3-4087-a595-77d5dfe2839d','46571c0d-b3af-415f-8efb-e8f900b2b2e8','2024-06-15','3',63.33,NULL,'pending','3/12'),('70fa5367-04c6-41c4-b450-c0445854191e','46571c0d-b3af-415f-8efb-e8f900b2b2e8','2025-01-15','10',63.33,NULL,'pending','10/12'),('7131cd38-a7f5-4fa4-8d9a-98f59fb31c3d','0db4f85d-cb59-48ee-a40b-8dc66ed04027','2024-05-16','2',250.00,'2024-04-16T20:17:41.604Z','received','2/5'),('75bd7fe2-9816-4fbc-8d5d-0abb44c4334f','a92c885a-8848-406a-97f4-fab434d0c57c','2024-03-10','3',480.00,NULL,'pending','3/5'),('76a7862b-a1f5-4f56-b666-8f19d0be2d65','d3eb448a-e47f-4c17-a9f0-5d130ac25027','2024-07-15','4',250.00,NULL,'pending','4/8'),('7804c9f1-f706-4027-babb-5baa7e0eca27','ac511962-5932-4b39-b214-d4a8c1db9857','2024-04-17','0',250.00,'2024-04-17','received','Entrada'),('78a00b1a-e6c3-4f6a-88f8-6ef77c298449','3504cb15-bbb2-492a-844b-19f79f0ac15f','2024-05-15','1',37.50,NULL,'pending','1/12'),('790d06f6-d322-4702-840c-53c8554d7542','e159e3f6-2fde-444a-b2aa-334dba46bfb7','2024-08-12','5',550.00,NULL,'pending','5/5'),('7a00c481-3da6-4016-8d2e-e4d35f1de37d','d3eb448a-e47f-4c17-a9f0-5d130ac25027','2024-11-15','8',250.00,NULL,'pending','8/8'),('7f164904-33a6-4ff7-a3d4-7faaa1429da9','a1f91293-4c29-410b-aac1-8d0c07c515cc','2024-11-16','7',100.00,NULL,'pending','7/10'),('7f5ff31e-895b-441e-93df-60bc2619e00f','bf69c335-47a2-4ff9-b325-ba3aa24a3db9','2024-11-10','8',72.00,'2024-04-10T19:18:15.051Z','received','8/10'),('8035654f-a586-4928-9239-f3d4a476b57f','46571c0d-b3af-415f-8efb-e8f900b2b2e8','2024-10-15','7',63.33,NULL,'pending','7/12'),('813ad488-4cf6-4f0b-ab02-627a268d963b','3504cb15-bbb2-492a-844b-19f79f0ac15f','2024-06-15','2',37.50,NULL,'pending','2/12'),('826868a6-8b94-4c5c-b2d2-7a399155da4e','91dc98b8-03d1-46f9-b6eb-066469fd6665','2024-07-15','4',45.00,NULL,'pending','4/10'),('82a05b06-b1fa-436f-8b3d-0c88e14ed17d','ac511962-5932-4b39-b214-d4a8c1db9857','2024-08-17','5',27.92,NULL,'pending','5/12'),('849a4f70-9ba8-4675-b782-8fadb20396b1','d3eb448a-e47f-4c17-a9f0-5d130ac25027','2024-05-15','2',250.00,NULL,'pending','2/8'),('857e02ff-8ba8-495c-87fd-b678cd9dbd2f','50863cb1-cf07-4daa-99f8-a3a225614904','2024-01-10','1',600.00,'2024-04-10T14:03:12.346Z','received','1/5'),('87258ff1-8361-40d9-8ab1-eb4cf2b8629a','3504cb15-bbb2-492a-844b-19f79f0ac15f','2024-07-15','3',37.50,NULL,'pending','3/12'),('883a95a1-e29d-43ba-aaa3-7750e877847c','91dc98b8-03d1-46f9-b6eb-066469fd6665','2024-06-15','3',45.00,NULL,'pending','3/10'),('8d0eefc8-5a09-4643-b5ee-647d6c9b067a','3504cb15-bbb2-492a-844b-19f79f0ac15f','2024-08-15','4',37.50,NULL,'pending','4/12'),('8f4837c1-3016-41d7-89f8-ae7e4e79fa41','ac511962-5932-4b39-b214-d4a8c1db9857','2024-07-17','4',27.92,NULL,'pending','4/12'),('8feddc11-7f91-4319-9cb4-15bbc428bab3','f0031926-70a9-47a2-8886-ebe256f7119f','2024-06-16','2',750.00,NULL,'pending','2/2'),('90dc55e1-9840-45bb-b296-cee101a18883','1278944d-61e4-4c96-b911-d44695ae07f7','2024-04-18','0',100.00,'2024-04-18','received','Entrada'),('92c68e44-3848-45c7-b38c-fefbb047cae2','3504cb15-bbb2-492a-844b-19f79f0ac15f','2024-10-15','6',37.50,NULL,'pending','6/12'),('946777ba-8da4-4763-a386-539ceacefebb','a1f91293-4c29-410b-aac1-8d0c07c515cc','2024-08-16','4',100.00,NULL,'pending','4/10'),('9728a79b-6667-4b3c-9f05-8ffb998b37be','bf69c335-47a2-4ff9-b325-ba3aa24a3db9','2025-01-10','10',72.00,'2024-04-10T19:18:17.097Z','received','10/10'),('97ee08b4-7462-4671-9e6d-ad096ada7cc3','d3eb448a-e47f-4c17-a9f0-5d130ac25027','2024-08-15','5',250.00,NULL,'pending','5/8'),('98e5aa43-b53f-4ba5-b5eb-fcb12a61717f','46571c0d-b3af-415f-8efb-e8f900b2b2e8','2025-02-15','11',63.33,NULL,'pending','11/12'),('9984cf4d-bf2b-4c35-b726-2ad5402ac3bb','46571c0d-b3af-415f-8efb-e8f900b2b2e8','2025-03-15','12',63.33,NULL,'pending','12/12'),('9bd41bef-62b1-4899-82f9-2fe0bbef9834','03e84fac-8093-429e-a85c-1fe8358dbde0','2024-04-17','1',225.00,NULL,'pending','1/1'),('9e256de4-15a7-424d-bcbd-474886dbe448','91dc98b8-03d1-46f9-b6eb-066469fd6665','2024-12-15','9',45.00,NULL,'pending','9/10'),('a04a9045-235b-4499-bde7-30613c4132a8','ac511962-5932-4b39-b214-d4a8c1db9857','2024-04-17','1',27.92,NULL,'pending','1/12'),('a69cb106-f31a-4eb8-8770-39888e1af915','98ec5ed4-4c15-47c0-b79a-07871b1e926f','2024-05-16','1',1250.00,NULL,'pending','1/2'),('a730891e-a61f-4291-a08c-2fac5ce4ba31','46571c0d-b3af-415f-8efb-e8f900b2b2e8','2024-07-15','4',63.33,NULL,'pending','4/12'),('a8231f68-a4a2-418d-a88a-ebec775bfb37','a1f91293-4c29-410b-aac1-8d0c07c515cc','2024-10-16','6',100.00,NULL,'pending','6/10'),('a96f11c8-2a4e-4003-a0a9-693e2a92a9bd','e159e3f6-2fde-444a-b2aa-334dba46bfb7','2024-07-12','4',550.00,NULL,'pending','4/5'),('aa592c87-cb27-40d6-b6b4-5f0b8ddbc611','a1f91293-4c29-410b-aac1-8d0c07c515cc','2025-02-16','10',100.00,NULL,'pending','10/10'),('ab7f7d1a-4df4-4f4c-8cf6-a058bcba54ff','3504cb15-bbb2-492a-844b-19f79f0ac15f','2024-12-15','8',37.50,NULL,'pending','8/12'),('ab85b95a-e7ee-4a73-ac03-2845bd6a73b0','91dc98b8-03d1-46f9-b6eb-066469fd6665','2025-01-15','10',45.00,NULL,'pending','10/10'),('ac10bd47-1ae0-48e2-ac84-0335d5602309','0db4f85d-cb59-48ee-a40b-8dc66ed04027','2024-08-16','5',250.00,NULL,'pending','5/5'),('adad4782-a68b-4098-a458-826c5a913108','50863cb1-cf07-4daa-99f8-a3a225614904','2024-03-10','3',600.00,'2024-04-10T14:03:16.720Z','received','3/5'),('b6fb0292-581f-4728-b637-b19a0ca74992','50863cb1-cf07-4daa-99f8-a3a225614904','2024-05-10','5',600.00,'2024-04-10T14:03:18.880Z','received','5/5'),('b73b5946-adc5-41ba-9f7c-3a840ceef0de','1278944d-61e4-4c96-b911-d44695ae07f7','2024-04-18','1',45.83,NULL,'pending','1/12'),('bb58bb17-8770-4b67-a107-b1fe5483fae2','50863cb1-cf07-4daa-99f8-a3a225614904','2024-02-10','2',600.00,NULL,'pending','2/5'),('bd7bf33f-65e9-4d7f-b88d-562bab9c196d','1278944d-61e4-4c96-b911-d44695ae07f7','2024-06-18','3',45.83,NULL,'pending','3/12'),('bde65f6d-8bf7-46f2-9cf8-9d5c32a7b9e1','8c5937f1-45af-4b0d-a8e5-010c1796fcef','2024-01-10','1',480.14,'2024-04-11T21:31:26.138Z','received','1/5'),('c73555eb-9ec3-49eb-802d-f32c5c6fa4f0','3504cb15-bbb2-492a-844b-19f79f0ac15f','2025-03-15','11',37.50,NULL,'pending','11/12'),('cb5b67b2-a4e6-4e10-9701-708dd4843b30','','2024-04-16','0',500.00,NULL,'received','Entrada'),('cbd162ee-c80c-4263-b5b9-70923ba9a55f','f0031926-70a9-47a2-8886-ebe256f7119f','2024-04-16','0',500.00,NULL,'received','Entrada'),('cdb9c043-3996-4d58-b472-144f2c9f841e','1278944d-61e4-4c96-b911-d44695ae07f7','2025-03-18','12',45.83,NULL,'pending','12/12'),('d76c0722-446d-4928-bb5e-35957a3dce21','0db4f85d-cb59-48ee-a40b-8dc66ed04027','2024-07-16','4',250.00,NULL,'pending','4/5'),('d812e90a-eb67-4617-8c9c-38a90e2137b9','1278944d-61e4-4c96-b911-d44695ae07f7','2024-11-18','8',45.83,NULL,'pending','8/12'),('d91bd267-0879-4b82-bd8b-0f329d0acb02','a1f91293-4c29-410b-aac1-8d0c07c515cc','2024-09-16','5',100.00,NULL,'pending','5/10'),('d93e9330-afda-4b03-8811-01881d2d69c3','46571c0d-b3af-415f-8efb-e8f900b2b2e8','2024-12-15','9',63.33,NULL,'pending','9/12'),('dd63ad59-2785-40da-a59a-de627c4122b8','f0031926-70a9-47a2-8886-ebe256f7119f','2024-05-16','1',750.00,NULL,'pending','1/2'),('de1c33b8-628a-49db-878a-5dbfa16576c0','bf69c335-47a2-4ff9-b325-ba3aa24a3db9','2024-10-10','7',72.00,'2024-04-10T19:18:13.521Z','received','7/10'),('e08750d6-6736-40c5-9910-a4c0098fad9f','8c5937f1-45af-4b0d-a8e5-010c1796fcef','2024-04-10','4',480.14,NULL,'pending','4/5'),('e2d44c67-a507-4c2d-94df-9f0c084167aa','1278944d-61e4-4c96-b911-d44695ae07f7','2025-02-18','11',45.83,NULL,'pending','11/12'),('e313d13e-0653-495a-86df-0fc070ab249c','3504cb15-bbb2-492a-844b-19f79f0ac15f','2025-04-15','12',37.50,NULL,'pending','12/12'),('e55c5069-eecd-4ce7-baf7-044fe3300181','bf69c335-47a2-4ff9-b325-ba3aa24a3db9','2024-05-10','2',72.00,'2024-04-10T19:18:02.205Z','received','2/10'),('e70ff679-942c-40dd-bf1e-6abfd873048d','e159e3f6-2fde-444a-b2aa-334dba46bfb7','2024-06-12','3',550.00,NULL,'pending','3/5'),('e850d6ff-4931-40ef-9b6a-f1985d738994','0db4f85d-cb59-48ee-a40b-8dc66ed04027','2024-04-16','1',250.00,'2024-04-16T20:17:02.171Z','received','1/5'),('ea5593b1-60f8-4afa-9633-9c4e57ca371c','91dc98b8-03d1-46f9-b6eb-066469fd6665','2024-04-15','1',45.00,NULL,'pending','1/10'),('eb8071b2-f478-4fbe-94d9-1a5bc1ca2977','edbe0bfd-aaa7-4cdf-b047-e4e5fd80d4b8','2024-04-16','1',2700.00,NULL,'pending','1/1'),('ebcccc2e-66a0-4513-917c-44ee379cdf2c','a1f91293-4c29-410b-aac1-8d0c07c515cc','2024-06-16','2',100.00,NULL,'pending','2/10'),('f72b9b8e-d34b-40bb-b278-534acde1aa3f','0db4f85d-cb59-48ee-a40b-8dc66ed04027','2024-06-16','3',250.00,NULL,'pending','3/5'),('ff26bb9c-3e82-4bda-bf2c-17ce0bc16ca8','1278944d-61e4-4c96-b911-d44695ae07f7','2024-08-18','5',45.83,NULL,'pending','5/12'),('ff946961-618c-4a6b-9dff-79528d68213f','d3eb448a-e47f-4c17-a9f0-5d130ac25027','2024-04-15','1',250.00,NULL,'pending','1/8');
/*!40000 ALTER TABLE `patient_care_plan_budget_payment_historic` ENABLE KEYS */;
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

-- Dump completed on 2024-06-04  3:47:46
