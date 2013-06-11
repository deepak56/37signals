
$(document).ready(function(){ 

	$(".box1").hover(function(){
		$('.originalmessage').hide();
		$('.boxleft').show();
		$('#arrowleft').css('display','block');
	}, function(){
		$('.boxleft').hide();
		$('.originalmessage').show();
		$('#arrowleft').css('display','none');
	});

	$(".box2").hover(function(){
		$('.originalmessage').hide();
		$('.boxcenter').show();
		$('#arrowcenter').css('display','block');
	}, function(){
		$('.boxcenter').hide();
		$('.originalmessage').show();
		$('#arrowcenter').css('display','none');
	});

	$(".box3").hover(function(){
		$('.originalmessage').hide();
		$('.boxright').show();
		$('#arrowright').css('display','block');
	}, function(){
		$('.boxright').hide();
		$('.originalmessage').show();
		$('#arrowright').css('display','none');
	});

});
