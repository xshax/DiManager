SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `tracklist`
--
CREATE DATABASE `tracklist` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `tracklist`;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `createdAt` timestamp,
  `updatedAt` timestamp,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tracks`
--

CREATE TABLE IF NOT EXISTS `tracks` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `category_id` smallint(5) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `locstart` varchar(100) DEFAULT NULL,
  `locend` varchar(100) DEFAULT NULL,
  `rating` varchar(100) DEFAULT NULL,
  `createdAt` timestamp,
  `updatedAt` timestamp,
  PRIMARY KEY (`id`),
  KEY `id_tracks` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;



