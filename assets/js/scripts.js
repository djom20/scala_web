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
	 			scroll = ($('#slide1').height() + 300);
	 			$('.link').removeClass('active');
	 			$('#to_proyecto').addClass('active');
	 			break;
	 		case 'link_to_residencias':
	 			scroll = ($('#slide1').height() + $('#navbar1').height() + 805);
	 			$('.link').removeClass('active');
	 			$('#to_residencias').addClass('active');
	 			break;
	 		case 'link_to_ubicacion':
	 			scroll = ($('#slide1').height() + $('#navbar1').height() + $('#navbar2').height() + $('#slide2').height() + 840);
	 			$('.link').removeClass('active');
	 			$('#to_ubicacion').addClass('active');
	 			break;
	 		case 'link_to_contacto':
	 			scroll = ($('#slide1').height() + $('#navbar1').height() + $('#navbar2').height() + $('#slide2').height() + $('#navbar3').height() + 840);
	 			$('.link').removeClass('active');
	 			$('#to_contacto').addClass('active');
	 			break;
	 	}
	 	$('html,body').animate({scrollTop:scroll},1000, 'swing');
	 	evt.preventDefault();
	 });
}