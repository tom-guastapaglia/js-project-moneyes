<?php
/**
 * Ajouter un nouvel utilisateur à la base de données
 *
 */

include ('db_connection.php');
session_start();

//Taken from https://www.tutorialspoint.com/php/php_mysql_login.htm
if($_SERVER["REQUEST_METHOD"] == "POST") {
	// username and password sent from form

	$myusername = mysqli_real_escape_string(link,$_POST['username']);
	$mypassword = mysqli_real_escape_string(link,$_POST['password']);

	$sql = "SELECT id FROM users WHERE username = '$myusername' and password = '$mypassword'";
	$result = mysqli_query(link,$sql);
	$row = mysqli_fetch_array($result,MYSQLI_ASSOC);
	$active = $row['active'];

	$count = mysqli_num_rows($result);

	// If result matched $myusername and $mypassword, table row must be 1 row

	if($count == 1) {
		$_SESSION['login_user'] = $myusername;

		header("location: welcome.php");
	}else {
		$error = "Your Login Name or Password is invalid";
	}
}

$result = array(
	'username'  =>  $username,
	'password'  =>  md5($password),
);

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($result);