// Función de inicialización de la navbar
function initNavbarScroll() {
  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar");

  if (!navbar) {
    console.error("❌ No se encontró la navbar en el DOM.");
    return;
  }

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 50) {
      // Oculta la navbar al hacer scroll hacia abajo
      navbar.style.top = "-100px";
    } else {
      // Muestra la navbar al hacer scroll hacia arriba
      navbar.style.top = "10px";
    }

    lastScrollTop = scrollTop;
  });

  console.log("✅ Navbar funcionando correctamente.");
}

// Si el documento ya está listo, inicializa inmediatamente;
// de lo contrario, espera a DOMContentLoaded.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNavbarScroll);
} else {
  initNavbarScroll();
}