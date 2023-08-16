const prompt = require("prompt-sync")({sigint: true});

function mostrarSiguientesNumeros(valor) {
    for (let i = valor + 1; i <= valor + 10; i++) {
      console.log(i);
    }
  }
  
  const numero = parseInt(prompt("Ingresa un número:"));
  console.log("Los siguientes 10 números son:");
  mostrarSiguientesNumeros(numero);