document.addEventListener('DOMContentLoaded', () => {
    const rocketContainer = document.getElementById('rocketContainer');
    const rocket = document.getElementById('rocket');

    rocketContainer.addEventListener('click', () => {
        // Add launching class to trigger animation
        rocketContainer.classList.add('launching');

        // Play launch sound effect (optional - you can add audio)
        // const audio = new Audio('/sounds/launch.mp3');
        // audio.play();

        // Wait for animation to complete, then redirect
        setTimeout(() => {
            document.body.classList.add('fade-out');
        }, 1500);

        setTimeout(() => {
            window.location.href = '/home';
        }, 2500);
    });

    // Add hover sound effect on rocket
    rocket.addEventListener('mouseenter', () => {
        rocket.style.filter = 'brightness(1.2)';
    });

    rocket.addEventListener('mouseleave', () => {
        rocket.style.filter = 'brightness(1)';
    });

    // Create additional stars dynamically
    const createStars = () => {
        const starsContainer = document.querySelector('.stars');
        const numberOfStars = 100;

        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.style.position = 'absolute';
            star.style.width = Math.random() * 3 + 'px';
            star.style.height = star.style.width;
            star.style.backgroundColor = 'white';
            star.style.borderRadius = '50%';
            star.style.top = Math.random() * 100 + '%';
            star.style.left = Math.random() * 100 + '%';
            star.style.opacity = Math.random();
            star.style.animation = `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`;
            starsContainer.appendChild(star);
        }
    };

    createStars();

    // Add twinkle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Parallax effect for planets on mouse move
    document.addEventListener('mousemove', (e) => {
        const planets = document.querySelectorAll('.planet');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        planets.forEach((planet, index) => {
            const speed = (index + 1) * 20;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            planet.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
});
