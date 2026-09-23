/* ============================================================
   PLAYER DE MÚSICA DE FUNDO
   Toca uma música baixinho em loop, com um botão flutuante para
   ligar/desligar. Cria tudo sozinho (som + botão + estilo) —
   só precisas de incluir este script na página.
   ============================================================ */

(function () {
  const FICHEIRO_MUSICA = "audio/ARTE_DE_TE_AMAR.mp3"; // muda aqui para trocar de música
  const VOLUME = 0.25; // 0 (mudo) a 1 (máximo)

  document.addEventListener("DOMContentLoaded", function () {
    const cor =
      typeof relacionamento !== "undefined" && relacionamento.corDestaque
        ? relacionamento.corDestaque
        : "#c9974a";

    const audio = document.createElement("audio");
    audio.src = FICHEIRO_MUSICA;
    audio.loop = true;
    audio.volume = VOLUME;
    audio.id = "musica-fundo";
    document.body.appendChild(audio);

    const botao = document.createElement("button");
    botao.id = "botao-musica";
    botao.setAttribute("aria-label", "Ligar ou desligar música");
    botao.innerHTML = "🔇";
    document.body.appendChild(botao);

    const estilo = document.createElement("style");
    estilo.textContent = `
      #botao-musica {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: ${cor};
        color: #fff;
        font-size: 1.3rem;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0,0,0,0.35);
        z-index: 999;
        transition: transform 0.2s ease;
      }
      #botao-musica:hover { transform: scale(1.08); }
    `;
    document.head.appendChild(estilo);

    let tocando = false;

    botao.addEventListener("click", function () {
      if (tocando) {
        audio.pause();
        botao.innerHTML = "🔇";
      } else {
        audio.play().catch(function (erro) {
          console.log("Não foi possível tocar a música automaticamente:", erro);
        });
        botao.innerHTML = "🔊";
      }
      tocando = !tocando;
    });
  });
})();
