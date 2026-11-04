// ===== Filtro de roupas (catálogo) =====
function filtrarRoupas() {
    const filtro = document.getElementById("filtro").value;
    const secaoTenis = document.getElementById("secaoTenis");
    const secaoShorts = document.getElementById("secaoShorts");
    const linhaDivisoria = document.getElementById("linhaDivisoria");

    if (filtro === "tenis") {
        secaoTenis.hidden = false;
        secaoShorts.hidden = true;
    } else if (filtro === "shorts") {
        secaoTenis.hidden = true;
        secaoShorts.hidden = false;
    } else {
        secaoTenis.hidden = false;
        secaoShorts.hidden = false;
    }

    // A linha dourada só aparece quando o filtro está em "Todos"
    linhaDivisoria.style.display = filtro === "todos" ? "" : "none";
}
// ===== Tema claro / escuro =====
function aplicarTema(tema) {
    document.documentElement.setAttribute("data-tema", tema);

    const botao = document.getElementById("botaoTema");
    if (botao) {
        botao.textContent = tema === "claro" ? "Tema escuro" : "Tema claro";
    }
}

function alternarTema(evento) {
    evento.preventDefault(); // o botão é um link href="#", isso impede de pular para o topo

    const atual = document.documentElement.getAttribute("data-tema");
    const novo = atual === "claro" ? "escuro" : "claro";

    aplicarTema(novo);
    localStorage.setItem("tema", novo); // lembra a escolha nas outras páginas
}

// Ao carregar a página: aplica o tema salvo (padrão: escuro)
aplicarTema(localStorage.getItem("tema") || "escuro");

const botaoTema = document.getElementById("botaoTema");
if (botaoTema) {
    botaoTema.addEventListener("click", alternarTema);
}