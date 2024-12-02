<?php
include '../includes/db_connection.php';
if(isset($_GET['did'])){
  $id = $_GET['did'];

  // Use backticks around the table name
  $sql = "DELETE FROM `registration` WHERE id = $id";
  $result = mysqli_query($con, $sql);
  if($result){
    header('location:../admin/display.php');
  } else {
    die(mysqli_error($con));
  }
}
?>
