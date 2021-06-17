<?php
$updatedData = $_POST['newData'];
// please validate the data you are expecting for security
file_put_contents('/js/json/url.json', $updatedData);
//return the url to the saved file