async function includePartials() {
  const targets = document.querySelectorAll("[data-include]");

  await Promise.all(
    [...targets].map(async (target) => {
      const file = target.getAttribute("data-include");

      try {
        const response = await fetch(file);
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        target.innerHTML = await response.text();
      } catch (error) {
        console.error(`Could not load ${file}:`, error);
      }
    })
  );

  setCurrentPage();
}

function setCurrentPage() {
  const current = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".site-nav a").forEach((link) => {
    const href = link.getAttribute("href");

    if (href === current) {
      link.setAttribute("aria-current", "page");
    }
  });
}

document.addEventListener("DOMContentLoaded", includePartials);