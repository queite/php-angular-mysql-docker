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
  $courses[$index]['id'] = $line['id'];
  $courses[$index]['courseName'] = $line['course_name'];
  $courses[$index]['coursePrice'] = $line['course_price'];

  $index++;
}

echo json_encode(['courses' => $courses]);

// var_dump($courses);

?>