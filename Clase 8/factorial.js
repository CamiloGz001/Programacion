const prompt = require("prompt-sync")({sigint: true});

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      let factorial = 1;
      for (let i = 2; i <= numero; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  
  const numero = parseInt(prompt("Ingresa un número entero positivo:"));
  
  if (numero < 0) {
    console.log("El número debe ser positivo.");
  } else {
    const factorial = calcularFactorial(numero);
    console.log(`El factorial de ${numero} es: ${factorial}`);
  }
  