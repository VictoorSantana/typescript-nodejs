-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	5.7.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_access`
--

DROP TABLE IF EXISTS `tb_access`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_access` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `endpoint` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_access`
--

LOCK TABLES `tb_access` WRITE;
/*!40000 ALTER TABLE `tb_access` DISABLE KEYS */;
INSERT INTO `tb_access` VALUES (1,1,'listar user'),(2,1,'destacar user'),(3,1,'listar folder'),(4,1,'destacar folder'),(5,1,'destacar access'),(6,1,'adicionar access'),(7,1,'adicionar folder'),(8,1,'listar access'),(9,1,'listar file'),(10,1,'destacar file'),(11,1,'adicionar file'),(12,1,'attach'),(13,1,'atualizar user'),(14,1,'adicionar section'),(15,1,'listar section'),(16,1,'adicionar article'),(17,1,'destacar article'),(18,1,'listar article'),(19,1,'atualizar article'),(20,1,'destacar section'),(21,1,'filtrar article'),(22,1,'filtrar access'),(23,1,'autorizar movie'),(24,1,'adicionar image');
/*!40000 ALTER TABLE `tb_access` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_category`
--

DROP TABLE IF EXISTS `tb_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_category`
--

LOCK TABLES `tb_category` WRITE;
/*!40000 ALTER TABLE `tb_category` DISABLE KEYS */;
INSERT INTO `tb_category` VALUES (1,'ação');
/*!40000 ALTER TABLE `tb_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_images`
--

DROP TABLE IF EXISTS `tb_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hash` varchar(45) NOT NULL,
  `type` varchar(3) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `hash_UNIQUE` (`hash`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_images`
--

LOCK TABLES `tb_images` WRITE;
/*!40000 ALTER TABLE `tb_images` DISABLE KEYS */;
INSERT INTO `tb_images` VALUES (1,'1620348630896','png','0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,'1620350097462','png','0000-00-00 00:00:00','0000-00-00 00:00:00'),(3,'1620354792976','png','0000-00-00 00:00:00','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `tb_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_movies`
--

DROP TABLE IF EXISTS `tb_movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(80) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `stars` int(11) DEFAULT '1',
  `id_category` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `running` datetime DEFAULT CURRENT_TIMESTAMP,
  `id_image` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_movies`
--

LOCK TABLES `tb_movies` WRITE;
/*!40000 ALTER TABLE `tb_movies` DISABLE KEYS */;
INSERT INTO `tb_movies` VALUES (1,'Vingadores','Filme de herois',5,1,1,'2021-05-06 19:52:16',0),(2,'Invencivel','Suspense',5,1,1,'2021-05-06 19:52:16',0),(3,'Invencivel 2','Suspense',5,1,0,'2021-05-06 19:52:16',0),(4,'Invencivel 2','Suspense',5,1,0,'2021-05-06 19:52:16',0);
/*!40000 ALTER TABLE `tb_movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_users`
--

DROP TABLE IF EXISTS `tb_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(30) NOT NULL,
  `name` varchar(40) NOT NULL,
  `id_file` int(11) DEFAULT NULL,
  `password` varchar(20) NOT NULL,
  `id_status` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_users`
--

LOCK TABLES `tb_users` WRITE;
/*!40000 ALTER TABLE `tb_users` DISABLE KEYS */;
INSERT INTO `tb_users` VALUES (1,'claudio@email.com','Claudio',1,'asd123',1),(2,'adalberto@email.com','Adalberto',2,'123asd',1);
/*!40000 ALTER TABLE `tb_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-06 22:38:01
