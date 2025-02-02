document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('header', {
        duration: 1200,
        origin: 'top',
        distance: '30px',
        easing: 'ease-in-out',
        delay: 200
    });

    ScrollReveal().reveal('.card', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        easing: 'ease-in-out',
        interval: 200 // Efeito cascata
    });

    ScrollReveal().reveal('.tech-stack img', {
        duration: 900,
        origin: 'left',
        distance: '30px',
        easing: 'ease-out',
        interval: 100
    });

    ScrollReveal().reveal('form', {
        duration: 1100,
        origin: 'bottom',
        distance: '50px',
        easing: 'ease-in-out',
        delay: 300
    });

    ScrollReveal().reveal('footer', {
        duration: 900,
        origin: 'top',
        distance: '30px',
        easing: 'ease-in-out',
        delay: 400
    });
});

