//calculadora simples com as 5 operações basicas:
//Adição, Subtração, Multiplicação, Divisão e divisão sobre a sobra;
let num1;
let num2;
let resultado
function sobra() {
   num1 = Number(window.prompt("digite o primeiro numero"))
   num2 = Number(window.prompt("digite o segundo numero"))

  resultado = num1 % num2
  numero = resultado % 2;
  alert("O resultado é" + resultado + ",")
  if (numero == 0) {
    alert ("Par");
  }else {
    alert ("impar")
  }
}
function Multiplicação() {
   num1 = Number(window.prompt("digite o primeiro numero"))
   num2 = Number(window.prompt("digite o segundo numero"))

  resultado = num1 * num2
  numero = resultado % 2;
  alert("O resultado é" + resultado + ",")
  if (numero == 0) {
    alert ("Par");
  }else {
    alert ("impar")
  }
}
function Adição() {
   num1 = Number(window.prompt("digite o primeiro numero"))
   num2 = Number(window.prompt("digite o segundo numero"))

  resultado = num1 + num2
  numero = resultado % 2;
  alert("O resultado é" + resultado + ",")
  if (numero == 0) {
    alert ("Par");
  }else {
    alert ("impar")
  }
}
function Subtração() {
   num1 = Number(window.prompt("digite o primeiro numero"))
   num2 = Number(window.prompt("digite o segundo numero"))

  resultado = num1 - num2
  numero = resultado % 2;
  alert("O resultado é" + resultado + ",")
  if (numero == 0) {
    alert ("Par");
  }else {
    alert ("impar")
  }
}
function divisão() {
   num1 = Number(window.prompt("digite o primeiro numero"))
   num2 = Number(window.prompt("digite o segundo numero"))

  resultado = num1 / num2
  numero = resultado % 2;
  alert("O resultado é" + resultado + ",")
  if (numero == 0) {
    alert ("Par");
  }else {
    alert ("impar")
  }
}