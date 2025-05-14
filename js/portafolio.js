document.addEventListener("DOMContentLoaded", function () {
  const Bienvenido = document.getElementById("Bienvenido");
  const BienvenidoTexto = document.getElementById("BienvenidoTexto");
  const Bienvenido2 = document.getElementById("Bienvenido2");
  const PortafolioHome = document.querySelector(".PortafolioHome");
  const MiPerfil = document.querySelector(".MiPerfil");
  const myImagen = document.getElementById("myImagen");
  const MyNombre = document.getElementById("MyNombre");
  const Mybody = document.querySelector(".Mybody");
  const TextodespuesdelTexto = document.querySelector(".TextodespuesdelTexto");
  const misOpciones = document.querySelector(".misOpciones");

  if (Bienvenido && BienvenidoTexto) {
    gsap.fromTo(
      Bienvenido,
      { scaleY: 0, scaleX: 0, opacity: 0 },
      {
        scaleY: 1,
        scaleX: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        onComplete: animarTexto,
      }
    );

    Bienvenido.addEventListener("click", () => {
      // Oculta el texto principal
      gsap.to(BienvenidoTexto, {
        opacity: 0,
        y: -30,
        duration: 0.5,
        onComplete: () => {
          gsap.to(Bienvenido2, {
            opacity: 0,
            y: -30,
            duration: 0.5,
            onComplete: () => {
              BienvenidoTexto.style.display = "none";
            },
          });
        },
      });

      // Expande el contenedor
      gsap.to(Bienvenido, {
        width: "100%",
        height: "100%",
        duration: 2,
        ease: "power2.out",
        onComplete: () => {
          gsap.fromTo(
            TextodespuesdelTexto,
            {
              display: "block",
              scaleX: 0,
              opacity: 0,
              transformOrigin: "center",
            },
            {
              scaleX: 1,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            }
          );

          // Espera un momento para que se vea el texto, luego cambia al menú
          setTimeout(MostrarElVerdaderoMenu, 1500);
        },
      });
    });

    function MostrarElVerdaderoMenu() {
      // Cambia el fondo del menú principal
      PortafolioHome.style.background =
        "linear-gradient(to bottom right, rgb(47, 154, 14), rgb(46, 46, 152))";
      PortafolioHome.style.backgroundSize = "100% 100%";

      // Oculta el texto "Mostrando el Portafolio"
      gsap.to(TextodespuesdelTexto, {
        scaleX: 0,
        opacity: 0,
        transformOrigin: "center",
        duration: 1,
        ease: "power2.in",
        onComplete: () => {
          TextodespuesdelTexto.style.display = "none";
          Bienvenido.style.border = "none";
          // Contrae el contenedor de bienvenida
          gsap.to(Bienvenido, {
            scale: 0,
            borderRadius: "70%",
            duration: 2,
            ease: "power2.inOut",
            transformOrigin: "center center",
            onComplete: () => {
              document.body.style.height = "100%";
              Bienvenido.style.display = "none";
              MiPerfil.style.display = "flex";

              // Muestra el perfil con animación
              gsap.from(MiPerfil, {
                opacity: 0,
                scaleX: 0,
                scaleY: 0,
                transformOrigin: "top left",
                duration: 0.5,
                ease: "power2.out",
                onComplete: () => {
                  MyNombre.style.opacity = "1";
                  gsap.from(MyNombre, {
                    scaleX: 2,
                    scaleY: 2,
                    transformOrigin: "center",
                    duration: 1,
                    onComplete: () => {
                      misOpciones.style.opacity = "1";
                      gsap.from(misOpciones, {
                        opacity: 0,
                        scaleY: 0,
                        transformOrigin: "top",
                        duration: 1,
                        ease: "power2.out",
                      });
                    },
                  });
                },
              });
            },
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
          onComplete: () => {
            Bienvenido2.style.opacity = "1";
            gsap.from(Bienvenido2, {
              opacity: 0,
              y: 20,
              duration: 0.5,
              ease: "power2.out",
            });
          },
        }
      );
    }
  }
});
