<?php
include('connect.php');

// Include connection
$getData = file_get_contents('php://input');

// Extract JSON data
$extract = json_decode($getData);

// Detach json data
$id = $extract->id;
$courseName = $extract->courseName;
$coursePrice = $extract->coursePrice;

// SQL
$sql = "UPDATE courses SET course_name='$courseName', course_price=$coursePrice WHERE id=$id";
mysqli_query($conn, $sql);

// Export data
$course = array(
  'id' => $id,
  'courseName' => $courseName,
  'coursePrice' => $coursePrice
);

echo json_encode(array('course' => $course));
?>
