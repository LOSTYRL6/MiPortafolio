document.addEventListener("DOMContentLoaded", function () {
  const Bienvenido = document.getElementById("Bienvenido");
  const BienvenidoTexto = document.getElementById("BienvenidoTexto");
  const PortafolioHome = document.querySelector(".PortafolioHome");
  const MiPerfil = document.querySelector(".MiPerfil");
  const Mybody = document.querySelector(".Mybody");

  if (Bienvenido && BienvenidoTexto) {
    // Animación del contenedor principal
    gsap.fromTo(
      Bienvenido,
      { scaleY: 0, scaleX: 0, opacity: 0 },
      {
        scaleY: 1,
        scaleX: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        onComplete: animarTexto, // Después del contenedor, animar letras
      }
    );

    Bienvenido.addEventListener("click", () => {
      gsap.to(BienvenidoTexto, {
        opacity: 0,
        y: -30,
        duration: 0.5,
        onComplete: () => {
          BienvenidoTexto.style.display = "none";
        },
      });

      gsap.to(Bienvenido, {
        width: "100%",
        height: "100%",
        duration: 2,
        ease: "power2.out",
        onComplete: MostrarElVerdaderoMenu,
      });
    });
  }

  function MostrarElVerdaderoMenu() {
    PortafolioHome.style.background =
      "linear-gradient(to bottom right, #8b00ff, #00e571)";

    gsap.to(Bienvenido, {
      width: "0%",
      height: "0%",
      duration: 2,
      ease: "power2.out",
      onComplete: () => {
        document.body.style.height = "100%";
        Bienvenido.style.display = "none";
        MiPerfil.style.display = "flex";
        gsap.from(MiPerfil, {
          opacity: 0,
          scaleX: 0,
          scaleY: 0,
          transformOrigin: "top left", // <-- Clave
          duration: 1,
          ease: "power2.out",
        });
      },
    });
  }

  function animarTexto() {
    const textoOriginal = BienvenidoTexto.textContent;
    BienvenidoTexto.innerHTML = ""; // Limpiar

    const letras = textoOriginal.split("");

    letras.forEach((letra) => {
      const span = document.createElement("span");
      span.textContent = letra;
      span.style.display = "inline-block";
      span.style.opacity = "0";
      BienvenidoTexto.appendChild(span);
    });
    BienvenidoTexto.style.opacity = "1";

    // Animar cada letra con GSAP
    gsap.fromTo(
      "#BienvenidoTexto span",
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      }
    );
  }
});
