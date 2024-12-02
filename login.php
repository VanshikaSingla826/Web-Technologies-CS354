<?php
  $login=0;
  $invalid=0;
  if($_SERVER['REQUEST_METHOD']=='POST'){
    include '../includes/db_connection.php';
    
    // Capture the form data
    $username = $_POST['username'];
    $password = $_POST['Password'];

    $sql = "select * from registration where username= '$username' and password='$password'";

    $result=mysqli_query($con,$sql);
    if($result){
      $num= mysqli_num_rows($result);
      if($num>0){
        // echo "login successfull";
        $login=1;
        session_start();
        $_SESSION['username']=$username;
        header('location:index.php');
      }
      else{
        // echo "invalid data";
        $invalid=1;
      }
    }

  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
<?php
  if($login){
    echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Success! </strong>You are successfully logged in.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>';
  }
?>

<?php
  if($invalid){
    echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>Error! </strong>invalid credentials
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>';
  }
?>
<h1 class="text-center mt-5">login to our website:</h1>  
<div class="container mt-5">
<form action="login.php" method="post">
    <div class="form-group">
      <label for="username">Name:</label>
      <input type="text" class="form-control" placeholder="Enter username" name="username" id="username" required>
    </div>

    <div class="form-group">
      <label for="Password">Password</label>
      <input type="password" class="form-control" id="Password" placeholder="Enter your password" name="Password" required>
    </div>
    <br>
    <button type="submit" class="btn btn-primary w-100">login</button>
  </form>

  <!-- New user signup link -->
  <div class="text-center mt-3">
    <p>New user? <a href="signup.php" class="btn btn-link">Sign up here</a></p>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
