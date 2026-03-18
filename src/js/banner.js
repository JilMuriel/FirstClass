document.addEventListener("DOMContentLoaded", () => {
  const bannerBlocks = document.querySelectorAll(".banner-content-block");
  const placeholders = document.querySelectorAll(".placeholder");

  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY;

    bannerBlocks.forEach(el => {
      el.style.setProperty("--parallaxY1", `${scrollY * -0.2}px`);
    });

    placeholders.forEach(el => {
      el.style.setProperty("--parallaxY2", `${scrollY * 0.35}px`);
    });

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
});