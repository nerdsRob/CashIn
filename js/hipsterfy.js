 $(document).ready(function() {
 $('#logo-img').anim({
			 	margin: '0 157px'
			 }, 0.3, 'ease-out');	

			 $('#cir-pic, #cam-pic').anim({
				margin: '20px auto'
			 }, 0.8, 'ease-out');
		     
		     $('.text').anim({
				margin: '10px auto' 
			 }, 1.0, 'linear');
		     
		     $('select').on('change', 
		     				function(){ 
								$(this).anim({ 
										width: '170',
										opacity: '0.8'        
										}, 0.7, 'ease');
								})
});