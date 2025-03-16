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
        
      navbar.style.top = "-100px";
    } else {
      navbar.style.top = "10px";
    }

    lastScrollTop = scrollTop;
  });

  console.log("✅ Navbar funcionando correctamente.");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNavbarScroll);
} else {
  initNavbarScroll();
}