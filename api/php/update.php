<?php
include('connect.php');

//  Include connection
$getData = file_get_contents('php://input');

// Extract JSON data
$extract = json_decode($getData);

// Detach json data
$id = $extract->courses->id;
$courseName = $extract->courses->courseName;
$coursePrice = $extract->courses->coursePrice;

// SQL
$sql = 'UPDATE courses SET course_name="$courseName", course_price=$coursePrice WHERE id=$id';
mysqli_query($conn, $sql);

//Export data
$course = [
  'id' = $id;
  'courseName' = $courseName;
  'coursePrice' = $coursePrice;
]

json_encode(['course'] => $course)
?>