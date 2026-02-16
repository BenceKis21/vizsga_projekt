<?php
session_start();
if (!isset($_SESSION['db_user']) || $_SESSION['db_user'] !== 'foglalasnezegeto') {
    die("Nincs jogosultság");
}

$conn = new mysqli("localhost", $_SESSION['db_user'], $_SESSION['db_pass'], "gokart");
mysqli_set_charset($conn, "utf8mb4");

$q = $conn->query("SELECT * FROM vfoglalasok");
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Gokart – Foglalások</title>
    <style>
        body { font-family: Arial, sans-serif; background:#f4f4f4; }
        h1, h2 { text-align:center; margin-top:40px; }
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
        th { background: #222; color: white; }
        tr:nth-child(even) { background:#f2f2f2; }
        .stat {
            width: 50%;
            margin: 20px auto;
            background: white;
            padding: 20px;
            border: 1px solid #ccc;
            text-align:center;
        }
    </style>
</head>
<body>

<h1>Gokart – Foglalások</h1>

<?php if ($q->num_rows == 0): ?>
    <div class="stat">
        <p><b>Nincs jelenleg foglalás</b></p>
    </div>
<?php else: ?>
<table>
<tr>
    <th>Foglalás ideje</th>
    <th>Foglalt időpont</th>
    <th>Foglaló neve</th>
</tr>
<?php while ($r = $q->fetch_assoc()): ?>
<tr>
    <td><?= $r['foglalas_ideje'] ?></td>
    <td><?= $r['foglalt_idopont'] ?></td>
    <td><?= $r['foglalo_neve'] ?></td>
</tr>
<?php endwhile; ?>
</table>
<?php endif; ?>

</body>
</html>
