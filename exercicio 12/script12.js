function clique() {

    let num = Number(window.prompt("Digite um número:"));
    let contador = 1;
    let saida = "";

    while (contador <= 10) {
        let resultado = num * contador;
      saida+= `${num} x ${contador} = ${resultado}<br>;`
        contador++;
    }

    document.getElementById("resultado").innerHTML=saida
}