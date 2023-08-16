// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-list a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Change background color of navigation on scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});
