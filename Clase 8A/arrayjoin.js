const prompt = require("prompt-sync")({sigint: true});

function join(arr) {
    let resultado = "";
    for (let i = 0; i < arr.length; i++) {
        resultado += arr[i];
    }
    return resultado;
}

console.log(join(["h", "o", "l", "a"])); // Debería imprimir: "hola"
console.log(join(["c", "h", "a", "u"])); // Debería imprimir: "chau"
