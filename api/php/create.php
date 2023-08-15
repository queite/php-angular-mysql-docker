<?php
include('connect.php');

//  Include connection
$getData = file_get_contents('php://input');

// Extract JSON data
$extract = json_decode($getData);

// Detach json data
$courseName = $extract->courseName;
$coursePrice = $extract->coursePrice;

// SQL
$sql = "INSERT INTO courses (course_name, course_price) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
if (!$stmt) {
    die('Error in preparing SQL statement: ' . $conn->error);
}

$stmt->bind_param('sd', $courseName, $coursePrice); // 'sd' stands for string and double
$result = $stmt->execute();

//Export data
if ($result) {
    $course = array(
        'courseName' => $courseName,
        'coursePrice' => $coursePrice
    );
    echo json_encode(array('course' => $course));
} else {
    http_response_code(500);
}

?>