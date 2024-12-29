import { countries } from "../countries_data.js";
// cuantos idiomas hay en un archivo de objetos de paises 
function idiomasHablados(array, cont) {
    let mapa = new Map();
    for (let i = 0; i < cont; i++) {
        const item = array[i];
        mapa.set(item.name, item.languages.length); 
    }
    return mapa;
}

let idiomas = idiomasHablados(countries, 5);

console.log('Paises con idiomas hablados',idiomas);

function mostSpokenLanguages(array, cont) {
    const languageCount = new Map();

    // Recorrer los países
    array.forEach(country => {
        // Recorrer los idiomas de cada país
        country.languages.forEach(language => {
            // Incrementar el contador para cada idioma
            if (languageCount.has(language)) {
                languageCount.set(language, languageCount.get(language) + 1);
            } else {
                languageCount.set(language, 1);
            }
        });
    });
    // Convertir el Map en un array y ordenar por número de hablantes
    const sortedLanguages = Array.from(languageCount.entries()).sort((a, b) => b[1] - a[1]).slice(0, cont);

    // Convertir el resultado en un formato deseado (array de objetos)
    return sortedLanguages.map(([language, count]) => ({ [language]: count }));
}
console.log(mostSpokenLanguages(countries, 5));