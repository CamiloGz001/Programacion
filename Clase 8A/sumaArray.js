
const prompt = require("prompt-sync")({sigint: true});

function sumArray(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}

console.log(sumArray([1, 2, 3]));      // Debería imprimir: 6
console.log(sumArray([10, 3, 10]));    // Debería imprimir: 23
console.log(sumArray([-5, 100, 19])); // Debería imprimir: 114
