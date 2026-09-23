/* ============================================================
   CONFIGURAÇÃO CENTRAL DO SITE
   Edita apenas este ficheiro para atualizar nomes, data e textos
   em TODO o site — nenhuma página precisa de ser tocada.
   ============================================================ */

const relacionamento = {
  // Nomes dos dois
  pessoa1: "Adilson Victor",
  pessoa2: "Lukenia Francisco",

  // Data e hora exatas em que começaram (formato: "AAAA-MM-DDTHH:MM:SS")
  dataInicio: "2025-11-24T16:29:30",

  // Frase principal da página inicial
  frase: "A nossa história começou aqui, num encontro que parecia apenas mais um, mas que acabou por mudar tudo",

  // Frase final (rodapé / última secção)
  fraseFinal: "Esta história ainda está a ser escrita...",

  // Foto de capa (coloca o ficheiro em imagens/ e atualiza o caminho)
  fotoCapa: "imagens/capa.jpg",

  // Cor de destaque, caso queiras trocar rapidamente (ver também css/style.css)
  corDestaque: "#c9974a"
};

/* Linha do tempo da "Nossa História" — adiciona quantos acontecimentos quiseres */
const historia = [
 {
    data: "2025-11-24",
    titulo: "O dia em que tudo começou",
    texto: "Tudo começou dentro de um táxi. voce entrou primeiro, e naquele momento éramos apenas dois desconhecidos a partilhar o mesmo caminho. Durante a viagem, não trocámos uma palavra. Não houve conversa, não houve apresentação, nem sequer imaginávamos que aquele simples momento acabaria por se tornar o primeiro capítulo da nossa história. Quando descemos do táxi, porém, alguma coisa mudou. Perguntei-lhe para onde ia, e ela respondeu que estava a caminho de Cacuaco. Eu disse que também ia para lá. Parecia apenas uma coincidência, uma simples resposta no meio de um dia normal. Mas foi a partir dali que os nossos caminhos começaram a aproximar-se. E então aconteceu um daqueles pequenos gestos que, naquele momento, pareciam insignificantes: segurei a mão dela para atravessarmos a estrada. Talvez naquele instante nenhum de nós soubesse o significado daquele gesto. Éramos apenas dois desconhecidos que acabavam de se encontrar. Mas hoje, olhando para trás, percebo que aquela mão que segurei foi o começo de algo que mudou a minha vida. O táxi ficou para trás, a estrada foi atravessada, mas a nossa história tinha acabado de começar. ❤️",
    foto: ""
},
  {
    data: "2025-11-25",
    titulo: "Primeiro encontro",
    texto: "foi algo muito especial pra ambos porque parecia que estavamos a viver algo que ja estav pre destinado,",
    foto: ""
  },

];

/* Mensagens por categoria — usadas em mensagens.html (Versão 2) */
const mensagens = {
  triste: [
    "Está tudo bem sentires-te assim. Estou aqui contigo, sempre."
  ],
  saudade: [
    "A saudade só existe porque o que temos é real."
  ],
  boanoite: [
    "Dorme bem, amor. Amanhã continuamos a nossa história."
  ],
  bomdia: [
    "Bom dia! Que hoje seja mais um capítulo bonito para nós."
  ],
  rir: [
    "Lembra-te daquele dia em que nos rimos tanto que doeu a barriga."
  ],
  semmotivo: [
    "Só queria que soubesses que penso em ti agora mesmo."
  ]
};
