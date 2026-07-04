document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("productSlider");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  function scrollSlider(direction) {
    if (!slider) return;

    slider.scrollBy({
      left: direction === "left" ? -280 : 280,
      behavior: "smooth",
    });
  }

  if (slider) {
    setInterval(() => scrollSlider("right"), 4000);
  }

  leftBtn?.addEventListener("click", () => scrollSlider("left"));
  rightBtn?.addEventListener("click", () => scrollSlider("right"));

  const testimonialSlider = document.getElementById("testimonialSlider");
  if (testimonialSlider) {
    Array.from(testimonialSlider.children).forEach(card => {
      testimonialSlider.appendChild(card.cloneNode(true));
    });

    const autoScroll = () => {
      testimonialSlider.scrollLeft += 0.5;
      if (testimonialSlider.scrollLeft >= testimonialSlider.scrollWidth / 2) {
        testimonialSlider.scrollLeft = 0;
      }
      requestAnimationFrame(autoScroll);
    };

    autoScroll();
  }
});

window.addEventListener("load", () => {
  const loader = document.getElementById("pageLoader");
  if (loader) {
    loader.classList.add("is-hidden");
    setTimeout(() => loader.remove(), 400);
  }
});

// Global Scroll-to-Top Logic (Dynamic)
// Button is now permanently visible via CSS
// Click handler is placed directly inline in footer.html
