$(window).on("load"), function() {
	$(".loader").fadeOut(500)
}

$(document).ready(function() {
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	let typed = new Typed('.typed', {
		strings: ['Web Developer'],
		typeSpeed: 50,
		startDelay: 500,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:false,
	    items:5,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
    		}
    	}
	});

	let skillsTopOffset = $(".skillsSection").offset().top;

	$(window).scroll(function(){
		if (window.pageYOffset > skillsTopOffset - $(window).height() + 350){
			$('.chart').easyPieChart({
		            easing: 'easeInOut',
		            barColor: '#fff',
		            trackColor: false,
		            scaleColor: false,
		            lineWidth: 4,
		            size: 152,
		            onStep: function(from, to, percent) {
		            	$(this.el).find('.percent').text(Math.round(percent));
		            }
		        });
		}
	});
});