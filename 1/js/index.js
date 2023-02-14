ScrollReveal({ 
    reset: true,
    distance:'60px',
    duration:2500, 
    delay:400
});

ScrollReveal().reveal('.logo,img', { delay: 100, origin:'left' });
ScrollReveal().reveal('.section-1,.contains', { delay: 100, origin:'bottom' });
ScrollReveal().reveal('h1,h3,p', { delay: 100, origin:'left', interval:50 });