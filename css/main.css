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
        header.addEventListener('click', () => {
            // Close other open publications
            publications.forEach(p => {
                if (p !== publication && p.classList.contains('active')) {
                    p.classList.remove('active');
                }
            });
            // Toggle the clicked one
            publication.classList.toggle('active');
        });
    });

});
