const prompt = require("prompt-sync")({sigint: true});

const peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
console.log(peliculas); // Verificamos que las películas estén guardadas correctamente

function convertirAMayusculas(array) {
    return array.map(item => item.toUpperCase());
}

const peliculasMayusculas = convertirAMayusculas(peliculas);
console.log(peliculasMayusculas); // Verificamos que las películas estén en mayúsculas

function unirArraysYConvertirAMayusculas(array1, array2) {
    const arrayUnido = array1.concat(array2);
    return convertirAMayusculas(arrayUnido);
}

const peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
const peliculasCompletas = unirArraysYConvertirAMayusculas(peliculasMayusculas, peliculasAnimadas);
console.log(peliculasCompletas); // Verificamos que las películas animadas estén en mayúsculas y unidas

const ultimoElemento = peliculasCompletas.pop(); // Guardamos el último elemento antes de eliminarlo
console.log("Elemento eliminado:", ultimoElemento);
console.log("Películas completas después de eliminar:", peliculasCompletas);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararCalificaciones(calificacionesAsia, calificacionesEuropa) {
    for (let i = 0; i < calificacionesAsia.length; i++) {
        if (calificacionesAsia[i] === calificacionesEuropa[i]) {
            console.log(`Las calificaciones ${calificacionesAsia[i]} y ${calificacionesEuropa[i]} son iguales.`);
        } else {
            console.log(`Las calificaciones ${calificacionesAsia[i]} y ${calificacionesEuropa[i]} son diferentes.`);
        }
    }
}

compararCalificaciones(asiaScores, euroScores);
