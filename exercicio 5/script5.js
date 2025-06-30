let aleatorio = parseInt(Math.random () * 101);
let MostraResultado = document.querySelector("#resultado");
let jogador;
let MostraTentativa = document.querySelector("#tentativa");
let tentativas = 0

function Pensar() { 
    jogador = Number(window.prompt("Digite um numero entre 1 e 100"))

    if (jogador > 0 && jogador <100)

    tentativas = 1;


    if (jogador !=aleatorio) {
        if (jogador > aleatorio) {
            MostraResultado.innerHTML += `tentativas ${tentativas}:<p>voce tentou o numero ${jogador}, tente um numero MENOR!</p>`
        } else { 
            MostraResultado.innerHTML += `tentativas ${tentativas}:<p>voce tentou o numero ${jogador}, tente um numero MAIOR!</p>`
        }
    } else {
        MostraResultado.innerHTML = `<p>Parabens! voce acerto o numero ${aleatorio} em ${tentativas} tentativas</p>`;

    }
    }