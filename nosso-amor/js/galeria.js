/* ============================================================
   GALERIA DE FOTOS — lightbox com navegação
   Basta que cada <img> da galeria tenha a classe "foto-item"
   e, opcionalmente, um atributo data-legenda="texto"
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const fotos = Array.from(document.querySelectorAll(".foto-item"));
  if (fotos.length === 0) return;

  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.innerHTML = `
    <button class="lightbox-fechar" aria-label="Fechar">&times;</button>
    <button class="lightbox-nav lightbox-anterior" aria-label="Foto anterior">&#8249;</button>
    <img class="lightbox-img" src="" alt="">
    <p class="lightbox-legenda"></p>
    <button class="lightbox-nav lightbox-seguinte" aria-label="Foto seguinte">&#8250;</button>
  `;
  document.body.appendChild(overlay);

  const imgEl = overlay.querySelector(".lightbox-img");
  const legendaEl = overlay.querySelector(".lightbox-legenda");
  let indiceAtual = 0;

  function abrir(i) {
    indiceAtual = i;
    imgEl.src = fotos[i].src;
    legendaEl.textContent = fotos[i].getAttribute("data-legenda") || "";
    overlay.classList.add("aberto");
    document.body.style.overflow = "hidden";
  }

  function fechar() {
    overlay.classList.remove("aberto");
    document.body.style.overflow = "";
  }

  function mudar(delta) {
    indiceAtual = (indiceAtual + delta + fotos.length) % fotos.length;
    abrir(indiceAtual);
  }

  fotos.forEach((foto, i) => foto.addEventListener("click", () => abrir(i)));
  overlay.querySelector(".lightbox-fechar").addEventListener("click", fechar);
  overlay.querySelector(".lightbox-anterior").addEventListener("click", () => mudar(-1));
  overlay.querySelector(".lightbox-seguinte").addEventListener("click", () => mudar(1));
  overlay.addEventListener("click", e => { if (e.target === overlay) fechar(); });

  document.addEventListener("keydown", e => {
    if (!overlay.classList.contains("aberto")) return;
    if (e.key === "Escape") fechar();
    if (e.key === "ArrowLeft") mudar(-1);
    if (e.key === "ArrowRight") mudar(1);
  });
});
