<?php
	require_once('db.php');
/*	$postdata = file_get_contents('php://input');
	$request = json_decode($postdata, true);
	var_dump($request);	
	$method = $request['method'];
	unset($request['method']);*/
	

	$request = array(
		'blogID'=> 7,
		'blogName' => 'dick',
		'blogContent' => 'dick',
	);
	$method = 'edit';
	$sql = new Db('localhost', 'root', '','qian',$request, 'persons');

	if(method_exists($sql, $method)){
		$result = call_user_func([$sql, $method]);
	}
