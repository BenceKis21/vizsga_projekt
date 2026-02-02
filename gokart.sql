-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Feb 02. 12:01
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `gokart`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `foglalasok`
--

CREATE TABLE `foglalasok` (
  `foglalas_ideje` date NOT NULL,
  `foglalt_idopont` date NOT NULL,
  `foglalo_neve` varchar(100) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `koridok`
--

CREATE TABLE `koridok` (
  `id` int(11) NOT NULL,
  `futott_korido` decimal(6,3) NOT NULL,
  `datum` date NOT NULL,
  `kocsi_rajtszama` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `koridok`
--

INSERT INTO `koridok` (`id`, `futott_korido`, `datum`, `kocsi_rajtszama`) VALUES
(1, 25.381, '2025-03-08', 3),
(2, 26.104, '2025-03-09', 7),
(3, 27.992, '2025-03-22', 1),
(4, 24.887, '2025-03-23', 5),
(5, 25.114, '2025-04-05', 2),
(6, 26.443, '2025-04-06', 6),
(7, 24.998, '2025-04-19', 8),
(8, 27.201, '2025-04-20', 4),
(9, 25.777, '2025-05-03', 1),
(10, 26.888, '2025-05-04', 7),
(11, 24.321, '2025-05-17', 5),
(12, 27.654, '2025-05-18', 2),
(13, 24.991, '2025-06-20', 3),
(14, 25.448, '2025-06-21', 6),
(15, 26.004, '2025-06-22', 4),
(16, 30.552, '2025-06-24', 0),
(17, 33.221, '2025-06-25', 0),
(18, 31.987, '2025-06-26', 0),
(19, 34.102, '2025-06-27', 0),
(20, 24.773, '2025-07-01', 8),
(21, 25.884, '2025-07-02', 1),
(22, 26.199, '2025-07-03', 6),
(23, 30.443, '2025-07-04', 9),
(24, 32.987, '2025-07-05', 9),
(25, 34.221, '2025-07-06', 9),
(26, 27.441, '2025-07-08', 2),
(27, 24.998, '2025-07-09', 5),
(28, 26.554, '2025-07-10', 7),
(29, 31.004, '2025-07-11', 0),
(30, 33.765, '2025-07-12', 0),
(31, 30.882, '2025-07-13', 9),
(32, 24.664, '2025-08-01', 4),
(33, 25.772, '2025-08-02', 6),
(34, 26.330, '2025-08-03', 1),
(35, 31.221, '2025-08-05', 9),
(36, 34.998, '2025-08-06', 0),
(37, 30.887, '2025-08-07', 9),
(38, 27.004, '2025-08-08', 8),
(39, 25.331, '2025-08-09', 3),
(40, 26.881, '2025-08-10', 2),
(41, 25.118, '2025-09-06', 7),
(42, 26.774, '2025-09-07', 1),
(43, 30.445, '2025-09-20', 9),
(44, 33.110, '2025-09-21', 0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `vendeg`
--

CREATE TABLE `vendeg` (
  `id` int(11) NOT NULL,
  `nev` varchar(100) NOT NULL,
  `telefon` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `vendeg`
--

INSERT INTO `vendeg` (`id`, `nev`, `telefon`, `email`) VALUES
(1, 'Kovács Ádám', '0612345678', 'adam.kovacs@example.hu'),
(2, 'Nagy Eszter', '0619876543', 'eszter.nagy@example.hu'),
(3, 'Tóth Péter', '0612345987', 'peter.toth@example.hu'),
(4, 'Horváth Anna', '0613456789', 'anna.horvath@example.hu'),
(5, 'Molnár László', '0614567890', 'laszlo.molnar@example.hu'),
(6, 'Farkas Mária', '0615678901', 'maria.farkas@example.hu'),
(7, 'Kiss Gábor', '0616789012', 'gabor.kiss@example.hu'),
(8, 'Szabó Zsuzsanna', '0617890123', 'zsuzsanna.szabo@example.hu'),
(9, 'Varga Dániel', '0618901234', 'daniel.varga@example.hu'),
(10, 'Papp Júlia', '0619012345', 'julia.papp@example.hu'),
(11, 'Balogh Tamás', '0611122334', 'tamas.balogh@example.hu'),
(12, 'Kerekes Réka', '0612233445', 'reka.kerekes@example.hu'),
(13, 'Mészáros András', '0613344556', 'andras.meszaros@example.hu'),
(14, 'Rácz Erika', '0614455667', 'erika.racz@example.hu'),
(15, 'Németh Lilla', '0615566778', 'lilla.nemeth@example.hu'),
(16, 'Martin Novák', '+421912345678', 'martin.novak@example.sk'),
(17, 'Lucia Kováčová', '+421987654321', 'lucia.kovacova@example.sk'),
(18, 'Peter Horváth', '+421901234567', 'peter.horvath@example.sk'),
(19, 'Hans Müller', '+4915123456789', 'hans.mueller@example.de'),
(20, 'Anna Schmidt', '+4915123456790', 'anna.schmidt@example.de'),
(21, 'Lukas Fischer', '+4915123456791', 'lukas.fischer@example.de'),
(22, 'Ion Popescu', '+40721234567', 'ion.popescu@example.ro'),
(23, 'Maria Ionescu', '+40722345678', 'maria.ionescu@example.ro'),
(24, 'Andrei Georgescu', '+40723456789', 'andrei.georgescu@example.ro'),
(25, 'Elena Vasilescu', '+40724567890', 'elena.vasilescu@example.ro');

-- --------------------------------------------------------

--
-- A nézet helyettes szerkezete `vfoglalasok`
-- (Lásd alább az aktuális nézetet)
--
CREATE TABLE `vfoglalasok` (
`foglalas_ideje` date
,`foglalt_idopont` date
,`foglalo_neve` varchar(100)
,`id` int(11)
);

-- --------------------------------------------------------

--
-- A nézet helyettes szerkezete `vkoridok`
-- (Lásd alább az aktuális nézetet)
--
CREATE TABLE `vkoridok` (
`id` int(11)
,`futott_korido` decimal(6,3)
,`datum` date
,`kocsi_rajtszama` int(11)
);

-- --------------------------------------------------------

--
-- A nézet helyettes szerkezete `vvendeg`
-- (Lásd alább az aktuális nézetet)
--
CREATE TABLE `vvendeg` (
`id` int(11)
,`nev` varchar(100)
,`telefon` varchar(30)
,`email` varchar(100)
);

-- --------------------------------------------------------

--
-- Nézet szerkezete `vfoglalasok`
--
DROP TABLE IF EXISTS `vfoglalasok`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vfoglalasok`  AS SELECT `foglalasok`.`foglalas_ideje` AS `foglalas_ideje`, `foglalasok`.`foglalt_idopont` AS `foglalt_idopont`, `foglalasok`.`foglalo_neve` AS `foglalo_neve`, `foglalasok`.`id` AS `id` FROM `foglalasok` ;

-- --------------------------------------------------------

--
-- Nézet szerkezete `vkoridok`
--
DROP TABLE IF EXISTS `vkoridok`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vkoridok`  AS SELECT `koridok`.`id` AS `id`, `koridok`.`futott_korido` AS `futott_korido`, `koridok`.`datum` AS `datum`, `koridok`.`kocsi_rajtszama` AS `kocsi_rajtszama` FROM `koridok` ;

-- --------------------------------------------------------

--
-- Nézet szerkezete `vvendeg`
--
DROP TABLE IF EXISTS `vvendeg`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vvendeg`  AS SELECT `vendeg`.`id` AS `id`, `vendeg`.`nev` AS `nev`, `vendeg`.`telefon` AS `telefon`, `vendeg`.`email` AS `email` FROM `vendeg` ;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `foglalasok`
--
ALTER TABLE `foglalasok`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `koridok`
--
ALTER TABLE `koridok`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `vendeg`
--
ALTER TABLE `vendeg`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `foglalasok`
--
ALTER TABLE `foglalasok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `koridok`
--
ALTER TABLE `koridok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT a táblához `vendeg`
--
ALTER TABLE `vendeg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
