<?php

	/*
		REQUIRES
			pear
			pear mail

		INSTALL - on Ubuntu 14.04
			sudo apt-get install pear
			sudo pear install -a mail
	*/

	#TODO change addresses to curves

	require_once "Mail.php";
	
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];

	$from = 'noreply@ahighersale.com';
	$to = 'larry@cocotraining.com';

	$subject = "[NOREPLY] New contact " . $name . " from landing page";
	$body = "Name: " . $name . "  |  Email: " . $email . "  |  Phone: " . $phone;

	$headers = array(
	'From' => $from,
	'To' => $to,
	'Subject' => $subject
	);

	$smtp = Mail::factory('smtp', array(
	    'host' => 'gator4182.hostgator.com',
	    'port' => '25',
	    'auth' => true,
	    'username' => 'noreply@ahighersale.com',
	    'password' => 'rAk3YpDn7btve5Y'
	));

	$mail = $smtp->send($to, $headers, $body);

	if (PEAR::isError($mail)) {
		echo('There was a problem handling your request, please try again');
		http_response_code(500);		
	} else {
		echo('Message received, thanks!');
	}



?>