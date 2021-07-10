const ti = gsap.timeline({defaults:{ease: "power1.out" } });

ti.to('.quote',{y: '0%' , duration: 1 ,stagger: 0.25});
ti.to('.slider' , {y: "-100%", duration: 1.5,delay: 0.5});
ti.to('.intro' , {y: "-100%",duration: 1}, "-=1");
ti.fromTo('text', {opacity: 0}, {opacity: 1 , duration:  1});
ti.fromTo('h3', {opacity: 0}, {opacity: 1 , duration:  1 }, "-=1");