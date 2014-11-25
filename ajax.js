$('#submit').click(function() {
		document.getElementById("theOut").innerHTML =  editor.getValue();
		var strin1 = $('#theOut').val();
		var strin2 = $('#stin').val();
	
		$.get('senttoserver.php',{in1: strin1, in2: strin2},function(data) {	
			$('#out').text(data);
		});
	});
