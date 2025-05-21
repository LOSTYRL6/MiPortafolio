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
  const cover = document.querySelectorAll(".cover");
  const book = document.querySelectorAll(".book");
  const tag = document.querySelectorAll(".Tag");
  const ExperincienaMios = document.querySelectorAll(".ExperincienaMios");
  const linea = document.querySelector(".liniaDeTiempoExperiencia");
  const InformacionExtra2 = document.querySelectorAll(".InformacionExtra2");
  const InformacionExtra = document.querySelectorAll(".InformacionExtra");

  function animarSalidaPerfil({
    trigger,
    mostrarElemento,
    movimiento = { x: 0, y: 200 },
    MyBody,
    HacerAnimacion,
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
            onComplete: () => {
              if (HacerAnimacion === true) {
                ExperincienaMios.forEach((el, i) => {
                  el.style.opacity = "1"; // 👈 manual si quieres
                  gsap.from(el, {
                    opacity: 0,
                    y: 30,
                    duration: 1,
                    ease: "power2.out",
                  });
                });
              }
            },
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
    HacerAnimacion: true,
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

    // Estilos condicionales
    const estilos = {
      oscuro: {
        progresoScroll: "#39FF14",
        linea: "10px dashed #00aa00",
        borderColorProyecto: "#39FF14",
        cardBackground: `linear-gradient(to right bottom, #000000, #003300, #006600, #00aa00, #39ff14, #00aa00, #006600, #003300, #000000)`,
        coverBg: "#006600",
        coverShadow: "1px 1px 12px #39ff14",
        bookBg: "black",
        bookShadow: "1px 1px 12px #39ff14",
        experienciaBg: "rgba(0, 0, 0, 0.92)",
        experienciaColor: "#39ff14",
        tagBg: `linear-gradient(to bottom right, #39ff14, #00aa00)`,
        hoverShadow: "0 0 25px rgba(0, 255, 0, 0.9)",
      },
      claro: {
        progresoScroll: "#3300ff",
        linea: "10px dashed #ccc",
        borderColorProyecto: "white",
        cardBackground: `linear-gradient(to right bottom, #ff0000, #ff0045, #ff0078, #ea00aa, #b81cd7, #8a3ad6, #5746cf, #004ac2, #003d94, #002e66, #001d3a, #020812)`,
        coverBg: "rgb(48, 90, 187)",
        coverShadow: "1px 1px 12px black",
        bookBg: "rgb(245, 245, 245)",
        bookShadow: "1px 1px 12px black",
        experienciaBg: "rgba(182, 182, 182, 0.542)",
        experienciaColor: "black",
        tagBg: `linear-gradient(to bottom right, rgb(24, 71, 190), rgb(46, 46, 152))`,
        hoverShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
      },
    };

    const tema = oscuro ? estilos.oscuro : estilos.claro;

    progresoScroll.style.background = tema.progresoScroll;
    linea.style.borderLeft = tema.linea;

    ProyectoPropio.forEach(
      (el) => (el.style.borderColor = tema.borderColorProyecto)
    );
    cardInt.style.backgroundImage = tema.cardBackground;

    cover.forEach((el) => {
      el.style.background = tema.coverBg;
      el.style.boxShadow = tema.coverShadow;
    });

    book.forEach((el) => {
      el.style.background = tema.bookBg;
      el.style.boxShadow = tema.bookShadow;
    });

    ExperincienaMios.forEach((el) => {
      el.style.background = tema.experienciaBg;
      el.style.color = tema.experienciaColor;

      el.onmouseenter = () => {
        el.style.animation = "none";
        el.style.transform = "scale(1.05)";
        el.style.boxShadow = tema.hoverShadow;
      };

      el.onmouseleave = () => {
        el.style.animation = "glowPulse 2s infinite";
        el.style.transform = "scale(1)";
        el.style.boxShadow = "";
      };
    });

    [...InformacionExtra, ...InformacionExtra2].forEach((el) => {
      el.style.background = tema.experienciaBg;
    });

    tag.forEach((el) => {
      el.style.background = tema.tagBg;
    });
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
