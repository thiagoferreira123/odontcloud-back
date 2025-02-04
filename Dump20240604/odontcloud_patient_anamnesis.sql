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
-- Table structure for table `patient_anamnesis`
--

DROP TABLE IF EXISTS `patient_anamnesis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_anamnesis` (
  `anamnesis_id` varchar(255) NOT NULL,
  `anamnesis_patient_id` varchar(255) NOT NULL,
  `anamnesis_date_creation` varchar(255) DEFAULT NULL,
  `anamnesis_status` varchar(255) DEFAULT NULL,
  `anamnesis_text` text,
  `anamnesis_identification` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`anamnesis_id`),
  UNIQUE KEY `anamnesis_id_UNIQUE` (`anamnesis_id`),
  KEY `fk_anamnesis_patient_idx` (`anamnesis_patient_id`),
  CONSTRAINT `fk_anamnesis_patient` FOREIGN KEY (`anamnesis_patient_id`) REFERENCES `patient` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_anamnesis`
--

LOCK TABLES `patient_anamnesis` WRITE;
/*!40000 ALTER TABLE `patient_anamnesis` DISABLE KEYS */;
INSERT INTO `patient_anamnesis` VALUES ('a051a91f-efeb-4a50-a49a-f6b90b604e6e','191eda35-904c-4c7d-a820-945e8a05ca40','2024-04-24T12:46:31.320Z',NULL,'<p data-pm-slice=\"0 0 []\"><strong>Finalidade da visita</strong><br>Coment&aacute;rios:</p>\n<p><strong>Rotina di&aacute;ria:</strong></p>\n<p>H&aacute; alguma alergia conhecida a medicamentos?</p>\n<p>Houve alguma rea&ccedil;&atilde;o adversa &agrave; anestesia local?</p>\n<p>Est&aacute; sob cuidados m&eacute;dicos atualmente? Se afirmativo, detalhe. Utiliza algum rem&eacute;dio regularmente?</p>\n<p>Encontra-se em per&iacute;odo gestacional? Caso positivo, qual a dura&ccedil;&atilde;o?</p>\n<p>Coment&aacute;rios:</p>\n<p><strong>Estilo de vida</strong>:<br>Consome tabaco? Se sim, quantos por dia?</p>\n<p>Consome bebidas alco&oacute;licas? Com que frequ&ecirc;ncia?</p>\n<p>Realiza atividades f&iacute;sicas? Com que frequ&ecirc;ncia?</p>\n<p>Coment&aacute;rios:</p>\n<p><strong>Hist&oacute;rico m&eacute;dico:</strong></p>\n<p>Existe diagn&oacute;stico de diabetes para voc&ecirc; ou na sua fam&iacute;lia? Se sim, por favor, especifique.</p>\n<p>Como est&aacute; sua press&atilde;o arterial?</p>\n<p>Existem registros de doen&ccedil;as card&iacute;acas em voc&ecirc; ou na sua fam&iacute;lia?</p>\n<p>Experimenta dores de cabe&ccedil;a, na face, ouvidos ou articula&ccedil;&otilde;es regularmente?</p>\n<p>J&aacute; sofreu desmaios, possui condi&ccedil;&otilde;es neurol&oacute;gicas como epilepsia ou crises convulsivas?</p>\n<p>H&aacute; outras condi&ccedil;&otilde;es de sa&uacute;de n&atilde;o mencionadas que considere relevante informar?</p>\n<p>Coment&aacute;rios:</p>\n<p><strong>Detalhes espec&iacute;ficos:</strong></p>\n<p>Quando ocorreu sua &uacute;ltima consulta ou tratamento dent&aacute;rio?</p>\n<p>H&aacute; sensibilidade dental?</p>\n<p>Possui o h&aacute;bito de ranger ou apertar os dentes?</p>\n<p>Sua gengiva sangra com frequ&ecirc;ncia?</p>\n<p>Coment&aacute;rios:</p>','teste');
/*!40000 ALTER TABLE `patient_anamnesis` ENABLE KEYS */;
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

-- Dump completed on 2024-06-04  3:46:43
