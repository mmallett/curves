
function printModal(){
	
	// var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
	
	// WinPrint.document.write(document.getElementById("stylecss"));
	// WinPrint.document.close();
	// WinPrint.focus();
	// WinPrint.print();
	// WinPrint.close();

	// var prtContent = document.getElementById("modal-content");
	var win = window.open('','printwindow');
	win.document.write('<html><head><title>Workout with Jillian</title><link rel="stylesheet" type="text/css" href="css/style-print.css" media="print"></head><body>');
	win.document.write($('#myModal .modal-content').html());
	win.document.write('</body></html>');
	win.print();
	win.close();
}