/* ============================================================
   SISTEMA DO CONTADOR
   Calcula corretamente anos, meses, dias, horas, minutos e
   segundos entre a dataInicio e agora — considerando meses de
   diferentes tamanhos e anos bissextos (usa a aritmética real
   de calendário, não apenas divisões por 365).
   ============================================================ */

function calcularDiferenca(inicio, agora) {
  // Nº de meses inteiros entre as duas datas, encontrado por uma
  // "âncora" que avança mês a mês a partir de "inicio" sem
  // ultrapassar "agora" — isto lida corretamente com dias 29/30/31
  // ao atravessar meses mais curtos (ex: 31 Jan -> Fevereiro) e com
  // anos bissextos, porque usa sempre datas reais do calendário.
  let totalMeses = (agora.getFullYear() - inicio.getFullYear()) * 12 + (agora.getMonth() - inicio.getMonth());

  let ancora = new Date(inicio.getFullYear(), inicio.getMonth() + totalMeses, inicio.getDate(), inicio.getHours(), inicio.getMinutes(), inicio.getSeconds());
  while (ancora > agora) {
    totalMeses--;
    ancora = new Date(inicio.getFullYear(), inicio.getMonth() + totalMeses, inicio.getDate(), inicio.getHours(), inicio.getMinutes(), inicio.getSeconds());
  }

  const anos = Math.floor(totalMeses / 12);
  const meses = totalMeses % 12;

  let restoMs = agora - ancora;
  const dias = Math.floor(restoMs / 86400000);
  restoMs -= dias * 86400000;
  const horas = Math.floor(restoMs / 3600000);
  restoMs -= horas * 3600000;
  const minutos = Math.floor(restoMs / 60000);
  restoMs -= minutos * 60000;
  const segundos = Math.floor(restoMs / 1000);

  return { anos, meses, dias, horas, minutos, segundos };
}

function pad(n) {
  return String(n).padStart(2, "0");
}

function iniciarContadorPrincipal(elId, dataInicioStr) {
  const el = document.getElementById(elId);
  if (!el) return;
  const inicio = new Date(dataInicioStr);

  function atualizar() {
    const agora = new Date();
    const { anos, meses, dias, horas, minutos, segundos } = calcularDiferenca(inicio, agora);

    const totalMs = agora - inicio;
    const totalDias = Math.floor(totalMs / 86400000);
    const totalHoras = Math.floor(totalMs / 3600000);
    const totalMinutos = Math.floor(totalMs / 60000);
    const totalSegundos = Math.floor(totalMs / 1000);

    el.querySelectorAll("[data-unit]").forEach(node => {
      const unit = node.getAttribute("data-unit");
      const map = { anos, meses, dias, horas, minutos, segundos, totalDias, totalHoras, totalMinutos, totalSegundos };
      node.textContent = unit.startsWith("total") ? map[unit].toLocaleString("pt-PT") : pad(map[unit]);
    });
  }

  atualizar();
  setInterval(atualizar, 1000);
}

/* Contador para o próximo aniversário de namoro */
function iniciarContadorAniversario(elId, dataInicioStr) {
  const el = document.getElementById(elId);
  if (!el) return;
  const inicio = new Date(dataInicioStr);

  function proximoAniversario(agora) {
    let anoAlvo = agora.getFullYear();
    let candidato = new Date(anoAlvo, inicio.getMonth(), inicio.getDate(), inicio.getHours(), inicio.getMinutes(), inicio.getSeconds());
    if (candidato <= agora) {
      candidato = new Date(anoAlvo + 1, inicio.getMonth(), inicio.getDate(), inicio.getHours(), inicio.getMinutes(), inicio.getSeconds());
    }
    return candidato;
  }

  function atualizar() {
    const agora = new Date();
    const alvo = proximoAniversario(agora);
    const diffMs = alvo - agora;

    if (diffMs <= 1000) {
      const anosCompletos = alvo.getFullYear() - inicio.getFullYear();
      el.innerHTML = `<p class="aniversario-msg">🎉 FELIZ ANIVERSÁRIO DA NOSSA HISTÓRIA ❤️<br>Hoje fazemos ${anosCompletos} ano${anosCompletos === 1 ? "" : "s"}!</p>`;
      return;
    }

    const dias = Math.floor(diffMs / 86400000);
    const horas = Math.floor((diffMs % 86400000) / 3600000);
    const minutos = Math.floor((diffMs % 3600000) / 60000);
    const segundos = Math.floor((diffMs % 60000) / 1000);

    el.querySelectorAll("[data-unit]").forEach(node => {
      const unit = node.getAttribute("data-unit");
      const map = { dias, horas, minutos, segundos };
      node.textContent = pad(map[unit]);
    });
  }

  atualizar();
  setInterval(atualizar, 1000);
}
