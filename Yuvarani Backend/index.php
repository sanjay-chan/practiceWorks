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

// Use correct string keys to access values from $_POST

$Name = isset($_POST["Name"]) ? $_POST["Name"] : "";
$Age = isset($_POST["Age"]) ? $_POST["Age"] : "";
$Father_name = isset($_POST["Father_name"]) ? $_POST["Father_name"] : "";
$Mobile_no = isset($_POST["Mobile_no"]) ? $_POST["Mobile_no"] : "";
$record_id = isset($_POST["record_id"]) ? $_POST["record_id"] : "";



// Example usage
if (!empty($Name) && !empty($Age) && !empty($Father_name) && !empty($Mobile_no)&& !empty($record_id)) {

    ////$crudObject->create($Name, $Age, $Father_name, $Mobile_no);
    // $crudObject->read();
    //$crudObject->update($id,$Name,$Age, $Father_name, $Mobile_no);
    //  $crudObject->read();
     $crudObject->delete(73);
    // $crudObject->read();
} else {

    echo "Please fill in all the required fields.";
}


/*if (!empty($record_id) &&!empty($Name) && !empty($Age) && !empty($Father_name) && !empty($Mobile_no)) {
    $crudObject->delete($record_id, $Name,$Age , $Father_name,$Mobile_no);
    echo "Record updated successfully.";
    //$crudObject->read(); // Display the updated records
} else {
    echo "Please fill in all the required fields.";
}*/
?>