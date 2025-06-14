let cliques = 0;
const resultado = document.querySelector("#resultado p");
const emojiContainer = document.querySelector("#emoji");

function clique() {
    cliques++;

    // Atualiza o número de cliques
    resultado.textContent = cliques;

    // A cada 10 cliques, mostra o emoji
    if (cliques % 10 === 0) {
        const novoEmoji = document.createElement("div");
        novoEmoji.className = "emoji";
        novoEmoji.textContent = "(◕‿◕)";
        emojiContainer.appendChild(novoEmoji);
    }
}

function resetar() {
    cliques = 0;
    resultado.textContent = cliques;
    emojiContainer.innerHTML = ""; // Remove todos os emojis
}