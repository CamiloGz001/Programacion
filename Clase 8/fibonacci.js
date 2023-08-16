const prompt = require("prompt-sync")({sigint: true});

function fibonacciSecuencia(hastaValor) {
    let numero1 = 0;
    let numero2 = 1;
  
    console.log(numero1);
    console.log(numero2);
  
    while (numero2 <= hastaValor) {
      const siguienteNumero = numero1 + numero2;
      if (siguienteNumero <= hastaValor) {
        console.log(siguienteNumero);
      }
      numero1 = numero2;
      numero2 = siguienteNumero;
    }
  }
  
  const valorIngresado = parseInt(prompt("Ingresa un valor para la secuencia de Fibonacci:"));
  console.log("Secuencia de Fibonacci hasta", valorIngresado);
  fibonacciSecuencia(valorIngresado);
  