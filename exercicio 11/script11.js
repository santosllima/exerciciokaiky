function contar () {

    let MostraResultado = document.getElementById(resultado)

    MostraResultado.innerHTML =<p><b> Contagem Regressiva de 10 ate 1</b></p>

    let contador = 10; 
    
    while (contador >= 1) {
        let numero = contador % 2==0 ;
 
    if (numero == 0) {
         MostraResultado.innerHTML += `<mark> ${contador} </mark> &#x1F449 `;
    }else{
          MostraResultado.innerHTML += `${contador} &#x1F449 `;
    }
    contador -=1;
 }

    MostraResultado.innerHTML += `&#x1F3C1;`
}