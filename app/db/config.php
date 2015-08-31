<?php
class DbConnect{
		protected $conn;
		protected $dbname;
		public function __construct($servername, $username, $password, $dbname){
			$conn = new mysqli($servername, $username, $password, $dbname);	
			if($conn->connect_error){
				die('Connection failed: '. $conn->connect_error);
			}else{
				$this->conn = $conn;
				$this->dbname = $dbname;
				return $this->conn;
			}			
		}

		public function query($sql){
			$result = $this->conn->query($sql);
			
			if (!$result) {
			    die('Invalid query: ' . mysql_error());
			}
			else{
				return $result;
			}			
		}
	}



	