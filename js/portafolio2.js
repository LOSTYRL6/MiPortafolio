document.addEventListener("DOMContentLoaded", function () {
  const configuracionOpciones = document.getElementById(
    "ConfiguracionOpciones"
  );
  const miPerfil = document.querySelector(".MiPerfil");
  const clickConfiguracion = document.getElementById("ClickConfiguracion");
  const portafolioHome = document.querySelector(".PortafolioHome");
  const SalidaConfiguracion = document.getElementById("SalidaConfiguracion");

  configuracionOpciones.addEventListener("click", () => {
    // Anima el fondo hacia la esquina superior izquierda
    gsap.to(portafolioHome, {
      backgroundPosition: "0% 0%", // arriba izquierda
      duration: 5,
      ease: "power2.out",
    });

    // Anima MiPerfil hacia abajo-derecha y lo oculta
    gsap.to(miPerfil, {
      x: 200,
      y: 200,
      duration: 1,
      opacity: 0,
      ease: "power2.out",
      onComplete: () => {
        miPerfil.style.display = "none";
        document.body.style.height = "100vh";
        portafolioHome.style.background =
          "linear-gradient(to bottom right, rgb(47, 154, 14) 60%, rgb(46, 46, 152) 100%)";

        // Muestra el menú de configuración
        clickConfiguracion.style.display = "block";
        clickConfiguracion.style.opacity = "1";

        // Anima el menú desde arriba-izquierda
        gsap.from(clickConfiguracion, {
          x: -200,
          y: -200,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      },
    });
  });

  SalidaConfiguracion.addEventListener("click", () => {
    // Oculta el menú de configuración con animación inversa
    gsap.to(clickConfiguracion, {
      x: -200,
      y: -200,
      opacity: 0,
      duration: 1,
      ease: "power2.in",
      onComplete: () => {
        // Limpia transformaciones previas
        gsap.set(clickConfiguracion, { clearProps: "transform" });

        // Oculta el menú de configuración
        clickConfiguracion.style.display = "none";
        document.body.style.height = "100%";
        portafolioHome.style.background =
          "linear-gradient(to bottom right, rgb(47, 154, 14), rgb(46, 46, 152))";

        // Muestra MiPerfil y lo anima de regreso
        miPerfil.style.display = "flex";
        gsap.fromTo(
          miPerfil,
          { x: 200, y: 200, opacity: 0 },
          { x: 0, y: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );
      },
    });
  });
});
