function userIdGenerator(cantCaracteres) {
    if (cantCaracteres>=55) {
        console.log('Lo siento pasaste la cantidad de caracteres...')
        return null;
    }
    let arreglo = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F',
        'G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S',
        'T','U','V','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v'];
    let cantArreglo = arreglo.length-1;
    let idUser = '';

    for (let i = 1; i <= cantCaracteres; i++) {
        let nRandom = Math.round(Math.random()*cantArreglo);
        idUser = idUser + arreglo[nRandom];
    }
    console.log(idUser)
}

function userIdGeneratedByUser(cantCaracteres, cantID) {
    for (let j = 0; j < cantID; j++) {
        userIdGenerator(cantCaracteres);
    }
}

userIdGeneratedByUser(54, 6)

function rgbColorGenerator() {
    let color = '';
    let rgb = '';
    for (let i = 0; i < 3; i++) {
        let num =  Math.round(Math.random() * 255);
        if (i>=1) {
            color = color+', ' + num;
        } else {
            color = color + num;
        }
    }
    rgb = `rgb(${color})`
    return rgb;
}
console.log(rgbColorGenerator());

/**
 * 3. Escriba una función arrayOfHexaColors que retorna 
 *    cualquier cantidad de colores hexadecimales en un array.
 */
function randomHexaNumberGenerator() {
    let arreglo = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let cantArreglo = arreglo.length-1;
    let hex = '';
    
    for (let i = 1; i <= 6; i++) {
        let nRandom = Math.round(Math.random()*cantArreglo);
        hex = hex + arreglo[nRandom];
        if (i == 6) { 
            hex = '#' + hex;
        }
    }
    return hex
}
function arrayOfHexaColors(cant) {
    let arregloHex = [];
    for (let i = 0; i < cant; i++) {
        arregloHex.push(randomHexaNumberGenerator());
    }
    console.log('Arreglos en hexadecimal',arregloHex);
}
arrayOfHexaColors(5);

/**
 * 4. Escriba una función arrayOfRgbColors que retorna 
 *    cualquier cantidad de colores RGB en un array.
 */

function arrayOfRgbColors(cant){
    let arregloRbg = [];
    for (let i = 0; i < cant; i++) {
        arregloRbg.push(rgbColorGenerator());
    }
    console.log('Cantidad de colores en rgb',arregloRbg);
}

arrayOfRgbColors(4)

/**
 * 5. Escriba una función convertHexaToRgb que convierta el color hexa a 
 *    rgb y retorna un color rgb.
 */

function convertHexaToRgb() {
    let hexa = randomHexaNumberGenerator();
    console.log('Codigo hexadecimal', hexa);
    let rgb = '';
    // let r = 0, g = 0, b = 0;
    // r = hex.charCodeAt(1) + hex.charCodeAt(2);
    // g = hex.charCodeAt(3) + hex.charCodeAt(4);
    // b = hex.charCodeAt(5) + hex.charCodeAt(6);
    const r = parseInt(hexa.substring(1, 3), 16); // Subcadena de la posición 1 a 3
    const g = parseInt(hexa.substring(3, 5), 16); // Subcadena de la posición 3 a 5
    const b = parseInt(hexa.substring(5, 7), 16); // Subcadena de la posición 5 a 7
    rgb = `rgb (${r}, ${g}, ${b})`;
    return rgb;
}

let rgb = convertHexaToRgb();
console.log('convertido a',rgb);

/**
 * 6. Escriba una función convertRgbToHexa que convierta rgb a color 
 *    hexadecimal y retorna un color hexa. FALLE
 */

/**
 * 7. Escriba una función generateColors que pueda generar cualquier 
 *    número de colores hexa o rgb.
 */

function generateColors(tipoColor, cant){
    if(tipoColor == "hexa") {
        console.log("Seleccionaste hexadecimal con la cantidad de " + cant);
        arrayOfHexaColors(cant);
    } else if(tipoColor == "rgb") {
        console.log("Seleccionaste rgb con la cantidad de " + cant);
        arrayOfRgbColors(cant);
    } else {
        console.log("Lo siento, pero esa opción no esta...")
    }
}

generateColors("hexa", 5);
generateColors("rgb", 3);
generateColors("rgba", 3);
/**
 * 8. Llame a su función shuffleArray, toma un array como parámetro 
 *    y devuelve un array mezclada
 */
function shuffleArray(array) { 
    let tempArray = [];
    let lon = array.length-1;

    for (let i = 0; i <= lon; i++) {
        let r = Math.round(Math.random() * lon);
        tempArray.push(array[r]);
    }
    return tempArray
}
let arreglo = ["Marcos", "Diana", "Andres", 12,21,36.1,45];
let arregloAleatorio = shuffleArray(arreglo);
console.log('El arreglo principal', arreglo);
console.log('Arreglo aleatorio',arregloAleatorio);

/**
 * 10. Llame a su función factorial, toma un número entero
 *     como parámetro y devuelve un factorial del número.
 */

function factorial(num) {
    let fact = 1;
    for (let i = num; 1 <= i; i--) {
        fact = fact * i;
    }
    return fact;
}
console.log('!7',factorial(7));
console.log('!6',factorial(6));
console.log('!5',factorial(5));
console.log('!4',factorial(4));

function isEmpty(param) {
    mensaje = '';
    if(param) {
        mensaje = 'Tiene algo';
    } else {
        mensaje = 'No tiene nada';
    }
    return mensaje;
}

console.log(isEmpty('a'))

