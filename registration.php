<?php
if(isset($_POST["user"]) && isset($_POST["password"]))
{
    $database=fopen("database.txt","r");
    $userFound = false;

    while(!feof($database))
    {
        $userData = fgets($database);
        $array = explode(",",$userData);
        if(trim($array[0]) == $_POST['user'])
        {
            $userFound=true;
            echo $_POST["user"] . ': Sorry, dieser Benutzer existiert schon';
            include 'registration.html';
            break;
        }
    }
    fclose($database);
 
    if (!$userFound)
    {
        $database = fopen("database.txt", "a");
        fputs($database,$_POST["user"].",".$_POST["password"]."\r\n");
        fclose($database);
        echo $_POST["user"] . ' wurde erfolgreich erstellt. \n';
    }
}
else
{
    include 'registration.html';
}
?>
<!DOCTYPE html>
<html>
<head>
<title>Registration</title>
</head>
<body>
<form action="" method="POST">
    <span>Username</span><br>
    <input type="text" name="user" ><br>
    <span>Passwort</span><br>
    <input type="password" name="password">
    <input type="submit" name="registration" value="registration">
</form>
</body>


</html>

