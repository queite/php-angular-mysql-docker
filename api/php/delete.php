<?php
include('connect.php');

//  Include connection
$getData = file_get_contents('php://input');

// Extract JSON data
$extract = json_decode($getData);

// Detach json data
$id = $extract->courses->id;

// SQL
$sql = 'DELETE FROM courses  WHERE id=$id';
mysqli_query($conn, $sql);

?>