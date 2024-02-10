<?php

require_once "dbconnection.php";
require_once "post.php";


// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$database = "post";

// Create an object of CRUDOperations
$crudObject = new CRUDOperations($servername, $username, $password, $database);


$Name = "yuva";
$Age = 22;
$Fathersname="dass";
$Mobileno=1234567890;

// Example usage
$crudObject->create($Name,$Age,$Fathersname,$Mobileno);
//  $crudObject->read();
//$crudObject->update(18,"Jane Doe",55 );
//$crudObject->read();
//$crudObject->delete(19);
//$crudObject->read();




?>
