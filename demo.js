// Show button when user scrolls down 100px
window.onscroll = function() {
  const btn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top when button is clicked
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
