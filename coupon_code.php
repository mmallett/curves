<?php

	# input verification

	if(!isset($_POST['code']) || $_POST['code'] === ''){
		echo('Please enter a code');
		http_response_code(400);
	}

	# check code validity

	$code = $_POST['code'];

	$VALID_CODE = 'PJSCWJM';

	$VALID_HTML = "<h3>Congratulations!</h3>
	        <p>You've been selected to receive one free session with Jillian Michaels! Bring this coupon to your Port Jefferson Station Curves to learn more about this exclusive offer!</p><br>
	        <span>Don't wait, this amazing opportunity expires on January 16th!</span></br>" .
	        '<button type="button" class="print-button" onclick="printModal()">Print</button>';
	$FAIL_HTML = "<h3>Invalid Code</h3>";

	$ret = '';

	if($code === $VALID_CODE){
		$ret = $VALID_HTML;
	}
	else{
		$ret = $FAIL_HTML;
	}

	echo($ret);

?>