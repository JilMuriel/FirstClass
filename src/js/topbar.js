document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const main = document.querySelector("main");

  let headerHeight = header.offsetHeight;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("topbar-fixed");
      main.style.paddingTop = headerHeight + "px";
    } else {
      header.classList.remove("topbar-fixed");
      main.style.paddingTop = "0px";
    }
  });

  // Recalculate on resize (important for responsive)
  window.addEventListener("resize", function () {
    headerHeight = header.offsetHeight;
  });
});