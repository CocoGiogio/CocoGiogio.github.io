// ================================
// NINJA STEALTH UI ANIMATIONS
// ================================

// Smooth shadow fade for cards (subtle stealth hover)
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.4s ease';
        card.style.transform = 'translateY(-6px)';
        card.style.boxShadow = '0 10px 25px rgba(255,255,255,0.05)';
        card.style.borderColor = 'rgba(255,255,255,0.2)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
        card.style.borderColor = 'rgba(255,255,255,0.08)';
    });
});


// ================================
// Fade-in for section titles on scroll (like appearing from the shadows)
// ================================
const observerOptions = {
    threshold: 0.3
};

const fadeInElements = document.querySelectorAll('section h2, .card, .hero h1, .hero p');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transition = 'opacity 1.2s ease, transform 1.2s ease';
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeInElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
});


// ================================
// Stealth breathing glow for the logo (soft pulse, like calm breathing)
// ================================
const logo = document.querySelector('.logo');
if (logo) {
    let glow = 0;
    let direction = 1;
    setInterval(() => {
        glow += 0.05 * direction;
        if (glow > 1 || glow < 0) direction *= -1;
        logo.style.textShadow = `0 0 ${5 + glow * 10}px rgba(255,255,255,${0.3 + glow * 0.2})`;
    }, 100);
}


// ================================
// Soft fade for navigation bar (appears silently on scroll up)
// ================================
let lastScrollTop = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // scrolling down — fade nav slightly
        nav.style.transition = 'opacity 0.4s ease';
        nav.style.opacity = '0.85';
    } else {
        // scrolling up — restore nav visibility
        nav.style.opacity = '1';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


// ================================
// Silent page load entrance (everything fades in slowly)
// ================================
window.addEventListener('load', () => {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 1.5s ease';
    requestAnimationFrame(() => {
        document.body.style.opacity = 1;
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
