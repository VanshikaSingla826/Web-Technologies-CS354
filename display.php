<?php
include '../includes/db_connection.php'
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD Operation</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
  <div class="container ">
    <button class="btn btn-primary my-5"> <a href="../public/signup.php" class="text-light" > Add User
    </a>
    </button>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#id</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Phone No.</th>
      <th scope="col">Password</th>
      <th scope="col">Operation</th>
    </tr>
  </thead>
  <tbody>
    <?php
    $sql= "select * from registration";
    $result= mysqli_query($con,$sql);
    if($result){
      // $row= mysqli_fetch_assoc($result);
      // echo $row['username'];
    
    while($row= mysqli_fetch_assoc($result)){
      $id= $row['id'];
      $username= $row['username'];
      $email= $row['email'];
      $phone=$row['phone no.'];
      $password= $row['password'];
      echo'<tr>
        <th scope="row">'.$id.'</th>
        <td>'.$username.'</td>
        <td>'.$email.'</td>
        <td>'.$phone.'</td>
        <td>'.$password.'</td>
        <td>
          <button class="btn btn-primary"><a href="../functions/update.php? uid='.$id.'" class="text-light">Update</a></button>
          <button class="btn btn-danger"><a href="../functions/delete.php?did='.$id.'"  class="text-light">Delete</a></button>
        </td>
      </tr>'; 
     }
     
    }
    ?>
    
  </tbody>
</table>
  </div>
</body>
</html>
