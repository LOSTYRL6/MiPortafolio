document.addEventListener("DOMContentLoaded", function () {
  let currentImageIndex = -1;
  const container = document.querySelector(".conocimientosFrontend");
  const cubo = document.querySelector(".cuboDelFronted");
  const barraProgreso = document.querySelector(".progreso-scroll");

  const icons = [
    "#HtmlPro",
    "#CSSPro",
    "#JSPRO",
    "#boostrapsPRo",
    "#JavaPro",
    "#PHPPRo",
    "#sqlPRo",
    "#GithubPRo",
    "#nodePRo",
    "#LaravelPRo",
    "#VuePRo",
    "#ReactPRo",
    "#WordPressPRo",
    "#SanityPRo",
  ].map((selector) => document.querySelector(selector));

  icons.forEach((icon) => {
    icon.style.opacity = 0;
    icon.style.transition = "opacity 0.5s ease-out";
  });

  container.addEventListener("scroll", function () {
    const scrollTop = container.scrollTop;
    const maxScroll = container.scrollHeight - container.clientHeight;
    const maxMove = container.clientWidth - cubo.clientWidth;

    const progress = scrollTop / maxScroll;
    const x = progress * maxMove;

    cubo.style.transform = `translate(${x}px, -50%)`;
    // Actualiza el ancho de la barra de progreso según el scroll
    barraProgreso.style.width = `${progress * 100}%`;

    // Calcular índice de imagen (0, 1 o 2)
    let newIndex = 0;
    if (progress < 1 / 3) {
      newIndex = 0;
    } else if (progress < 2 / 3) {
      newIndex = 1;
    } else {
      newIndex = 2;
    }

    // Solo cambiamos si es una imagen diferente
    if (newIndex !== currentImageIndex) {
      currentImageIndex = newIndex;

      const images = [
        "/Imagenes/programacion.png",
        "/Imagenes/pensando.png",
        "/Imagenes/comprender.png",
      ];

      // Fade out → cambio de imagen → fade in
      gsap.to(cubo, {
        duration: 0.3,
        opacity: 0,
        onComplete: () => {
          cubo.src = images[newIndex];
          gsap.to(cubo, { duration: 0.3, opacity: 1 });
        },
      });
    }

    const visibleCount = Math.floor(progress * icons.length);

    icons.forEach((icon, index) => {
      if (index <= visibleCount) {
        icon.style.opacity = 1;
      } else {
        icon.style.opacity = 0;
      }
    });
  });
});
