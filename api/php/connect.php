<?php

$servername = "mysql";
$database = "api";
$username = "root";
$password = "root";

// Connection
$conn = mysqli_connect($servername, $username, $password, $database);
if (!$conn) {
    exit('Connection failed: '.mysqli_connect_error().PHP_EOL);
}

// Special characters
mysqli_set_charset($conn, 'utf-8');

?>
