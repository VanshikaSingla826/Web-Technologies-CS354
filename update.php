<?php
$success = 0;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    include '../includes/db_connection.php';

    // Retrieve user ID from query parameter
    $id = $_GET['uid'];

    // Capture the form data
    $username = $_POST['username'];
    $email = $_POST['email'];
    $phone = $_POST['Phone'];
    $password = $_POST['Password'];

    //SQL Query for Update
    $sql = "UPDATE `registration` SET 
            username='$username', 
            email='$email', 
            `phone no.`='$phone', 
            password='$password' 
            WHERE id=$id";

    // Execute the query
    $result = mysqli_query($con, $sql);

    if ($result) {
        $success = 1;
        header('Location: ../admin/display.php'); // Redirect to the display page
    } else {
        die("Error: " . mysqli_error($con));
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>update form</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
  <h1 class="text-center my-5">Update Form</h1>
  <div class="container">
  <form action="update.php?uid=<?php echo $_GET['uid']; ?>" method="post">
    <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" class="form-control" placeholder="Enter username" name="username" id="username" required autocomplete="off">
    </div>

    <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter your email" name="email" required autocomplete="off">
    </div>

    <div class="form-group">
        <label for="Phone">Phone no.:</label>
        <input type="text" class="form-control" id="Phone" placeholder="Enter your phone no." name="Phone" required autocomplete="off">
    </div>

    <div class="form-group">
        <label for="Password">Password:</label>
        <input type="password" class="form-control" id="Password" placeholder="Enter your password" name="Password" required autocomplete="off">
    </div>
    <br>
    <button type="submit" class="btn btn-primary w-100">Update</button>
  </form>
  </div>

</body>
</html>
