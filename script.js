let totalCurtidas = 0;

        function alternarTema() {
            const html = document.documentElement;
            const temaAtual = html.getAttribute("data-theme");
            const themeIcon = document.getElementById("theme-icon");
            const themeText = document.getElementById("theme-text");

            if (temaAtual === "light") {
                html.setAttribute("data-theme", "dark");
                themeIcon.textContent = "☀️";
                themeText.textContent = "Modo Claro";
            } else {
                html.setAttribute("data-theme", "light");
                themeIcon.textContent = "🌙";
                themeText.textContent = "Modo Escuro";
            }
        }

        function curtir() {
            totalCurtidas++;
            const likesElement = document.getElementById("likes");
            likesElement.textContent = `${totalCurtidas} ${totalCurtidas === 1 ? 'curtida' : 'curtidas'}`;
        }
    