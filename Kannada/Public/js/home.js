// Dark Mode
const darkModeToggleBtn = document.getElementById('dark-mode-toggle');
let theme = localStorage.getItem('theme');

if (theme === 'dark') enableDarkMode();

darkModeToggleBtn.addEventListener('click', () => {
    theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {
    darkModeToggleBtn.innerHTML = '<img src="https://img.icons8.com/cotton/38/000000/sun--v2.png"/>';
    localStorage.setItem('theme', 'dark');
    document.body.classList.add('dark-mode');
}

function disableDarkMode() {
    darkModeToggleBtn.innerHTML = '<img src="https://img.icons8.com/color/38/000000/moon-satellite.png"/>';
    localStorage.setItem('theme', 'light');
    document.body.classList.remove('dark-mode');
}

window
    .matchMedia('(prefers-color-scheme: dark)')
    .addListener((e) => (e.matches ? enableDarkMode() : disableDarkMode()));

// Scroll to Top
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 30) { // Show backToTopButton
        if (!backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnExit");
            backToTopButton.classList.add("btnEntrance");
            backToTopButton.style.display = "block";
        }
    }
    else { // Hide backToTopButton
        if (backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnEntrance");
            backToTopButton.classList.add("btnExit");
            setTimeout(function () {
                backToTopButton.style.display = "none";
            }, 250);
        }
    }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }
}

function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};
