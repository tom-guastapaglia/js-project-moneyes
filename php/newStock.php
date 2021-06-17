<?php

$result = new stdClass();
$result->name  =   $_POST['stockName'];
$result->symbol  =   $_POST['stockSymbol'];
$result->url    =   "https://finnhub.io/api/v1/quote?symbol=". $result->symbol ."&token=c1ksus237fktsl8cmv3g";


$actualJson = file_get_contents('../js/json/url.json');
$decodeActualJson = json_decode($actualJson, true);

$newJson = array(
	$result->name =>   $result->url );


foreach ($decodeActualJson as $item => $value){
	$newJson[$item] = $value;
}


file_put_contents('../js/json/url.json', json_encode($newJson));

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($result);
