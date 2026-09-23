/* ============================================================
   COMPORTAMENTO GERAL: menu mobile, ano no rodapé,
   revelação suave dos elementos ao fazer scroll
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // Menu mobile
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("aberto");
      toggle.classList.toggle("ativo");
    });
    nav.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => {
        nav.classList.remove("aberto");
        toggle.classList.remove("ativo");
      })
    );
  }

  // Marca o link ativo do menu
  const aqui = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.getAttribute("href") === aqui) a.classList.add("ativo-link");
  });

  // Nomes dinâmicos (a partir de config.js), onde existirem no HTML
  if (typeof relacionamento !== "undefined") {
    document.querySelectorAll("[data-nome1]").forEach(n => n.textContent = relacionamento.pessoa1);
    document.querySelectorAll("[data-nome2]").forEach(n => n.textContent = relacionamento.pessoa2);
    document.querySelectorAll("[data-frase]").forEach(n => n.textContent = relacionamento.frase);
    document.querySelectorAll("[data-frase-final]").forEach(n => n.textContent = relacionamento.fraseFinal);
  }

  // Revelar elementos suavemente ao entrar no ecrã
  const reveals = document.querySelectorAll(".revelar");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visivel");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach(el => observer.observe(el));
});
