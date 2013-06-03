
$(document).ready(function(){ 

	$(".box1").hover(function(){
		$('.originalmessage').hide();
		$('.boxleft').show();
	}, function(){
		$('.boxleft').hide();
		$('.originalmessage').show();
	});

	$(".box2").hover(function(){
		$('.originalmessage').hide();
		$('.boxcenter').show();
	}, function(){
		$('.boxcenter').hide();
		$('.originalmessage').show();
	});

	$(".box3").hover(function(){
		$('.originalmessage').hide();
		$('.boxright').show();
	}, function(){
		$('.boxright').hide();
		$('.originalmessage').show();
	});

});
