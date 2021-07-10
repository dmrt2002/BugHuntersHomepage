$().ready (function () {
	
	
	// setup Elevator.js
	// https://github.com/tholman/elevator.js
	var elevator = new Elevator({
		element: $('.back-to-top')[0],
		duration: 2000
	});
	
	// setup ScrollReveal.js
	// https://github.com/jlmakes/scrollreveal.js
	window.sr = ScrollReveal();
	sr.reveal('.navbar', { 
		duration: 600,
		scale: 1,
		delay: 1500,
		origin: 'top'
	});
	sr.reveal('.brand-heading', { 
		duration: 600,
		scale: 1,
		delay: 500
	});
	sr.reveal('.intro-text', { 
		duration: 600,
		origin: 'top',
		scale: 1,
		delay: 700
	});
	sr.reveal('#more-btn', { 
		duration: 600,
		origin: 'top',
		scale: 1.2,
		delay: 900
	});
	
	// setup About section scrollReveal
	sr.reveal('#fullstack h2' , {
		duration: 600,
		reset: true
	});
	sr.reveal('#fullstack p' , {
		duration: 600,
		reset: true
	});
	
	//
	
	sr.reveal('#backend h2' , {
		duration: 600,
		reset: true
	});
	sr.reveal('#backend p' , {
		duration: 600,
		reset: true
	});	
    sr.reveal('#frontend h2' , {
		duration: 600,
		reset: true
	});
	sr.reveal('#frontend p' , {
		duration: 600,
		reset: true
	});	
});
