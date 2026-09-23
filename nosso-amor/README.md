# ❤️ Nossa História

Site pessoal para guardar a vossa história de namoro — fotos, vídeos, memórias e um contador em tempo real de quanto tempo estão juntos.

Esta é a **Versão 1**: Início, Nossa História, Nosso Tempo, Fotos, Vídeos e Vídeo Especial. As páginas de Mensagens, Memórias, Surpresa, Música, Lugares e Aniversário ficam para a Versão 2, seguindo o mesmo padrão destes ficheiros.

## 1. Antes de publicar — edita `js/config.js`

Abre `js/config.js` e substitui:

```js
pessoa1: "Adilson",
pessoa2: "Nome dela",
dataInicio: "2025-01-01T00:00:00",   // ano-mês-diaThora:minuto:segundo
frase: "A nossa história começou aqui",
```

Também podes editar a lista `historia` no mesmo ficheiro para escrever os capítulos reais da vossa história (data, título, texto e, opcionalmente, uma foto).

## 2. Adicionar fotos e vídeos

- Fotos: coloca os ficheiros em `imagens/` e edita `fotos.html` — copia um bloco `<img class="foto-item" ...>` para cada foto nova.
- Vídeos: coloca os `.mp4` em `videos/` e edita `videos.html` da mesma forma.
- Vídeo especial: substitui `videos/especial.mp4` pelo teu ficheiro (o nome do ficheiro tem de ser exatamente esse, ou muda o caminho dentro de `especial.html`).
- Vídeos grandes ficam pesados num repositório Git — para muitos vídeos ou ficheiros grandes, considera um serviço externo (ex: YouTube não listado, Google Drive, Cloudinary) e troca o `src` do `<video>` por esse link.

## 3. Testar localmente

Basta abrir `index.html` num browser. Para testar o comportamento exatamente como no GitHub Pages, podes correr um servidor simples:

```bash
python3 -m http.server 8000
```

e visitar `http://localhost:8000`.

## 4. Publicar no GitHub Pages

1. Cria um repositório novo no GitHub (pode ser privado, se preferires).
2. Envia esta pasta inteira para o repositório:
   ```bash
   git init
   git add .
   git commit -m "Primeira versão do site"
   git branch -M main
   git remote add origin https://github.com/TEU-UTILIZADOR/TEU-REPOSITORIO.git
   git push -u origin main
   ```
3. No GitHub: **Settings → Pages → Source → branch `main` → pasta `/root`**.
4. O site fica disponível em `https://TEU-UTILIZADOR.github.io/TEU-REPOSITORIO/`.

## 5. Privacidade

Um repositório **privado** no GitHub não consegue publicar no GitHub Pages gratuitamente sem plano pago. Se a privacidade for importante, as opções descritas no plano original são:

- **Opção simples**: repositório público, mas com um endereço que só vocês conhecem (não o partilhes em lado nenhum).
- **Tela de senha**: adicionar um ecrã simples de password em JavaScript antes de mostrar o conteúdo (proteção básica, não é segurança real — qualquer pessoa com conhecimentos técnicos consegue contornar).
- **Login real**: Firebase Authentication + Firebase Storage — arquitetura mais robusta, fica para uma fase posterior (Versão 3 do plano).

## Estrutura do projeto

```
nosso-amor/
├── index.html          Página inicial (hero + contador + atalhos)
├── historia.html        Linha do tempo
├── tempo.html            Contador detalhado + próximo aniversário
├── fotos.html            Galeria com lightbox
├── videos.html           Cartões de vídeo
├── especial.html         Experiência do vídeo especial
├── css/
│   ├── style.css         Cores, tipografia, layout
│   ├── responsive.css    Adaptação mobile/tablet
│   └── animations.css    Animações discretas
├── js/
│   ├── config.js         ← EDITA AQUI nomes, data e textos
│   ├── contador.js       Lógica do contador (anos/meses/dias/... + aniversário)
│   ├── galeria.js        Lightbox da galeria de fotos
│   └── geral.js          Menu mobile, scroll reveal, dados dinâmicos
├── imagens/               As vossas fotos
├── videos/                Os vossos vídeos
└── audio/                 Música (Versão 2)
```

## Próximos passos (Versão 2 e 3)

Segue o mesmo padrão destes ficheiros para acrescentar, quando quiseres:

- `mensagens.html` — usa o objeto `mensagens` já preparado em `config.js`
- `memorias.html`, `surpresa.html`, `coisas-que-amo.html`
- Player de música (`audio/`)
- Página de lugares importantes
- Mais tarde: login com Firebase e um pequeno painel `/admin` para adicionares conteúdo sem mexer em HTML
