document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector(".accordion-icon");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.textContent = "+";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.textContent = "−";
    }
  });
});

document.querySelectorAll(".accordion-header2").forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const content = header.nextElementSibling;
    const icon = header.querySelector(".accordion-icon img");
    const btn = header.querySelector(".btn-accordion");

    if (content.style.maxHeight) {
      // CLOSE
      content.style.maxHeight = null;
      btn.style.background = "inherit";
      icon.src = "/wp-content/uploads/2026/03/arrow-down.png";

      item.classList.add("border", "shadow-lg");
    } else {
      // OPEN
      content.style.maxHeight = content.scrollHeight + "px";
      btn.style.background = "#0068A7";
      icon.src = "/wp-content/uploads/2026/03/Vector.png";

      item.classList.remove("border", "shadow-lg");
    }
  });
});