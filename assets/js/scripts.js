$(function(){
	menu();
});

function menu(){
	$('nav a').click(function(evt){
	 	var id = $(this).attr('id');
	 	var scroll = 0;
	 	switch(id){
	 		case 'link_to_home':scroll = 0;
	 			$('.link').removeClass('active');
	 			break;
	 		case 'link_to_proyecto':
	 			scroll = $('#navbar2').offset().top;
	 			$('.link').removeClass('active');
	 			$('#to_proyecto').addClass('active');
	 			break;
	 		case 'link_to_residencias':
	 			scroll = $('#navbar3').offset().top;
	 			$('.link').removeClass('active');
	 			$('#to_residencias').addClass('active');
	 			break;
	 		case 'link_to_ubicacion':
	 			scroll = $('#maps').offset().top;
	 			$('.link').removeClass('active');
	 			$('#to_ubicacion').addClass('active');
	 			break;
	 		case 'link_to_entorno':
	 			scroll = $('#wish').offset().top - 35;
	 			$('.link').removeClass('active');
	 			$('#to_entorno').addClass('active');
	 			break;
	 		case 'link_to_contacto':
	 			scroll = $('#contact').offset().top;
	 			$('.link').removeClass('active');
	 			$('#to_contacto').addClass('active');
	 			break;
	 	}
	 	$('html,body').animate({scrollTop:scroll},1000, 'swing');
	 	evt.preventDefault();
	});
}

function sendEmail(){
	if(validForm()){
		data = {
			'name': $('#formName').val(),
			'phone': $('#formPhone').val(),
			'email': $('#formEmail').val(),
			'city': $('#formCity').val(),
			'details': $('#formDetails').val()
		};

		$.post( "sendEmail.php", data).done(function( result ) {
  			alert('Success');
  			resetForm();
		});
	}
}

function validForm(){
	var form = ['formName','formPhone','formEmail','formDetails'];

	for (var i = 0; i < form.length; i++) {
		if($('#'+form[i]).val() == ''){
			alert('Los campos * son obligatorios');
			$('#'+form[i]).focus();
			return false;
		}
	};

	return true;
}

function resetForm(){
	var form = ['formName','formPhone','formEmail','formCity','formDetails'];

	for (var i = 0; i < form.length; i++) {
		$('#'+form[i]).val('');
	};
}