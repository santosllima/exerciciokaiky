let inscritos = 0;
let MostraResultado = document.querySelector("#resultado");

function inscrever() {
    inscritos++;
    let times = Math.floor(inscritos / 5);

    MostraResultado.innerHTML = `
        <p>Número de inscritos: ${inscritos}</p>
        <p>Número de times: ${times}</p>`;

    if (times >= 4) {
        alert("Já é possível iniciar o campeonato, pois temos 4 times.");
    }
}