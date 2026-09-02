
  let totalCurtidas = 0;

function alternarTema() {
  const html = document.documentElement;
  const themeIcon = document.getElementById("theme-icon");
  const themeText = document.getElementById("theme-text");


  const isLight = html.getAttribute("data-theme") === "light";
  const novoTema = isLight ? "dark" : "light";


  html.setAttribute("data-theme", novoTema);
  themeIcon.textContent = isLight ? "☀️" : "🌙";
  themeText.textContent = isLight ? "Modo Claro" : "Modo Escuro";
}

function curtir() {
  totalCurtidas++;
  const likesElement = document.getElementById("likes");
  

  const textoCurtida = totalCurtidas === 1 ? "curtida" : "curtidas";
  likesElement.textContent = `${totalCurtidas} ${textoCurtida}`;
}