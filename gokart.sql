-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Ápr 21. 18:27
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
-- Tábla szerkezet ehhez a táblához `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `foglalasok`
--

CREATE TABLE `foglalasok` (
  `foglalas_ideje` datetime NOT NULL,
  `foglalt_idopont` datetime NOT NULL,
  `csomag` int(11) NOT NULL,
  `resztvevok` tinyint(2) NOT NULL,
  `foglalo_id` int(100) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `nev` varchar(100) NOT NULL,
  `telefon` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `foglalasok`
--

INSERT INTO `foglalasok` (`foglalas_ideje`, `foglalt_idopont`, `csomag`, `resztvevok`, `foglalo_id`, `id`, `nev`, `telefon`, `email`) VALUES
('2026-03-07 18:50:43', '2026-03-09 18:50:43', 0, 0, 1, 1, '', '', ''),
('2026-03-07 18:04:37', '2026-03-10 18:50:43', 0, 0, 2, 2, '', '', ''),
('2026-03-07 19:07:25', '2026-03-11 18:50:43', 0, 0, 3, 3, '', '', ''),
('2026-03-07 19:15:05', '2026-03-11 18:50:43', 1, 10, 4, 4, '', '', ''),
('2026-04-19 19:37:58', '2026-03-11 18:50:43', 1, 2, 5, 5, '', '', ''),
('2026-04-19 20:03:40', '2026-03-11 18:50:43', 1, 2, NULL, 6, 'Horváth Anna', '0613456789', 'anna.horvath@example.hu'),
('2026-04-19 20:04:20', '2026-03-11 18:50:43', 1, 2, 4, 7, 'Horváth Anna', '0613456789', 'anna.horvath@example.hu'),
('2026-04-19 20:04:55', '2026-03-11 18:50:43', 1, 2, NULL, 8, 'Horváth Anna', '06134567890', 'anna.horvath@example.hu');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `koridok`
--

CREATE TABLE `koridok` (
  `id` int(11) NOT NULL,
  `futott_korido` decimal(6,3) NOT NULL,
  `datum` date NOT NULL,
  `kocsi_rajtszama` int(11) NOT NULL,
  `userid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `koridok`
--

INSERT INTO `koridok` (`id`, `futott_korido`, `datum`, `kocsi_rajtszama`, `userid`) VALUES
(1, 25.381, '2025-03-08', 3, 2),
(2, 26.104, '2025-03-09', 7, 4),
(3, 27.992, '2025-03-22', 1, 3),
(4, 24.887, '2025-03-23', 5, 4),
(5, 25.114, '2025-04-05', 2, 1),
(6, 26.443, '2025-04-06', 6, 1),
(7, 24.998, '2025-04-19', 8, 1),
(8, 27.201, '2025-04-20', 4, 3),
(9, 25.777, '2025-05-03', 1, 3),
(10, 26.888, '2025-05-04', 7, 3),
(11, 24.321, '2025-05-17', 5, 5),
(12, 27.654, '2025-05-18', 2, 2),
(13, 24.991, '2025-06-20', 3, 1),
(14, 25.448, '2025-06-21', 6, 1),
(15, 26.004, '2025-06-22', 4, 5),
(16, 30.552, '2025-06-24', 0, 4),
(17, 33.221, '2025-06-25', 0, 3),
(18, 31.987, '2025-06-26', 0, 2),
(19, 34.102, '2025-06-27', 0, 2),
(20, 24.773, '2025-07-01', 8, 3),
(21, 25.884, '2025-07-02', 1, 5),
(22, 26.199, '2025-07-03', 6, 1),
(23, 30.443, '2025-07-04', 9, 5),
(24, 32.987, '2025-07-05', 9, 2),
(25, 34.221, '2025-07-06', 9, 3),
(26, 27.441, '2025-07-08', 2, 5),
(27, 24.998, '2025-07-09', 5, 4),
(28, 26.554, '2025-07-10', 7, 4),
(29, 31.004, '2025-07-11', 0, 5),
(30, 33.765, '2025-07-12', 0, 1),
(31, 30.882, '2025-07-13', 9, 1),
(32, 24.664, '2025-08-01', 4, 5),
(33, 25.772, '2025-08-02', 6, 5),
(34, 26.330, '2025-08-03', 1, 2),
(35, 31.221, '2025-08-05', 9, 2),
(36, 34.998, '2025-08-06', 0, 5),
(37, 30.887, '2025-08-07', 9, 2),
(38, 27.004, '2025-08-08', 8, 5),
(39, 25.331, '2025-08-09', 3, 3),
(40, 26.881, '2025-08-10', 2, 3),
(41, 25.118, '2025-09-06', 7, 2),
(42, 26.774, '2025-09-07', 1, 5),
(43, 30.445, '2025-09-20', 9, 3),
(44, 33.110, '2025-09-21', 0, 4);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_03_07_172412_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `vendeg`
--

