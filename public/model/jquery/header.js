
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 1){
			$('.icon').addClass('sticky');
		}
		else{
			$('.icon').removeClass('sticky');
		}
	});
})