function sum(num) {
    let suma = 0;
    for (let i = num; 1 <= i; i--) {
        suma = suma + i;
    }
    return suma;
}

console.log('Suma de números',sum(10));

function sumOfArrayItems(array) {
    let lon = array.length;
    let suma = 0;
    for (let i = 0; i < lon; i++) {
        suma = suma + array[i];
    }

    console.log('Esta es la suma de numeros',suma);
}

sumOfArrayItems([1,2,3,4,5,6,7,8,9,10]);
sumOfArrayItems([10,20,30,40,50,60,70,80,90,100]);

function average(array) {
    let promedio = 0;
    let suma = 0;
    let cant = array.length;
    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] == 'string') {
            console.log('No es posible sumar una cadena');
            return null;
        }
        suma = suma + array[i];
    }
    promedio = suma / cant;
}

average([1,2,3,4,5,6,7,9,10]);
average([10,20,30]);
average([10,20,30, "cadena",'a']);

function modifyArray(array) {
    console.log('Arreglo original', array)
    let tempArray = [];
    for (let i = 0; i < array.length; i++) {
        tempArray.push(array[i])
        if (i == 4) {
            tempArray[4] = array[i].toUpperCase();
            // console.log('el que se convirtio',tempArray[i]);
        }
    }
    console.log('Arreglo convertido',tempArray)
}

modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot'])
modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM'])

function isPrime(num) {
    let cont = 0;
    for (let i = 0; i < num; i++) {
        if(num % i == 0 && cont < 2) {
            cont++;
        }
    }
    if(cont < 2) {
        console.log('Es primo '+num);
    } else {
        console.log('No es primo '+num);
    }
}
// 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
for (let i = 0; i < 5; i++) { 
    isPrime(i)
}

/**
 * 16. Escriba una función que verifique si todos los 
 *     elementos son únicos en un array
 */

function comparacionItem(array) {
    let arrayIguales = [];
    let arrayDiferentes = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if(array[i] === array[j]) arrayIguales.push(array[j])
        }
    }

    if (arrayIguales.length > 0) {
        console.log('Items iguales', arrayIguales);
    } else {
        console.log('No encontramos item iguales');
    }

    console.log('Items diferentes', arrayDiferentes);
}

comparacionItem([1,1,2,3,"Marcos", "Diana", "Diana"])

/**
 * 17. Escriba una función que verifique si todos 
 *     los elementos de un array son del mismo tipo de datos.
 */

function tipoDeDatos(array) {
    // console.log('El arreglo tiene',array);
    let contS = 0, contN = 0, contB = 0;
    let mensaje = '';
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == 'string') {
            // console.log('Todos los datos son de tipo cadena');
            contS++;
        } else if (typeof array[i] == 'number') {
            // console.log('Todos los datos son de tipo numero');
            contN++;
        } else if(typeof array[i] == 'boolean') {
            // console.log('Todos los datos son de tipo boolean');
            contB++;
        }
    }
    if (contS == array.length) {
        mensaje = 'Los datos son de tipo cadena';
    } else if (contN == array.length) {
        mensaje = 'Los datos son de tipo numero';
    } else if (contB == array.length) {
        mensaje = 'Los datos son de tipo booleano';
    } else {
        mensaje = 'Los datos son diferentes en arreglo';
    }
    console.log(mensaje)
}

tipoDeDatos([1,2,3,4,5,6,7,8]);
tipoDeDatos(['Marcos','Diana','Vicente','Ramiro','Ramon','Valeria','Vaneza','Madison']);
tipoDeDatos(['Marcos','Diana','Vicente','Ramiro','Ramon',3,2,1, true, false]);

/**
 * 18. El nombre de las variables de JavaScript no admite caracteres o 
 *     símbolos especiales, excepto $ o _. Escriba una función 
 *     isValidVariable que verifique si una variable es válida o 
 *     inválida. calificacion 4 de 10
 */

function isValidVariable(variable) {
    let buscarLetras = variable.search(/[a-z]/);
    let buscarEspacios = variable.search(' ');
    let buscarEspeciales = variable.search(/[|°¬!@#$%^&*()+~`{}[\]:;"'<>,.?/\\-]]/);
    console.log('busqueda de caracteres', buscarLetras)
    console.log('busqueda de espacios', buscarEspacios)
    console.log('busqueda de especiales', buscarEspeciales)
    if (buscarLetras !== -1 && buscarEspacios == -1 && buscarEspeciales == -1) {
        console.log('La variable es valida');
    } else {
        console.log('La variable es invalida');
    }
}
isValidVariable('variable<>.Valida');
// let variable<>.Valida = 0;


function numsRamdom() {
    let array = [];
    while (array.length < 7) {
        let numRandom = Math.round(Math.random() * 9);
        if (!array.includes(numRandom)) {
            array.push(numRandom);
        }
    }
    return array;
}

let nums = numsRamdom();
console.log('Numeros ramdom', nums);

/**
 * 20. Escriba una función llamada reverseCountries, toma el array 
 *     de países y primero copia el array y retorna el array original 
 *     invertido 🎉 ¡FELICITACIONES! 🎉
 */
const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];

function reverseCaountries(array) {
    console.log('Arreglo normal',array)
    let longitud = array.length-1;
    let arrayReverse = [];
    for (let i = longitud; 0 <= i ; i--) {
        arrayReverse.push(array[i]);
    }
    console.log('Arreglo al reves',arrayReverse)
}

reverseCaountries(countries)