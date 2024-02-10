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
    public function create( $Name, $Age, $Fathersname, $MobileNo)
    {
        $query = "INSERT INTO posttable (Roll_no, Name, Age, Father_name, Mobile_no) VALUES ( '$Name', '$Age', '$Fathersname', '$MobileNo')";

        try {
            // Execute the query
            $result = $this->conn->query($query);

            // Check for errors during execution
            if (!$result) {
                throw new Exception($this->conn->error);
            }
            
            echo "Record created successfully";
        } catch (Exception $e) {
            echo "Error: " . $e->getMessage();
        }
    }
}
