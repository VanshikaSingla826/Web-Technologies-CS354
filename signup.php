<?php
  $success=0;
  $user=0;

  if($_SERVER['REQUEST_METHOD']=='POST'){
    include '../includes/db_connection.php';
    
    // Capture the form data
    $username = $_POST['username'];
    $email = $_POST['email'];
    $phone = $_POST['Phone'];
    $password = $_POST['Password'];

    // You can add database logic here to verify the login credentials
    // echo "Username: $username <br>";
    // echo "Password: $password <br>";

    // $sql = "insert into registration(username,password) values('$username','$password')";

    // $result= mysqli_query($con, $sql);

    // if($result){
    //   echo "data inserted successfully";
    // }
    // else{
    //   die(mysqli_connect_error());
    // }
    $sql = "select * from registration where username= '$username'";

    $result=mysqli_query($con,$sql);
    if($result){
      $num= mysqli_num_rows($result);
      if($num>0){
        // echo"user already exist";
        $user=1;
      }
      else{
        $sql = "insert into registration(username,email,`phone no.`,password) values('$username','$email','$phone','$password')";
        
        $result= mysqli_query($con, $sql);

        if($result){
          // echo "signed in successfully";
          $success=1;
          header('location:login.php');
        }
        else{
          die(mysqli_connect_error());
        }
      }
    }

  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign up</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
<?php
  if($user){
    echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>ohh no sorry! </strong>User already exist.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>';
  }
?>

<?php
  if($success){
    echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Success! </strong>You are successfully signed in.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>';
  }
?>

<h1 class="text-center mt-5">Welcome to signup page:</h1>  
<div class="container mt-5">
<form action="signup.php" method="post">
    <div class="form-group">
      <label for="username">Username:</label>
      <input type="text" class="form-control" placeholder="Enter username" name="username" id="username" required autocomplete="off">
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter your email" name="email" required autocomplete="off">
    </div>

        <div class="form-group">
          <label for="Phone">Phone no.</label>
          <input type="text" class="form-control" id="Phone" placeholder="Enter your phone no." name="Phone" required autocomplete="off">
    </div>

    <div class="form-group">
      <label for="Password">Password:</label>
      <input type="password" class="form-control" id="Password" placeholder="Enter your password" name="Password" required autocomplete="off">
    </div>
    <br>
    <button type="submit" class="btn btn-primary w-100">sign up</button>
  </form>
  <!-- Already a user section -->
  <div class="text-center mt-3">
    <p>Already a user? <a href="login.php" class="btn btn-link">Login here</a></p>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
