(function($) {
    ("use strict");
    /*----------- 19. particlesJS Animation ----------*/
    const initParticles = (containerId) => {
        const element = document.getElementById(containerId);

        if (!element) return;

        particlesJS(containerId, {
            particles: {
                number: {
                    value: 180, // Reduced for better performance
                    density: {
                        enable: true,
                        value_area: 350
                    },
                },
                color: {
                    value: "#205c5e"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#205c5e"
                    }
                },
                opacity: {
                    value: 0.1
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 120,
                    color: "#205c5e",
                    opacity: 0.6,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.5
                },
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 120,
                        line_linked: {
                            opacity: 0.8
                        }
                    },
                },
            },
            retina_detect: true,
        });
    };

    // List of IDs to initialize particles
    const ids = [
        "particles-js",
        "particles-js2",
        "particles-js4",
        "footer-particle1",
        "footer-particle2",
        "faq-particle1",
        "process-particle1",
        "process-particle2",
        "packag-particle1",
        "particles-js8",
    ];

    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    initParticles(entry.target.id);
                    observer.unobserve(entry.target); // Stop observing once initialized
                }
            });
        }, {
            threshold: 0.1
        } // Trigger when 10% of the element is visible
    );

    ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
    });


})(jQuery);