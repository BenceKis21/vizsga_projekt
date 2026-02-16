<?php
session_start();

if (!isset($_SESSION['db_user'])) {
    header("Location: login.php");
    exit;
}

$conn = new mysqli(
    "localhost",
    $_SESSION['db_user'],
    $_SESSION['db_pass'],
    "gokart"
);

if ($conn->connect_error) {
    die("Nincs jogosultság az adatbázishoz");
}

mysqli_set_charset($conn, "utf8mb4");
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Gokart – Köridő toplista</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background:#f4f4f4;
        }
        h1, h2 {
            text-align:center;
            margin-top:40px;
        }
        table {
            border-collapse: collapse;
            width: 70%;
            margin: 20px auto;
            background: white;
        }
        th, td {
            border: 1px solid #ccc;
            padding: 10px;
            text-align: center;
        }
        th {
            background: #222;
            color: white;
        }
        tr:nth-child(even) {
            background:#f2f2f2;
        }
        .stat {
            width: 50%;
            margin: 20px auto;
            background: white;
            padding: 20px;
            border: 1px solid #ccc;
        }
        .stat p {
            font-size: 18px;
        }
        .menu {
            text-align:center;
            margin-top:20px;
        }
    </style>
</head>
<body>

<h1>Gokart köridő toplista</h1>

<div class="menu">
    <a href="index.php">Köridők</a> |
    <a href="foglalasok.php">Foglalások</a> |
    <a href="vendegek.php">Vendégek</a>
</div>

<h2>TOP 10 legjobb köridő</h2>

<?php
$top = $conn->query("
    SELECT futott_korido, datum, kocsi_rajtszama
    FROM vkoridok
    ORDER BY futott_korido ASC
    LIMIT 10
");

if (!$top) {
    die("Nincs jogosultság a köridők megtekintéséhez");
}
?>

<table>
<tr>
    <th>Helyezés</th>
    <th>Köridő (mp)</th>
    <th>Dátum</th>
    <th>Kocsi rajtszám</th>
</tr>

<?php
$hely = 1;
while ($row = $top->fetch_assoc()) {
    echo "<tr>
            <td>{$hely}.</td>
            <td>{$row['futott_korido']}</td>
            <td>{$row['datum']}</td>
            <td>{$row['kocsi_rajtszama']}</td>
          </tr>";
    $hely++;
}
?>
</table>

<h2>Statisztika</h2>

<div class="stat">
<?php
$stat = $conn->query("
    SELECT 
        COUNT(*) AS osszes,
        MIN(futott_korido) AS rekord,
        MAX(futott_korido) AS leglassabb,
        ROUND(AVG(futott_korido), 3) AS atlag
    FROM vkoridok
")->fetch_assoc();

echo "<p>Futott körök száma: <b>{$stat['osszes']}</b></p>";
echo "<p>Rekord köridő: <b>{$stat['rekord']} mp</b></p>";
echo "<p>Leglassabb kör: <b>{$stat['leglassabb']} mp</b></p>";
echo "<p>Átlag köridő: <b>{$stat['atlag']} mp</b></p>";
?>
</div>

</body>
</html>

<?php $conn->close(); ?>
