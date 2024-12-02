<?php
$servername="localhost";
$username="root";
$password="";
$databasename="signupforms";

//creating connection
$con = mysqli_connect($servername, $username, $password, $databasename);

// //checking connection
if(!$con){
  die(mysqli_connect_error());
}
// if($con){
//   echo "connection successfull!";
// }
// else{
//   die(mysqli_connect_error($con));
// }

// //closing connection
// mysqli_close($con);

?>
