-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2021 at 05:01 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_exam`
--

-- --------------------------------------------------------

--
-- Table structure for table `familytree`
--

CREATE TABLE `familytree` (
  `FamilyID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `relationship` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `familytree`
--

INSERT INTO `familytree` (`FamilyID`, `name`, `relationship`) VALUES
(6, 'Grandpa', 'Grand father'),
(7, 'Grand mother', 'Grand mother');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `familytree`
--
ALTER TABLE `familytree`
  ADD PRIMARY KEY (`FamilyID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `familytree`
--
ALTER TABLE `familytree`
  MODIFY `FamilyID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
