document.addEventListener("DOMContentLoaded", function () {

  const topbar = document.querySelector(".topbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      topbar.classList.add("topbar-fixed");
    } else {
      topbar.classList.remove("topbar-fixed");
    }
  });

});