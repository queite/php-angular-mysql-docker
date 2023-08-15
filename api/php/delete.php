<?php
include('connect.php');

// Extract query parameters
$id = $_GET['id'];

// SQL
$sql = "DELETE FROM courses WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('i', $id);
$result = $stmt->execute();

if ($result) {
    $response = array("message" => "Course deleted successfully");
    http_response_code(200);
} else {
    $response = array("message" => "Error deleting course");
    http_response_code(500);
}

echo json_encode($response);
?>
