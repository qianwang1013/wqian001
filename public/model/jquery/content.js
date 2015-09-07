$(document).ready(function(){

/*	$('.notes').mouseenter(function(){

		if($(this).find('img')){
			$(this).find('img').addClass('imgActive');
			$(this).find('.comment').show().slideUp(2000);				
		}
		else{
		}

	}).mouseleave(function(){
		if($(this).find('img')){
			$(this).find('img').removeClass('imgActive');
			$(this).find('.comment').hide();			
		}

	});
*/
	$('.fa-bars').click(function(){
		var counter = 0; 
		console.log('clicked');
		$(this).toggleClass('bars-active');
		$('#myPanel').toggle();
	})

	$(window).resize(function(){
		var $win = $(this);
		var $myPanel = $('#myPanel');
		var $myList = $myPanel.find('li');
		var $faBar = $('.fa-bars');
		if($win.width() <= 1500){
			$myPanel.removeClass('list-inline').addClass('ver-list').hide();
			$faBar.show();	

		}	
		else{
			$myPanel.removeClass('ver-list').addClass('list-inline').show();	
			$faBar.hide();
		}		
	});

	$(window).scroll(function(){
		var $win = $(this);
		if($win.scrollTop() >= 500){
			$('.banner').addClass('bannerSticky');
		}
		else{
			$('.banner').removeClass('bannerSticky');
		}



	});

	/*Pannel*/
	$('.banner li').click(function(){
		var panelID  = $(this).attr('data-panel');
		var $myPanel = $(this).closest('#myPanel');
		//removing active
		$myPanel.find('li.active').removeClass('active');
		//adding active
		$(this).addClass('active');


		$('.panel.active').slideUp(300, showNextPanel);

		function showNextPanel(){
            $(this).removeClass('active');

            $('#'+panelID).slideDown(300, function() {
                $(this).addClass('active');
            });			
		}
/*        $myPanel.find('.content.Pactive').slideUp(300, showNextPanel);

        var showNextPanel = function(){
             $(this).removeClass('Pactive');

            $('#'+panelID).slideDown(300, function() {
                $(this).addClass('Pactive');
            });       	
        }*/
	})
});

/*
    $('.tab-panels .tabs li').on('click', function() {

        var $panel = $(this).closest('.tab-panels');

        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');

        //figure out which panel to show
        var panelToShow = $(this).attr('rel');

        //hide current panel
        $panel.find('.panel.active').slideUp(300, showNextPanel);

        //show next panel
        function showNextPanel() {
            $(this).removeClass('active');

            $('#'+panelToShow).slideDown(300, function() {
                $(this).addClass('active');
            });
        }
    });*/