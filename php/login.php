<?php

include 'db_connection.php';

$result = new stdClass();
$result->connected  =   false;
$result->message    =   "";

if (isset($_POST['username'])) {
	if ( isset( $_POST['password'] ) ) {
		$username = $_POST['username'];
		$password = $_POST['password'];


		if ( $username == 'tom' && $password == 'tom' ) {
			$result->connected = true;
			session_start();

			// Store data in session variables
			$_SESSION["loggedin"] = true;
			$_SESSION["role"] = 'admin';
			//$_SESSION["id"] = 14;
			$_SESSION["username"] = $username;

		}
	}
}


header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($result);
