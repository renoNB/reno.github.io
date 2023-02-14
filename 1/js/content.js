ScrollReveal({ 
    reset: true,
    distance:'60px',
    duration:2500, 
    delay:400
});

ScrollReveal().reveal('.main-title,.section-title', { delay: 100, origin:'left' });
ScrollReveal().reveal('.sec-01,.image,.info', { delay: 100, origin:'bottom' });
ScrollReveal().reveal('.text-box', { delay: 100, origin:'right' });
ScrollReveal().reveal('.media-icons, i', { delay: 100, origin:'bottom' ,interval:200});
ScrollReveal().reveal('.sec-02,.image,.sec-03,image', { delay: 100, origin:'top' });
ScrollReveal().reveal('.media-info li', { delay: 100, origin:'left', interval:50 });