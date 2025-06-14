function soma(){
  let num1 =0;
  let num2 =0;

  
  num1 = Number(window.prompt('digite um numero'));
  num2 = Number(window.prompt('digite outro numero'));

  let soma = num1 + num2;

  alert (soma);
  
  if(soma >10) {
     alert("o resultado é maior que 10");
  } else {
    alert("Nao é maior que 10")
  }
} 