<?php

class Db{
	private $statement;
	private $tableName;
	private $conn;
	public function __construct($servername, $username, $password, $dbname,$statement, $tableName){
		require_once('config.php');
		$this->conn = new DbConnect($servername, $username, $password, $dbname);
		$this->tableName = $tableName;
		$this->statement = $statement;
	}

	public function add(){
		$keys = implode(",", array_keys($this->statement));
		$values = '';
		$temp = array_values($this->statement);
		$len = count($temp);
		$counter = 0;
		foreach($temp as $attr){
			if(is_string($attr)){
				$values = $values."'".$attr."'";
				echo($values);
			}else{
				$values = $values.$attr;
			}
			if($counter != $len-1){
				$values = $values.',';
			}
			$counter++;
		};
		$sql = 'INSERT INTO '.$this->tableName.' ( '.$keys.' ) VALUES ( '.$values.')';
		$result = $this->conn->query($sql);
	}

	public function listAll(){
		$sql = 'SELECT * FROM '.$this->tableName;
		$sqlResult = $this->conn->query($sql);
		$result = array();
		if($sqlResult && $sqlResult->num_rows > 0){
		    while ($row = $sqlResult->fetch_assoc()) {
				array_push($result, $row); 
		    }		
		}

		return $result;
	}

	public function delete(){
		if(count($this->statement) == 1){
			$key = implode(array_keys($this->statement));
			$value = intval(implode(array_values($this->statement)));

			$sql = 'DELETE FROM '. $this->tableName. ' where '.$key.' = '. $value;
			$sqlResult = $this->conn->query($sql);	
			var_dump($sqlResult);		
		}
		else{
			echo("bad statement");
		}
	}

	public function edit(){

		$keys = array_keys($this->statement);
		$values = array_values($this->statement);
		$id_key = $keys[0];
		$id = $values[0];
		unset($keys[0]);
		unset($values[0]);
		$sql = 'UPDATE '.$this->tableName.' SET ';

		for( $i = 1; $i != count($keys) + 1; ++$i){
			if($i == count($keys)){
				if(is_string($values[$i])){
					$tmp = "'".$values[$i]."'";
					$sql = $sql.$keys[$i]. ' = '. $tmp;
				}else{
					$sql = $sql.$keys[$i]. ' = '. $values[$i];
				}			
			}else{
				if(is_string($values[$i])){
					$tmp = "'".$values[$i]."'";
					$sql = $sql.$keys[$i]. ' = '. $tmp . ' , ';
				}else{
					$sql = $sql.$keys[$i]. ' = '. $values[$i]. ' , ';
				}				
			}

		}

		$sql = $sql.' WHERE '. $id_key. ' = '. $id;
		$result = $this->conn->query($sql);
	}
}