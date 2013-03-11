///////////////////////////////////////////////////////////////////////////////////////
// Ready, steady, go!
///////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {	
	var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	
	if (isFirefox) {
		$('#logo-img').animate({
		 	margin: '0 157px'
		}, 800);
		
		$('#cir-pic, #cam-pic').animate({
			margin: '20px 7px'
		}, 800);
		
		$('.text').animate({
			margin: '10px auto' 
		}, 800);
				
		$('select').on('change', 
					function(){ 
					$(this).animate({ 
							width: '170px'
							}, 500, function(){$(this).animate({opacity: '0.4'}, 800)})
				});
					
	} else {	
		$('#logo-img').anim({
		 	margin: '0 157px'
		}, 0.3, 'ease-out');	
	
		$('#cir-pic, #cam-pic').anim({
			margin: '20px auto'
		}, 1.0, 'ease-out');
		
		$('#cir-pic').anim({
			        translateX: '10px'
		 }, 0.6, 'linear', function(){ $(this).anim({ translateX: '0' }, 0.2) });
		 
		 $('#cam-pic').anim({
			        translateX: '-10px'
		 }, 0.6, 'linear', function(){ $(this).anim({ translateX: '0' }, 0.2) });
	
		$('.text').anim({
			margin: '10px auto' 
		}, 1.0, 'linear');
		
		$('select').on('change', function(){ $(this).anim({ width: '170' }, 0.5, 'ease', function(){$(this).anim({opacity: '0.7'}, 0.8)})})
	}
 });
