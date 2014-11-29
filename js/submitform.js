
var button = $('#signup');
var messagebox = $('#messagebox');

button.click(submitform);

$('#promotionCode button').click(checkCouponCode);

var defaultText = '<img src="images/spinner.gif"></img> Working...';

function submitform(){

	messagebox.removeClass('error');

	var validationErrors = validate();

	if(!validationErrors){ 

		messagebox.html(defaultText);
		messagebox.show();
		button.prop("disabled", true);

		var data = $('#contact-form').serialize();

		$.post('sendmail.php', data)
		.done(function(data){
			messagebox.html(data);
			button.prop("disabled", false);
		})
		.fail(function(jqXHR, textStatus, errorThrown){
			messagebox.html(jqXHR.responseText);
			messagebox.addClass('error');
			button.prop("disabled", false);
		});

	}
	else{

		messagebox.show();
		messagebox.addClass('error');
		messagebox.html(validationErrors);

	}

}

function validate(){

	var ret = '';

	//check that name is not empty
	if(!$("#input-name").val()){
		ret += 'Please enter your name</br>';
	}

	//check that email at least contains *@*
	var emailRe = /\S+@\S+\.\S+/;
	if(!emailRe.test($("#input-email").val())){
		ret += 'Please enter your email address</br>';	
	}

	//check that at least phone number has 10 digits in it
	var phone = $("#input-phone").val().replace(/[^\d]/g,''); // remove all non-digits
	if (!(phone && phone.length === 10)){
		ret += 'Please enter your 10 digit phone number</br>';
	}

	return ret;

}

function checkCouponCode(){

	var data = $('#promotionCode').serialize();

	$.post('coupon_code.php', data)
	.done(function(data){
		if(data.valid){
			$('#modalPanel').modal('show');
		}
		else{

		}
	})
	.fail(function(jqXHR, textStatus, errorThrown){
		messagebox.html(jqXHR.responseText);
		messagebox.addClass('error');
		button.prop("disabled", false);
	});

}