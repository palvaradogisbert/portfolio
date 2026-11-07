
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");

// NAVEGACIÓN RESPONSIVE
if (menuToggle && navLinks) {
  const mobileMenu = window.matchMedia("(max-width: 600px)");

  function closeMenu() {
    menuToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
  }

  menuToggle.addEventListener("click", () => {
    const isExpanded =
      menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    navLinks.classList.toggle("is-open", !isExpanded);
  });

  // Cerrar el menú al seleccionar una sección
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Cerrar el menú con Escape
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuToggle.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu();
      menuToggle.focus();
    }
  });

  // Restablecer el menú al cambiar de tamaño de pantalla
  mobileMenu.addEventListener("change", closeMenu);
}

// AÑO AUTOMÁTICO DEL FOOTER
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}
