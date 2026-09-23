/* ============================================================
   PLAYER DE MÚSICA DE FUNDO
   Toca uma música baixinho em loop, com um botão flutuante para
   ligar/desligar. Cria tudo sozinho (som + botão + estilo).
   A música continua de onde parou ao mudar de página.
   ============================================================ */

(function () {
  const FICHEIRO_MUSICA = "audio/ARTE_DE_TE_AMAR.mp3"; // muda aqui para trocar de música
  const VOLUME = 0.25; // 0 (mudo) a 1 (máximo)

  const CHAVE_TEMPO = "musica_tempo";
  const CHAVE_ESTADO = "musica_a_tocar";

  function lerStorage(chave) {
    try { return localStorage.getItem(chave); } catch (e) { return null; }
  }
  function gravarStorage(chave, valor) {
    try { localStorage.setItem(chave, valor); } catch (e) {}
  }

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
    audio.preload = "auto";
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

    // Retomar o ponto onde a música ficou na página anterior
    const tempoGuardado = parseFloat(lerStorage(CHAVE_TEMPO));
    if (!isNaN(tempoGuardado) && tempoGuardado > 0) {
      audio.addEventListener("loadedmetadata", function () {
        if (tempoGuardado < audio.duration) audio.currentTime = tempoGuardado;
      });
    }

    function ligar() {
      return audio.play().then(function () {
        botao.innerHTML = "🔊";
        gravarStorage(CHAVE_ESTADO, "1");
      });
    }

    function desligar() {
      audio.pause();
      botao.innerHTML = "🔇";
      gravarStorage(CHAVE_ESTADO, "0");
    }

    botao.addEventListener("click", function () {
      if (audio.paused) {
        ligar().catch(function (erro) {
          console.log("Não foi possível tocar a música:", erro);
        });
      } else {
        desligar();
      }
    });

    // Se estava a tocar na página anterior, tenta continuar
    if (lerStorage(CHAVE_ESTADO) === "1") {
      ligar().catch(function () {
        // O navegador bloqueou o arranque automático:
        // começa no primeiro toque ou clique em qualquer sítio
        const arrancar = function () {
          ligar().catch(function () {});
          document.removeEventListener("click", arrancar);
          document.removeEventListener("touchstart", arrancar);
          document.removeEventListener("keydown", arrancar);
        };
        document.addEventListener("click", arrancar);
        document.addEventListener("touchstart", arrancar);
        document.addEventListener("keydown", arrancar);
      });
    }

    // Guardar o tempo atual para a próxima página
    function guardarTempo() {
      gravarStorage(CHAVE_TEMPO, String(audio.currentTime));
    }
    setInterval(guardarTempo, 1000);
    window.addEventListener("pagehide", guardarTempo);
    window.addEventListener("beforeunload", guardarTempo);
  });
})();
