<?php
include('connect.php');

//  Include connection
$getData = file_get_contents('php://input');

// Extract JSON data
$extract = json_decode($getData);

// Detach json data
$courseName = $extract->courses->courseName;
$coursePrice = $extract->courses->coursePrice;

// SQL
$sql = 'INSERT into cursos (course_name, course_price) VALUES ("$courseName", $coursePrice)';
mysqli_query($conn, $sql);

//Export data
$course = [
  'courseName' = $courseName;
  'coursePrice' = $coursePrice;
]

json_encode(['course'] => $course)
?>