<?php

session_start();

if(isset($_SESSION['use']))   
 {
    header("Location:home.php"); 
 }

else
{
    include 'login.html';
}
 
if(isset($_POST['login']))
{
     $user = $_POST['user'];
     $password = $_POST['password'];
 
    if(isset($_POST["user"]) && isset($_POST["password"])){

    $database = fopen('database.txt', 'r');
    $validUser = false;

    while(!feof($database)) {
        $data = fgets($database);
        $userData = explode(",",$data);
    if(trim($userData[0]) == $_POST['user'] && trim($userData[1]) == $_POST['password']) {
            $validUser=true;
            break;
        }
    }
 
    if($validUser) {
    $_SESSION['use'] = $user;
        echo 'Erfolgreich eingeloggt';  
    } else {
        echo "Benutzername oder Passwort falsch";
    }
    fclose($database);
    } else {
        include 'login.html';
    }
}
?>
<!DOCTYPE html>
<html>

<head>
<title>Login</title>
</head>
<body>

<form action="" method="post">

    <span>Benutzername</span><br>
    <input type="text" name="user"><br>
    <span>Passwort</span><br>
    <input type="password" name="password"><br>
    <input type="submit" name="login" value="LOGIN">
</form>

</body>

</html>
