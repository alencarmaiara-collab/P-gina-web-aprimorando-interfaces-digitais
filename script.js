
  let totalCurtidas = 0;

function alternarTema() {
  const html = document.documentElement;
  const themeIcon = document.getElementById("theme-icon");
  const themeText = document.getElementById("theme-text");

  // Verifica se o tema atual é "light"
  const isLight = html.getAttribute("data-theme") === "light";
  const novoTema = isLight ? "dark" : "light";

  // Atualiza o atributo do HTML e o texto/ícone em poucas linhas
  html.setAttribute("data-theme", novoTema);
  themeIcon.textContent = isLight ? "☀️" : "🌙";
  themeText.textContent = isLight ? "Modo Claro" : "Modo Escuro";
}

function curtir() {
  totalCurtidas++;
  const likesElement = document.getElementById("likes");
  
  // Utiliza a API de Pluralização nativa do JS (Intl.PluralRules) ou operador ternário
  const textoCurtida = totalCurtidas === 1 ? "curtida" : "curtidas";
  likesElement.textContent = `${totalCurtidas} ${textoCurtida}`;
}