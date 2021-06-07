<?php
session_start();
if ( isset( $_SESSION["loggedin"] ) && $_SESSION["loggedin"] === true ){
	$isconnected = true;
}
else {
	$isconnected = false;
}

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($isconnected);
