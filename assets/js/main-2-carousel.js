$(document).ready(function(){
	$('.owl-carousel').owlCarousel({

		/*
		items: 1,
		autoplay: true,
		loop: true,
		autoplayTimeout: 4000,
		nav: false,
		dots:true,
		animateIn: 'animate__fadeIn',
		animateOut: 'animate__fadeOut',
		*/
		rtl:true,
	    loop:true,
	    autoplay: true,
	    nav: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})



});
