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

  const Sobremi = document.getElementById("Sobremi");
  const ClickSobreMi = document.getElementById("ClickSobreMi");
  const SalidaSobreMi = document.getElementById("SalidaSobreMi");

  const miConocimientos = document.getElementById("miConocimientos");
  const ClickConocimientos = document.getElementById("ClickConocimientos");
  const SalidaConocimientos = document.getElementById("SalidaConocimientos");

  const MisProyectos = document.getElementById("MisProyectos");
  const ClickProyectos = document.getElementById("ClickProyectos");
  const SalidasProyectos = document.getElementById("SalidasProyectos");

  const MiExperiencia = document.getElementById("MiExperiencia");
  const ClickExperiencia = document.getElementById("ClickExperiencia");
  const SalidaExperiencia = document.getElementById("SalidaExperiencia");

  const progresoScroll = document.querySelector(".progreso-scroll");
  const cardInt = document.querySelector(".card-int");
  const ProyectoPropio = document.querySelectorAll(".ProyectoPropio");

  function animarSalidaPerfil({
    trigger,
    mostrarElemento,
    movimiento = { x: 0, y: 200 },
    MyBody,
  }) {
    trigger.addEventListener("click", () => {
      gsap.to(portafolioHome, {
        backgroundPosition: "0% 0%",
        duration: 5,
        ease: "power2.out",
      });

      gsap.to(miPerfil, {
        ...movimiento,
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        onComplete: () => {
          miPerfil.style.display = "none";
          if (MyBody == true) {
            document.body.style.height = "100%";
          } else {
            document.body.style.height = "100vh";
          }
          mostrarElemento.style.display = "flex";
          mostrarElemento.style.opacity = "1";

          gsap.from(mostrarElemento, {
            x: -movimiento.x || 0,
            y: -movimiento.y || 0,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          });
        },
      });
    });
  }

  animarSalidaPerfil({
    trigger: configuracionOpciones,
    mostrarElemento: clickConfiguracion,
    movimiento: { x: 200, y: 200 },
  });

  animarSalidaPerfil({
    trigger: Sobremi,
    mostrarElemento: ClickSobreMi,
    movimiento: { x: 0, y: 200 },
  });

  animarSalidaPerfil({
    trigger: miConocimientos,
    mostrarElemento: ClickConocimientos,
    movimiento: { x: -200, y: 200 },
  });
  animarSalidaPerfil({
    trigger: MisProyectos,
    mostrarElemento: ClickProyectos,
    movimiento: { x: 200, y: -200 },
    MyBody: true,
  });
  animarSalidaPerfil({
    trigger: MiExperiencia,
    mostrarElemento: ClickExperiencia,
    movimiento: { x: -200, y: -200 },
  });

  function animarEntradaPerfil({
    trigger,
    ocultarElemento,
    salida = { x: 0, y: -200 },
    entrada = { x: 0, y: 200 },
  }) {
    trigger.addEventListener("click", () => {
      gsap.to(ocultarElemento, {
        ...salida,
        opacity: 0,
        duration: 1,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(ocultarElemento, { clearProps: "transform" });
          ocultarElemento.style.display = "none";
          document.body.style.height = "100vh";
          miPerfil.style.display = "flex";
          gsap.fromTo(
            miPerfil,
            { ...entrada, opacity: 0 },
            { x: 0, y: 0, opacity: 1, duration: 1, ease: "power2.out" }
          );
        },
      });
    });
  }

  animarEntradaPerfil({
    trigger: SalidaConfiguracion,
    ocultarElemento: clickConfiguracion,
    salida: { x: -200, y: -200 },
    entrada: { x: 200, y: 200 },
  });

  animarEntradaPerfil({
    trigger: SalidaSobreMi,
    ocultarElemento: ClickSobreMi,
    salida: { y: -200 },
    entrada: { y: 200 },
  });

  animarEntradaPerfil({
    trigger: SalidaConocimientos,
    ocultarElemento: ClickConocimientos,
    salida: { x: 200, y: -200 },
    entrada: { x: -200, y: 200 },
  });

  animarEntradaPerfil({
    trigger: SalidasProyectos,
    ocultarElemento: ClickProyectos,
    salida: { x: -200, y: 200 },
    entrada: { x: 200, y: -200 },
  });

  animarEntradaPerfil({
    trigger: SalidaExperiencia,
    ocultarElemento: ClickExperiencia,
    salida: { x: 200, y: 200 },
    entrada: { x: -200, y: -200 },
  });

  function aplicarEstilo({ oscuro, fondo, colorTexto, mostrarImagen }) {
    EstiloOscuro = oscuro;
    portafolioHome.style.background = fondo;
    document.body.style.color = colorTexto;
    document.body.style.borderColor = colorTexto;
    MyBodyImagen.style.display = mostrarImagen ? "flex" : "none";
    if (EstiloOscuro) {
      progresoScroll.style.background = "#39FF14"; // Verde neón
      ProyectoPropio.forEach((element) => {
        element.style.borderColor = "#39FF14";
      });
      cardInt.style.backgroundImage = `linear-gradient(
        to right bottom,
        #000000,
        #003300,
        #006600,
        #00aa00,
        #39ff14,
        #00aa00,
        #006600,
        #003300,
        #000000
      )`;
    } else {
      progresoScroll.style.background = "#3300ff"; // Azul fuerte
      ProyectoPropio.forEach((element) => {
        element.style.borderColor = "white";
      });
      cardInt.style.backgroundImage = `linear-gradient(
        to right bottom,
        #ff0000,
        #ff0045,
        #ff0078,
        #ea00aa,
        #b81cd7,
        #8a3ad6,
        #5746cf,
        #004ac2,
        #003d94,
        #002e66,
        #001d3a,
        #020812
      )`;
    }
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
