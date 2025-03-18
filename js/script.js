document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar");

  if (!navbar) {
    console.error("❌ No se encontró la navbar.");
    return;
  }

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 50) {
      // Al bajar, oculta la navbar
      navbar.style.transform = "translateX(-50%) translateY(-100%)";
    } else {
      // Al subir, muestra la navbar
      navbar.style.transform = "translateX(-50%) translateY(0)";
    }

    lastScrollTop = scrollTop;
  });
});