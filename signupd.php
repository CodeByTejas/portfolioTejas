<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "tejas-contact-form";


$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn){
    die("Sorry we failed to connect: ". mysqli_connect_error());
}
else{
    echo "Connection was successful<br>";
}


$value1 = $_POST["name"];
echo "Name". $value1;

$value2 = $_POST["email"];
echo " <br> Email: ". $value2;

$value3 = $_POST["message"];
echo " <br> message: ". $value3;



 

 $sql = "INSERT INTO `tejasContact`(`Name`, `Email`, `Message`) VALUES ('$value1', '$value2', '$value3')";
 
 $result = mysqli_query($conn, $sql);
 
 
 if($result){
     echo " <br> The record has been inserted successfully successfully!<br>";
 }
 else{
     echo " <br> The record was not inserted successfully because of this error ---> ". mysqli_error($conn);
 }
   



?>
