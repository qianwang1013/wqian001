<?php
	require_once('db.php');
	$condential = require_once('condential.php');
	$postdata = file_get_contents('php://input');
	$request = json_decode($postdata, true);
	$method = $request['method'];
	unset($request['method']);
	

/*	$request = array(
		'blogID'=> 7,
		'blogName' => 'dick',
		'blogContent' => 'dick',
	);
	$method = 'edit';*/
	$sql = new Db($condential["server"], $condential["username"], $condential["password"],$condential["dbName"],$request, 'event');
	if(method_exists($sql, $method)){
		$result = call_user_func([$sql, $method]);
		echo(json_encode($result));

	}
