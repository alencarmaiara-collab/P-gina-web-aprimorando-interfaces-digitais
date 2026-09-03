
  




let quantidadeLikes = 0;


function curtir() {
    quantidadeLikes++;
    const elementoLikes = document.getElementById('likes');
    elementoLikes.textContent = quantidadeLikes;
}

function alternarTema() {
    const html = document.documentElement;
    const temaAtual = html.getAttribute('data-theme');
    const novoTema = temaAtual === 'dark' ? 'light' : 'dark';
    
    
    html.setAttribute('data-theme', novoTema);
    

    const icone = document.getElementById('theme-icon');
    const texto = document.getElementById('theme-text');
    
    if (novoTema === 'dark') {
        icone.textContent = '☀️';
        texto.textContent = 'Modo Claro';
    } else {
        icone.textContent = '🌙';
        texto.textContent = 'Modo Escuro';
    }
}