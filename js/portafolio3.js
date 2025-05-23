document.addEventListener("DOMContentLoaded", function () {
  let currentImageIndex = -1;
  const container = document.querySelector(".conocimientosFrontend");
  const cubo = document.querySelector(".cuboDelFronted");
  const barraProgreso = document.querySelector(".progreso-scroll");
  const hello = document.querySelector(".hello");
  const redes = document.querySelector(".MisRedesSociales");
  const cardInt = document.querySelector(".card-int");
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
        "../Imagenes/programacion.png",
        "../Imagenes/pensando.png",
        "../Imagenes/comprender.png",
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

  cardInt.addEventListener("mouseenter", () => {
    gsap.to(hello, {
      y: -100,
      duration: 1.5,
      opacity: 0,
      ease: "power2.out",
      onComplete: () => {
        hello.style.display = "none";
        redes.style.display = "flex";

        // Reseteamos la posición de redes para que empiece desde y=150
        gsap.set(redes, { y: 100 });

        gsap.to(redes, {
          y: 0,
          duration: 1.5,
          opacity: 1,
          ease: "power2.out",
        });
      },
    });
  });

  cardInt.addEventListener("mouseleave", () => {
    gsap.to(redes, {
      y: 100,
      duration: 1.5,
      opacity: 0,
      ease: "power2.in",
      onComplete: () => {
        hello.style.display = "flex";
        redes.style.display = "none";

        gsap.to(hello, {
          y: 0,
          duration: 1.5,
          opacity: 1,
          ease: "power2.out",
        });
      },
    });
  });

  const proyectos = [
    { bookId: "GGamers", textoId: "GGamersTexto" },
    { bookId: "Eina", textoId: "EinaTexto" },
    { bookId: "JavaPixel", textoId: "JavaPixelTexto" },
    { bookId: "Cientifikis", textoId: "CientifikisText" },
  ];

  proyectos.forEach(({ bookId, textoId }) => {
    let animado = false;

    const book = document.getElementById(bookId);
    const texto = document.getElementById(textoId);

    book.addEventListener("mouseenter", () => {
      if (animado) return;
      animado = true;

      gsap.to(book, {
        x: "-195px",
        duration: 1.5,
        ease: "power2.out",
        onComplete: () => {
          // Reset posición para evitar que rompa el layout
          gsap.to(book, { x: 0, duration: 0 });

          // Mostrar el texto después de la animación
          texto.style.display = "flex";
          gsap.fromTo(
            texto,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
          );
        },
      });
    });
  });

  document.querySelectorAll(".ExperincienaMios").forEach((experiencia) => {
    const infoExtra =
      experiencia.querySelector(".InformacionExtra") ||
      experiencia.querySelector(".InformacionExtra2");

    experiencia.addEventListener("mouseenter", () => {
      if (infoExtra) {
        gsap.to(infoExtra, {
          opacity: 1,
          duration: 0.5,
          pointerEvents: "auto",
        });
      }
    });

    experiencia.addEventListener("mouseleave", () => {
      if (infoExtra) {
        gsap.to(infoExtra, {
          opacity: 0,
          duration: 0.5,
          pointerEvents: "none",
        });
      }
    });
  });
});
