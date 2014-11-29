<?php

	# input verification

	if(!isset($_POST['code']) || $_POST['code'] === ''){
		echo('Please enter a code');
		http_response_code(400);
	}

	# check code validity

	$code = $_POST['code'];

	$VALID_CODE = 'PJSCWJM';

	$is_code_valid = $code === $VALID_CODE;

	# serialize to JSON and send result back

	$obj = new StdClass();
	$obj->valid = $is_code_valid;

	$json = json_encode($obj);

	echo($json);


?>