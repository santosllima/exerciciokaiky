function subtrair () {
 let idade = 0;
let ano = 0;
 
  ano = Number(window.prompt("Digite seu ano de nacimento"));
  idade =2025 - ano

  alert("sua idade é " + idade);

  if(idade > 18) {
    alert("voce ja pode tirar a habilitacao");   
  } else {
    let dif = 18 - idade
  alert ("voce não pode tirar a carteira de habilitaçao")
  }
   
}