<?php
// Connect to MySQL (replace with your actual database credentials)
$conn = new mysqli("your_server_name", "your_username", "your_password", "SampleDatabase");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the search query from the HTML form
$search = $_GET['search'];

// Use a prepared statement to prevent SQL injection
$sql = "SELECT * FROM users WHERE username LIKE ?";
$stmt = $conn->prepare($sql);

// Check if the statement was prepared successfully
if ($stmt) {
    // Bind the parameter (s for string, replace with appropriate type)
    $stmt->bind_param("s", $search);

    // Execute the query
    $stmt->execute();

    // Get the result set
    $result = $stmt->get_result();

    // Display the search results
    echo "<h2>Search Results:</h2>";

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "<p>ID: " . $row['id'] . " - Name: " . $row['username'] . " - Email: " . $row['email'] . "</p>";
        }
    } else {
        echo "No results found.";
    }

    // Close the prepared statement
    $stmt->close();
} else {
    // Handle the error if the statement preparation fails
    echo "Error: " . $conn->error;
}

// Close the MySQL connection
$conn->close();
?>
