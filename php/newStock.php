<?php

$result = new stdClass();
$result->name  =   $_POST['stockName'];
$result->symbol  =   $_POST['stockSymbol'];
$result->url    =   "https://finnhub.io/api/v1/quote?symbol=". $result->symbol ."&token=c1ksus237fktsl8cmv3g";

$newLine = array(
	$result->name =>   $result->url );

file_put_contents('../js/json/url.json', json_encode($newLine));

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($result);
