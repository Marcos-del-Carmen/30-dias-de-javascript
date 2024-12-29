
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand", "Ecuador", "El Salvador"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

/**
 * Explicacion de forEach, map, filter y reduce
 * 
 * Foreach: funciona como si fuera un ciclo for pero con la direfencia 
 * que se tiene una variable en la cual mostramos su valor siendo así su
 * sintaxis más corta
 * 
 * map: este tipo de método devuelve un nuevo arreglo trasnformando los 
 * valores que tenga el arreglo que se le esta pasando o esta resiviendo. 
 * 
 * filter: dependiendo a la condión que tenga se le esta devuelve un arreglo 
 * con la condicon que se le fue inpuesta. 
 * 
 * reduce: suma los valores que tenga el arreglo tambien se podrian concatenar esos
 * valores. Reduciendo la sintaxis...
 * 
 * La diferencia entre todas las funciones antes mencionadas es que una recorre,
 * otra transforma, busca y acumula 
 */

const callback = () => {
   console.log('Ests es mi primer callback :D');
}

callback();
function recorre(array) {
    array.forEach(function(item){
        console.log('País', item);
    });
}

console.log('Los paises de la variable Countries...');
recorre(countries);

console.log('Nombres de personas...');
recorre(names);

console.log('Estos son números de un arreglo...');
recorre(numbers);
/**
 * 6. Utiliza map para crear un nuevo array cambiando cada país a mayúsculas en el array de países.
 */
console.log('Los paises de la variable Countries en mayusculas');
function convertirMayus(array) {
    array.map(function(item) {
        console.log(item.toUpperCase());
    })
}
convertirMayus(countries);

/**
 * 7. Utilice map para crear un array de longitudes de países a partir del array de países.
 */

function logitudes(array) {
    array.map(function(item) {  
        console.log('Logitudes de letras', item.length);
    })
}

logitudes(countries);

const cuadradoNumbers = numbers.map(item => item * item);
console.log(cuadradoNumbers)

console.log('Cabio de nombres a mayusculas...');
convertirMayus(names)

// const asignarPrecios = products.map(product => {
//     if(product.price == "" || product.price == " ") {
//         // product.price = 1
//         return [product.product, product.price = 1]
//     }
//     return product
// });

// console.log(asignarPrecios);

/** PASO CON LOS FILTER 11-15 */
const filtroPais = countries.filter(item => {
    return item.includes("land") || item.includes("Land");
});

console.log(filtroPais);

const filtroCaracteres = countries.filter(item => item.length >= 6);
console.log(filtroCaracteres);

const filtroLetra = countries.filter(item => item[0] == "E" || item[0] == "e");
console.log(filtroLetra);
const filtrarPrecios = products.filter(item => item.price > 0);
console.log(filtrarPrecios);

// 16. Declara una función llamada getStringLists 
// que toma un array como parámetro y devuelve un
// array sólo con elementos string.
let nombres = ["Marcos", "Daniela", "Jesus", 1,2,3,4,5]
function getStringLists(array) {
    const areAllStr = array.every((name) => typeof name === "string");
    return areAllStr
}
console.log(getStringLists(nombres) ? 'Simón todos son cadenas': 'Tiene otra cosa');
console.log(getStringLists(countries) ? 'Simón todos son cadenas': 'Tiene otra cosa');

let sumaNums = numbers.reduce((acumulador, num) => acumulador += num);
console.log('Suma de números', sumaNums);

let concatenarPaises = countries.reduce((acumulador, pais) => acumulador += ', ' + pais);
console.log(concatenarPaises);

/**
 * Diferencia entre every y find 
 * 
 * every: comprueba si todos los valores son igual a un tipo de dato
 * 
 * find: retorna el primer valor que cumpla con la condicion
 */

const cantCarcaters = names.find(nombre => nombre.length >= 7);
console.log('Nombre con 7 o más caracteres', cantCarcaters);

const validarTexto = countries.every((item) => item.includes("land"))
console.log(validarTexto)

/**
 * Diferencia entre find y findIndex
 * 
 * find retorna el valor y findIndex retorna la posicion del
 * arreglo que cumplio la condición
 * 
 */

const seisLetras = countries.find(item => item.length == 6);
console.log('Pais con 6 letras',seisLetras);

const postSeisLetras = countries.findIndex(item => item.length == 6);
console.log('Posición de país con 6 letras',postSeisLetras);

const buscarPalabra = countries.findIndex(item => item.includes("Norway"));
console.log('Buscar país con Norway',buscarPalabra);

const buscarPais = countries.findIndex(item => item.includes("Russia"));
console.log('Buscar país con Russia',buscarPais);