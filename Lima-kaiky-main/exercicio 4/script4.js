function media() {
 let nota1 = Number(window.prompt("digite a primeira nota"))
 let nota2 = Number(window.prompt("digite a segunda nota"))
 let nota3 = Number(window.prompt("digite a terceira nota"))

 let media = (nota1 + nota2 + nota3) / 3;



 if(media > 59) {
    let resultado = document.querySelector("#resultado");
resultado.innerHTML = `<p><h2>voçê já esta na media<h2></ P>`
    

  } else {
    let sobra = 59 - media
    let resultado = document.querySelector("#resultado");
resultado.innerHTML = `<p><h2>voçê não esta na media ainda falta ${sobra}<h2></ P>`


  }

}