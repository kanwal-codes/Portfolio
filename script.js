document.addEventListener('DOMContentLoaded', () => {
    // --- Scroll Reveal ---
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // --- Custom Cursor ---
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    // Move cursor
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot follows instantly
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Outline follows with slight delay (animation handled by CSS transition, 
        // but we update position here. For smoother lag, we could use requestAnimationFrame)
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Hover effects
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .btn');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.add('hovering');
        });
        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('hovering');
        });
    });

    // --- Mouse Parallax for Orbs ---
    const orbs = document.querySelectorAll('.orb');
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 20; // Different speeds
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;

            // Use transform to move, keeping the float animation if possible
            // Note: This might conflict with the CSS animation 'float'. 
            // Ideally, we wrap the orb in a container or use CSS variables.
            // Let's use CSS variables for cleaner composition.
            orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
});
