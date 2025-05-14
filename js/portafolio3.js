document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".conocimientosFrontend");
  const cubo = document.querySelector(".cuboDelFronted");

  container.addEventListener("scroll", function () {
    const scrollTop = container.scrollTop;
    const maxScroll = container.scrollHeight - container.clientHeight;
    const maxMove = container.clientWidth - cubo.clientWidth;

    const progress = scrollTop / maxScroll; // de 0 a 1
    const x = progress * maxMove;

    cubo.style.transform = `translate(${x}px, -50%)`;
  });
});
