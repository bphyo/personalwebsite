// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            try {
                // Simulate form submission
                // In a real application, you would send this to a backend endpoint
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Show success message
                formMessage.textContent = 'Thank you for your message! I\'ll get back to you soon.';
                formMessage.className = 'form-message success';
                contactForm.reset();

                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.className = 'form-message';
                }, 5000);

            } catch (error) {
                // Show error message
                formMessage.textContent = 'Something went wrong. Please try again later.';
                formMessage.className = 'form-message error';

                setTimeout(() => {
                    formMessage.className = 'form-message';
                }, 5000);
            }
        });
    }

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .project-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });

    // Parallax effect for hero background
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const heroSection = document.querySelector('.hero');

                if (heroSection) {
                    const parallaxSpeed = 0.5;
                    heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
                }

                ticking = false;
            });
            ticking = true;
        }
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.8)';
        }
    });

    // Add cursor glow effect
    const createCursorGlow = () => {
        const glow = document.createElement('div');
        glow.className = 'cursor-glow';
        glow.style.cssText = `
            position: fixed;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.2s ease-out;
        `;
        document.body.appendChild(glow);

        document.addEventListener('mousemove', (e) => {
            glow.style.left = (e.clientX - 150) + 'px';
            glow.style.top = (e.clientY - 150) + 'px';
        });
    };

    // Only add cursor glow on desktop
    if (window.innerWidth > 1024) {
        createCursorGlow();
    }
});
