<?php

class CRUDOperations
{
    private $conn;

    public function __construct($servername, $username, $password, $database)
    {
        $dbConnection = new DatabaseConnection($servername, $username, $password, $database);
        $this->conn = $dbConnection->getConnection();
    }

    // Method to create a new record

    public function create($Name, $Age, $Father_name, $Mobile_no)
    {

        $sql = "INSERT INTO posttable ( Name, Age, Father_name, Mobile_no) VALUES ('$Name', '$Age', '$Father_name', '$Mobile_no')";

        if ($this->conn->query($sql) === TRUE) {
            echo "Record created successfully.\n";
        } else {
            echo "Error creating record: " . $this->conn->error . "\n";
        }
    }

    // Method to read a record

    public function read()
    {
        $sql = "SELECT * FROM posttable";
        $result = $this->conn->query($sql);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo " Name: " . $row['Name'] . ", Age: " . $row['Age'] . ", Father_name: " . $row['Father_name'] . ", Mobile_no: " . $row['Mobile_no'] . "\n";
            }
        } else {
            echo "No records found.\n";
        }
    }

    // Method to update a record
    public function update($id, $Name, $Age, $Father_name, $Mobile_no)
    {
        $sql = "UPDATE posttable SET Name='$Name', Age='$Age', Father_name='$Father_name', Mobile_no='$Mobile_no' WHERE id=$id";

        if ($this->conn->query($sql) === TRUE) {
            echo "Record updated successfully.\n";
        } else {
            echo "Error updating record: " . $this->conn->error . "\n";
        }
    }


 //Method to delete a record
     public function delete($id)
    {
        $sql = "DELETE FROM posttable WHERE id=$id";

        if ($this->conn->query($sql) === TRUE) {
            echo "Record deleted successfully.\n";
        } else {
            echo "Error deleting record: " . $this->conn->error . "\n";
        }
    }
}