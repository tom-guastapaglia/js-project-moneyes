<?php
/**
 * Connection à la base de données en procédural
 */

//taken from https://www.tutorialrepublic.com/php-tutorial/php-mysql-login-system.php

$host_name = 'db5002703126.hosting-data.io';
$database = 'dbs2152200';
$user_name = 'dbu1650914';
$password = 'Moneyesdb83**';
$db = null;

try {
	$db = new PDO("mysql:host=$host_name; dbname=$database;", $user_name, $password);
} catch (PDOException $e) {
	echo "Erreur!: " . $e->getMessage() . "<br/>";
	die();
}