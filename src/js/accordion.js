document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector(".accordion-icon");
    const title = header.querySelector(".accordion-title");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.textContent = "+";
      icon.style.color = "inherit"
      title.style.color = "inherit";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.textContent = "−";
      icon.style.color = "#0068A7"
      title.style.color = "#0068A7";
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  // Select only accordion-header2 items
  const items = document.querySelectorAll(".accordion-item .accordion-header2");

  if (!items.length) return;

  // Get the parent accordion-item elements
  const accordionItems = Array.from(items).map(header => header.closest(".accordion-item"));

  const openItem = (item) => {
    const content = item.querySelector(".accordion-content");
    const icon = item.querySelector(".accordion-icon img");
    const btn = item.querySelector(".btn-accordion");

    if (!content) return;

    // Force height for transition
    content.style.maxHeight = content.scrollHeight + "px";

    if (btn) btn.style.background = "#0068A7";
    if (icon) icon.src = "/wp-content/uploads/2026/03/Vector.png";

    item.classList.add("active");
    item.classList.remove("border", "shadow-lg");
  };

  const closeItem = (item) => {
    const content = item.querySelector(".accordion-content");
    const icon = item.querySelector(".accordion-icon img");
    const btn = item.querySelector(".btn-accordion");

    if (!content) return;

    content.style.maxHeight = null;

    if (btn) btn.style.background = "inherit";
    if (icon) icon.src = "/wp-content/uploads/2026/03/arrow-down.png";

    item.classList.remove("active");
    item.classList.add("border", "shadow-lg");
  };

  // ✅ Open first item of header2 on load
  setTimeout(() => {
    if (accordionItems[0]) openItem(accordionItems[0]);
  }, 50);

  // ✅ Click logic
  accordionItems.forEach(item => {
    const header = item.querySelector(".accordion-header2");
    if (!header) return;

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all header2 items
      accordionItems.forEach(i => closeItem(i));

      // Open clicked item if it wasn’t already open
      if (!isActive) openItem(item);
    });
  });
});