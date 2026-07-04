const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');
const submenuToggle = document.querySelector('.submenu-toggle');
const submenu = document.querySelector('.submenu');

// Open menu
hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

// Close menu
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// Toggle submenu
submenuToggle.addEventListener('click', () => {
  submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
});
