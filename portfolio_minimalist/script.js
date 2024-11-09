// Mouse follower effect
const mouseFollower = document.querySelector('.mouse-follower');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    requestAnimationFrame(() => {
        mouseFollower.style.transform = `translate(${mouseX - 150}px, ${mouseY - 150}px)`;
    });
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.className = savedTheme;
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
    if (body.className === 'dark') {
        body.className = 'light';
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        body.className = 'dark';
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
});

// Add smooth hover effect for cards
const cards = document.querySelectorAll('.post-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-2px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});