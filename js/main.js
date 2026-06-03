document.addEventListener('DOMContentLoaded', function() {

    // --- Header Scroll Effect ---
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Publication Accordion ---
    const publications = document.querySelectorAll('.publication');
    publications.forEach(publication => {
        const header = publication.querySelector('.publication-header');
        
        const toggle = () => {
            const isActive = publication.classList.contains('active');
            // Close other open publications
            publications.forEach(p => {
                if (p !== publication && p.classList.contains('active')) {
                    p.classList.remove('active');
                    p.querySelector('.publication-header').setAttribute('aria-expanded', 'false');
                }
            });
            // Toggle the clicked one
            publication.classList.toggle('active');
            header.setAttribute('aria-expanded', !isActive);
        };

        header.addEventListener('click', toggle);
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle();
            }
        });
    });

    // --- Press Accordion ---
    const pressAccordions = document.querySelectorAll('.press-accordion');
    pressAccordions.forEach(accordion => {
        const header = accordion.querySelector('.press-accordion-header');
        
        const toggle = () => {
            const isActive = accordion.classList.contains('active');
            accordion.classList.toggle('active');
            header.setAttribute('aria-expanded', !isActive);
        };

        header.addEventListener('click', toggle);
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle();
            }
        });
    });

});
