document.addEventListener("DOMContentLoaded", () => {
  // Cargar el componente de la navbar
  fetch('components/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('Error cargando navbar:', error));
  
  // Cargar el componente del footer
  fetch('components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error cargando footer:', error));

  const scrollContainer = document.querySelector('.scroll-container');
  let lastScrollTop = scrollContainer.scrollTop;
  let isBouncing = false;

  // Efecto elástico
  scrollContainer.addEventListener('wheel', (e) => {
    if (isBouncing) return;
    const scrollTop = scrollContainer.scrollTop;
    const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    
    if (scrollTop === 0 && e.deltaY < 0) {
      applyBounce(e.deltaY);
    } else if (scrollTop >= maxScroll && e.deltaY > 0) {
      applyBounce(e.deltaY);
    }
  });

  function applyBounce(deltaY) {
    isBouncing = true;
    scrollContainer.style.transition = 'transform 0.3s ease-out';
    scrollContainer.style.transform = `translateY(${deltaY * 0.3}px)`;

    setTimeout(() => {
      scrollContainer.style.transform = 'translateY(0)';
      setTimeout(() => {
        scrollContainer.style.transition = '';
        isBouncing = false;
      }, 300);
    }, 100);
  }

  // Ocultar/mostrar la navbar según el scroll
  scrollContainer.addEventListener('scroll', () => {
    let currentScroll = scrollContainer.scrollTop;
    // Re-seleccionar la navbar (ya cargada)
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    if (currentScroll < 50) {
      navbar.style.transform = 'translateX(-50%) translateY(0)';
    } else if (currentScroll > lastScrollTop) {
      navbar.style.transform = 'translateX(-50%) translateY(-120%)';
    } else {
      navbar.style.transform = 'translateX(-50%) translateY(0)';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});