// footer-loader.js
// Dynamically load FontAwesome if not already present
if (!document.querySelector('link[href*="font-awesome"]') && !document.querySelector('link[href*="all.min.css"]')) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
  document.head.appendChild(link);
}


fetch('footer.html?v=' + new Date().getTime())
  .then(response => response.text())
  .then(data => {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) return;

    footerContainer.innerHTML = data;

    // Initialize Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
      // Toggle visibility on scroll
      const toggleScrollButton = () => {
        if (window.scrollY > 300 || document.documentElement.scrollTop > 300) {
          scrollToTopBtn.classList.add('show');
        } else {
          scrollToTopBtn.classList.remove('show');
        }
      };

      // Check visibility on load
      toggleScrollButton();

      // Attach scroll listener
      window.addEventListener('scroll', toggleScrollButton, { passive: true });

      scrollToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        // Fallback for older browsers
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });
    }
  })
  .catch(error => console.error('Error loading footer:', error));