CREATE TABLE `vendeg` (
  `id` int(11) NOT NULL,
  `nev` varchar(100) NOT NULL,
  `telefon` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `jelszo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `vendeg`
--

INSERT INTO `vendeg` (`id`, `nev`, `telefon`, `email`, `jelszo`) VALUES
(1, 'Kovács Ádám', '0612345678', 'adam.kovacs@example.hu', 'jelszo123'),
(2, 'Nagy Eszter', '0619876543', 'eszter.nagy@example.hu', 'jelszo123'),
(3, 'Tóth Péter', '0612345987', 'peter.toth@example.hu', 'jelszo123'),
(4, 'Horváth Anna', '0613456789', 'anna.horvath@example.hu', 'jelszo123'),
(5, 'Molnár László', '0614567890', 'laszlo.molnar@example.hu', 'jelszo123'),
(6, 'Farkas Mária', '0615678901', 'maria.farkas@example.hu', 'jelszo123'),
(7, 'Kiss Gábor', '0616789012', 'gabor.kiss@example.hu', 'jelszo123'),
(8, 'Szabó Zsuzsanna', '0617890123', 'zsuzsanna.szabo@example.hu', 'jelszo123'),
(9, 'Varga Dániel', '0618901234', 'daniel.varga@example.hu', 'jelszo123'),
(10, 'Papp Júlia', '0619012345', 'julia.papp@example.hu', 'jelszo123'),
(11, 'Balogh Tamás', '0611122334', 'tamas.balogh@example.hu', 'jelszo123'),
(12, 'Kerekes Réka', '0612233445', 'reka.kerekes@example.hu', 'jelszo123'),
(13, 'Mészáros András', '0613344556', 'andras.meszaros@example.hu', 'jelszo123'),
(14, 'Rácz Erika', '0614455667', 'erika.racz@example.hu', 'jelszo123'),
(15, 'Németh Lilla', '0615566778', 'lilla.nemeth@example.hu', 'jelszo123'),
(16, 'Martin Novák', '+421912345678', 'martin.novak@example.sk', 'jelszo123'),
(17, 'Lucia Kováčová', '+421987654321', 'lucia.kovacova@example.sk', 'jelszo123'),
(18, 'Peter Horváth', '+421901234567', 'peter.horvath@example.sk', 'jelszo123'),
(19, 'Hans Müller', '+4915123456789', 'hans.mueller@example.de', 'jelszo123'),
(20, 'Anna Schmidt', '+4915123456790', 'anna.schmidt@example.de', 'jelszo123'),
(21, 'Lukas Fischer', '+4915123456791', 'lukas.fischer@example.de', 'jelszo123'),
(22, 'Ion Popescu', '+40721234567', 'ion.popescu@example.ro', 'jelszo123'),
(23, 'Maria Ionescu', '+40722345678', 'maria.ionescu@example.ro', 'jelszo123'),
(24, 'Andrei Georgescu', '+40723456789', 'andrei.georgescu@example.ro', 'jelszo123'),
(25, 'Elena Vasilescu', '+40724567890', 'elena.vasilescu@example.ro', 'jelszo123'),
(26, 'pelda jozsef', '0670674200', 'joska@pelda.hu', 'jelszo123'),
(27, 'Teszt Bela', '06501112233', 'bela.teszt@example.hu', 'jelszo123');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_expiration_index` (`expiration`);

--
-- A tábla indexei `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_locks_expiration_index` (`expiration`);

--
-- A tábla indexei `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- A tábla indexei `foglalasok`
--
ALTER TABLE `foglalasok`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- A tábla indexei `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `koridok`
--
ALTER TABLE `koridok`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- A tábla indexei `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  ADD KEY `personal_access_tokens_expires_at_index` (`expires_at`);

--
-- A tábla indexei `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- A tábla indexei `vendeg`
--
ALTER TABLE `vendeg`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `foglalasok`
--
ALTER TABLE `foglalasok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT a táblához `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `koridok`
--
ALTER TABLE `koridok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT a táblához `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `vendeg`
--
ALTER TABLE `vendeg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
