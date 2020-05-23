(function(){
	const header = document.querySelector('.header');
	window.onscroll = () => {
		if (window.pageYOffset > 50){
			header.classList.add('header_active');
		} else {
			header.classList.remove('header_active');

		}
	};
}());
$(function(){
 $('.header__burger').click(function(){
		 var list = $('.header__nav');
		 var active = $('.burger__line');
		 if (list.css('display')=='none'){
			 list.show();
		 }
		 else {
			 list.hide();
		 
 }

 
	    });
	
	 
	});	
$(function(){
 $('.search_media').click(function(){
		 var list = $('.search_form');
		
		 if (list.css('display')=='none'){
			 list.show();
		 }
		 else {
			 list.hide();
		 
 }

 
	    });
	
	 
	});	
