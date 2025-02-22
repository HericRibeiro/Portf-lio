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
  // Scroll Reveal Animations
  ScrollReveal().reveal('.section', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out',
    reset: true
});




document.addEventListener("DOMContentLoaded", function () {
    // Configuração do ScrollReveal
    ScrollReveal().reveal('.section', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        easing: 'ease-in-out',
        reset: true
    });

    // Configuração das partículas no fundo
    tsParticles.load("particles-js", {
        particles: {
            number: { value: 80 }, // Aumenta o número de partículas
            density: { enable: true, value_area: 800 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            color: { value: "#ffffff" },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.5,
                width: 1
            }
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: "repulse" }, // Efeito ao passar o mouse
                onclick: { enable: true, mode: "push" }
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 4 }
            }
        }
    });
});

