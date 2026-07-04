// footer-loader.js
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    // This part assumes there is an element with id 'navbar-container'
    // If not, this will silently fail or throw an error depending on context.
    // For now, retaining original functionality.
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        navbarContainer.innerHTML = data;
    }
  })
  .catch(error => console.error('Error loading footer:', error));

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navRight = document.querySelector('.nav-right');

    if (hamburgerMenu && navRight) {
        hamburgerMenu.addEventListener('click', () => {
            navRight.classList.toggle('active');
        });
    }

    // Optional: Close menu when a link is clicked (for single-page navigation)
    navRight.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navRight.classList.contains('active')) {
                navRight.classList.remove('active');
            }
        });
    });

    // Optional: Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!navRight.contains(event.target) && !hamburgerMenu.contains(event.target) && navRight.classList.contains('active')) {
            navRight.classList.remove('active');
        }
    });
});
