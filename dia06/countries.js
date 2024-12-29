const countries = [
    "Kenya",
    "Denmark",
    "Japan",
    "Albania",
    "Finland",
    "Germany",
    "Canada",
    "Hungary",
    "Ireland",
    "Bolivia",
    "Ethiopia",
    "Corea del Sur",
    "Estados Unidos"
];
let copyCountries = countries;
let arregloClasificado = copyCountries.sort();
let arregloSearch = [];
let caracteres = [];
let minCaracteres = [];
let dosPalabras = [];
let inversion = [];
let minusculasCountries = [];

for(let i = 0; i < countries.length; i++) {
    if(countries[i].search("land") > 0){
        arregloSearch.push(countries[i]);
    }
    if(countries[i].search(" ") > 0){
        dosPalabras.push(countries[i]);
    }
    caracteres.push(countries[i].length);
}

let cantMaxCarac = Math.max(...caracteres);
let maximo = '';
for(let i = 0; i < countries.length; i++) {
    if(cantMaxCarac === countries[i].length){
        maximo = countries[i];
    }
    if(5 === countries[i].length) {
        minCaracteres.push(countries[i]);
    }
}

for(let i = countries.length-1; i >= 0; i--) {
    let mayusculas = countries[i].toUpperCase();
    inversion.push(mayusculas);
}

console.log('Arreglo original ',countries);
console.log('Copia de arreglo ', arregloClasificado);
console.log('Paises con land ', arregloSearch);
console.log('Pais con maximo de caracteres', maximo);
console.log('Pais con 5 caracteres', minCaracteres);
console.log('Pais con dos palabras', dosPalabras);

console.log('Inversion de paises', inversion);