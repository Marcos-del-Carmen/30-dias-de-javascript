// Desarrolla un pequeño script que genera una matriz 
// de 5 números aleatorios
let num = 0;
let numsRamdom = [];

for(let i = 0; i < 5; i++) {
    num = Math.round(Math.random() * 100);  
    numsRamdom.push(num)
}

console.log('Numeros ramdom', numsRamdom);

// id unico 
let letrasNums = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z', 1,2,3,4,5,6,7,8,9,0];
let max = letrasNums.length-1;
let num1;
let id = '';
for (let i = 0; i < 10; i++) {
    num1 = Math.round(Math.random() * max);
    id = id + letrasNums[num1]
}

console.log('Clave secreta:', id);

let rangoNums = Math.round(Math.random() * 10) + 5; 
for(let i = 0; i < rangoNums; i++) {
    num1 = Math.round(Math.random() * max);
    id = id + letrasNums[num1]
}

console.log('Clave secreta:', id);

let hexArray = ['a','b','c','d','e','f', 1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,0];
max = hexArray.length-1;
let hex = '';
for(let i = 0; i < 6; i++) {
    num1 = Math.round(Math.random() * max);
    hex = hex + hexArray[num1];
}
hex = '#' + hex;
console.log('Codigo hexadecimal:',hex);

let cadena = '';
for (let i = 0; i < 3; i++) {
    let num2 = Math.round(Math.random() * 255);
    if (i == 0) {
        cadena = cadena + num2;
    }
    if (i > 0) {
        cadena = cadena + ',' + num2;
    }
}
cadena = `rgb(${cadena})`;
console.log(cadena)

let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];

let cantLetras = [];
let arrayAux = [];
let arraySearch = [];
let arraySearch1 = [];

for (let i = 0; i < countries.length; i++) {
    cantLetras.push(countries[i].length)

    let countryData = [
        countries[i], 
        countries[i].slice(0,3), 
        countries[i].length
    ];

    arrayAux.push(countryData);
    if (countries[i].search("LAND") > 0) {
        arraySearch.push(countries[i]);
    }

    if(countries[i].search("IA") > 0) {
        arraySearch1.push(countries[i]);
    }

}
console.log(cantLetras)
console.log(arrayAux)
console.log('busqueda de LAND',arraySearch)
console.log('busqueda de IA',arraySearch1)

let maxCaracteres = Math.max(...cantLetras);
arrayAux = []
for(let i = 0; i < countries.length; i++) {
    if (maxCaracteres === countries[i].length) {
        console.log('Pais con más caracteres en el arreglo', countries[i]);
    }

    if(5 === countries[i].length) {
        console.log('Pais con 5 caracteres', countries[i]);
        arrayAux.push(countries[i]);
    }
}

console.log(arrayAux);