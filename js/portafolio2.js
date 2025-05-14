document.addEventListener("DOMContentLoaded", function () {
  const configuracionOpciones = document.getElementById(
    "ConfiguracionOpciones"
  );
  const MyBodyImagen = document.querySelector(".MyBodyImagen");
  const miPerfil = document.querySelector(".MiPerfil");
  const clickConfiguracion = document.getElementById("ClickConfiguracion");
  const portafolioHome = document.querySelector(".PortafolioHome");
  const SalidaConfiguracion = document.getElementById("SalidaConfiguracion");
  let EstiloOscuro = false;
  const PredeterminadoColor = document.getElementById("PredeterminadoColor");
  const NeonOscuro = document.getElementById("NeonOscuro");
  const ElegirInformacion = document.getElementById("ElegirInformacion");
  const ElegirTematica = document.getElementById("ElegirTematica");
  const InformacionConfiguracionTematica = document.querySelector(
    ".InformacionConfiguracionTematica"
  );
  const InformacionConfiguracionInformacion = document.querySelector(
    ".InformacionConfiguracionInformacion"
  );
  configuracionOpciones.addEventListener("click", () => {
    gsap.to(portafolioHome, {
      backgroundPosition: "0% 0%",
      duration: 5,
      ease: "power2.out",
    });
    gsap.to(miPerfil, {
      x: 200,
      y: 200,
      duration: 1,
      opacity: 0,
      ease: "power2.out",
      onComplete: () => {
        miPerfil.style.display = "none";
        document.body.style.height = "100vh";
        if ((EstiloOscuro = false)) {
          portafolioHome.style.background =
            "linear-gradient(to bottom right, rgb(47, 154, 14) 60%, rgb(46, 46, 152) 100%)";
        }
        clickConfiguracion.style.display = "flex";
        clickConfiguracion.style.opacity = "1";
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
        gsap.set(clickConfiguracion, { clearProps: "transform" });

        // Oculta el menú de configuración
        clickConfiguracion.style.display = "none";
        document.body.style.height = "100%";
        if ((EstiloOscuro = false)) {
          portafolioHome.style.background =
            "linear-gradient(to bottom right, rgb(47, 154, 14), rgb(46, 46, 152))";
        }
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

  function aplicarEstilo({ oscuro, fondo, colorTexto, mostrarImagen }) {
    EstiloOscuro = oscuro;
    portafolioHome.style.background = fondo;
    document.body.style.color = colorTexto;
    document.body.style.borderColor = colorTexto;
    MyBodyImagen.style.display = mostrarImagen ? "flex" : "none";
  }

  PredeterminadoColor.addEventListener("click", () => {
    aplicarEstilo({
      oscuro: false,
      fondo:
        "linear-gradient(to bottom right, rgb(47, 154, 14), rgb(46, 46, 152))",
      colorTexto: "white",
      mostrarImagen: false,
    });
  });

  NeonOscuro.addEventListener("click", () => {
    aplicarEstilo({
      oscuro: true,
      fondo: "black",
      colorTexto: "#39FF14",
      mostrarImagen: true,
    });
  });

  ElegirInformacion.addEventListener("click", () => {
    InformacionConfiguracionInformacion.style.display = "flex";
    InformacionConfiguracionTematica.style.display = "none";
  });
  ElegirTematica.addEventListener("click", () => {
    InformacionConfiguracionTematica.style.display = "flex";
    InformacionConfiguracionInformacion.style.display = "none";
  });
});
