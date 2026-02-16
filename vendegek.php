<?php
session_start();
if (!isset($_SESSION['db_user']) || $_SESSION['db_user'] !== 'vendegnezegeto') {
    die("Nincs jogosultság");
}

$conn = new mysqli("localhost", $_SESSION['db_user'], $_SESSION['db_pass'], "gokart");
mysqli_set_charset($conn, "utf8mb4");

$q = $conn->query("SELECT nev, email FROM vvendeg");
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Gokart – Vendégek</title>
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
    </style>
</head>
<body>

<h1>Gokart – Regisztrált vendégek</h1>

<table>
<tr>
    <th>Név</th>
    <th>Email</th>
</tr>
<?php while ($r = $q->fetch_assoc()): ?>
<tr>
    <td><?= $r['nev'] ?></td>
    <td><?= $r['email'] ?></td>
</tr>
<?php endwhile; ?>
</table>

</body>
</html>
