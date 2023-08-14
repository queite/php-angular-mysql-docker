<?php

include("connect.php");

$sql = "SELECT * FROM courses";

$execute = mysqli_query($conn, $sql);

if (!$execute) {
    exit('Query failed: '.mysqli_error($conn).PHP_EOL);
}

$courses = [];
$index = 0;

while($line = mysqli_fetch_assoc($execute)) {
  $courses[] = [
    'id' => $line['id'],
    'courseName' => $line['course_name'],
    'coursePrice' => $line['course_price']
  ];

  $index++;
}

json_encode(['courses' => $courses]);

// var_dump($courses);

?>