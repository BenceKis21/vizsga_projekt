<?php
session_start();

if ($_POST) {
    $u = $_POST['user'];
    $p = $_POST['pass'];

    
    $engedett = [
        'koridonezegeto'   => 'korido',
        'foglalasnezegeto' => 'foglalas',
        'vendegnezegeto'   => 'vendeg'
    ];

    if (!isset($engedett[$u]) || $engedett[$u] !== $p) {
        $hiba = "Hibás belépés";
    } else {
        
        $c = @new mysqli("localhost", $u, $p, "gokart");
        if ($c->connect_error) {
            $hiba = "Adatbázis hiba";
        } else {
            $_SESSION['db_user'] = $u;
            $_SESSION['db_pass'] = $p;

            
            if ($u === 'koridonezegeto') header("Location: index.php");
            if ($u === 'foglalasnezegeto') header("Location: foglalasok.php");
            if ($u === 'vendegnezegeto') header("Location: vendegek.php");
            exit;
        }
    }
}
?>
<form method="post">
    <?php if (!empty($hiba)) echo "<p style='color:red'>$hiba</p>"; ?>
    <input name="user" placeholder="Felhasználó"><br>
    <input type="password" name="pass" placeholder="Jelszó"><br>
    <button>Belépés</button>
</form>
