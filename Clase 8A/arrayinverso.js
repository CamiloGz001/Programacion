const prompt = require("prompt-sync")({sigint: true});

function imprimirInverso(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

miArray = [1, 2, 3, 4, 5];
imprimirInverso(miArray); // Esto imprimirá los elementos en orden inverso


function inversor(array) {
    const arrayInvertido = [];
    for (let i = array.length - 1; i >= 0; i--) {
        arrayInvertido.push(array[i]);
    }
    return arrayInvertido;
}

const miArray = [1, 2, 3, 4, 5];
const arrayInvertido = inversor(miArray);
console.log(arrayInvertido); // Esto imprimirá el array invertido
