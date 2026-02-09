// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Theme switcher
const themeButtons = document.querySelectorAll('.theme-btn');
const body = document.body;
const drinkIcon = document.querySelector('.drink-icon');
const drinkName = document.querySelector('.drink-name');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
setTheme(currentTheme);

function setTheme(theme) {
    // Remove all theme classes
    body.classList.remove('dark-mode', 'terminal-mode');
    
    // Add the selected theme class
    if (theme === 'dark') {
        body.classList.add('dark-mode');
    } else if (theme === 'terminal') {
        body.classList.add('terminal-mode');
    }
    
    // Update drink icon and name based on theme
    if (theme === 'light') {
        drinkIcon.textContent = '🍵';
        drinkName.textContent = 'tea';
    } else if (theme === 'dark') {
        drinkIcon.textContent = '☕';
        drinkName.textContent = 'coffee';
    } else if (theme === 'terminal') {
        drinkIcon.textContent = '🧃';
        drinkName.textContent = 'monster energy drink';
    }
    
    // Update active button
    themeButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.theme === theme) {
            btn.classList.add('active');
        }
    });
    
    // Save theme preference
    localStorage.setItem('theme', theme);
}

themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        setTheme(btn.dataset.theme);
    });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});
