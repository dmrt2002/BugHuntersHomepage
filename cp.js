const hero = document.querySelector('.hero');

const ti = new TimelineMax();
ti.fromTo(hero,1, {width: "0%" } , {width: '100%', ease: Power2.easeInOut });
ti.fromTo('h3',1, {opacity: 0 } , {opacity: 1, ease: Power2.easeInOut });