$(document).ready(function() {
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed('.typed', {
		strings: ['Web Developer'],
		typeSpeed: 50,
		startDelay: 500,
		showCursor: false
	});
});