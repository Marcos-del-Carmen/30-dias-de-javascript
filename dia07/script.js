function fullName(){
    console.log('Marcos Sánchez del Carmen')
}
fullName();

function fullName2(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log('Nombre de una persona:', fullName2('Nicolas', 'Ramirez'));

function addNumbers(num1, num2) {
    let suma = num1 + num2;
    return suma;
}
console.log('Suma de números con una función:', addNumbers(17, 34))

function areaOfRectangule(length, width) {

    return length * width;
}
console.log('Area de un rectangulo usando una función:', areaOfRectangule(2, 10))

function perimeterOfRectangle(length, width) {
    return 2*(length + width);
}
console.log('Perimetro de un rectangulo con una función:', perimeterOfRectangle(10, 4))

function volumeOfRectPrism(length, width, height) {
    return length * width * height;
}
console.log('Volumen de un prisma rectangular:', volumeOfRectPrism(8, 10, 21))


function areaOfCircle(r) {
    return Math.PI * r * r;
}
console.log('Área de un circulo:', areaOfCircle(8))

function circumOfCircle(r) {
    return 2 * Math.PI * r;
}
console.log('Circuferencia de un circulo:', circumOfCircle(5));

function densidad(mass, volume) {
    return mass /  volume;
}
let valorDensidad = densidad(10, 40)

console.log('Densidad de una sustansia:', valorDensidad);
function velocidad(tiempo) {
    let velocidad1 = valorDensidad / tiempo;
    return velocidad1;
}

console.log('Velocidad de objeto en movimiento:', velocidad(102))

/**
 * 11. El peso de una sustancia se calcula de la siguiente manera: 
 * weight = mass x gravity. Escribe una función weight que calcule 
 * el peso de una sustancia.
*/

function weight(mass, gravity) {
    return mass * gravity;
}

console.log('Calcula el peso de una sustancia ',weight(92, 100));

/**
 * La temperatura en °C se puede convertir a °F usando esta fórmula: 
 * °F = (°C x 9/5) + 32
 * Escribe una función convertCelsiusToFahrenheit que convierta °C a °F.
*/

function convertCelsiusToFahrenheit(celsius) {
    let fahrenheit = 0;
    fahrenheit = (celsius * (9 / 5)) + 32;
    return fahrenheit;
}

console.log('Conversión de celsisus a fahrenheit ', convertCelsiusToFahrenheit(36.5))

/**
 * El índice de masa corporal (IMC) se calcula de la siguiente manera: 
 * imc = peso en Kg / (altura x altura) en m2. 
 * Escribe una función que calcule imc. El IMC se utiliza para definir 
 * de forma amplia diferentes grupos de peso en adultos de 
 * 20 años o más. Compruebe si una persona tiene un peso bajo, 
 * peso normal, con sobrepeso u obeso según la información que se 
 * proporciona a continuación.
 */

function calcularIMC(pesoEnKg, alturaPersona) {
    let imc = 0;
    let msj = '';
    imc = pesoEnKg / (alturaPersona * alturaPersona);

    if (imc <= 18.5) {
        msj = 'Peso bajo';
    } else if (imc >= 18.5 && imc <= 24.9) {
        msj = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        msj = 'Sobre peso';
    } else if (imc >= 30){
        msj = 'Obeso';
    }

    return msj;
}

console.log('calcular el IMC de una persona')
console.log('Altura: 1.70');
console.log('Peso: 55kg');
console.log('Estatus:', calcularIMC(55, 1.70));
console.log('Estatus:', calcularIMC(60, 1.70));
console.log('Estatus:', calcularIMC(70, 1.70));
console.log('Estatus:', calcularIMC(73, 1.70));
console.log('Estatus:', calcularIMC(75, 1.70));
console.log('Estatus:', calcularIMC(80, 1.70));
console.log('Estatus:', calcularIMC(90, 1.70));

/**
 * Escribe una función llamada checkSeason, toma un parámetro de mes 
 * y retorna la estación: Otoño, Invierno, Primavera o Verano.
 */

function checkSeason(mes) {
    let temporada = '';

    if (mes == 'Septiembre' || mes == 'Octubre' || mes == 'Noviembre') {
        temporada = 'Otoño';        
        console.log(`La temporada de ${mes} es ${temporada}`)
    } else if (mes == 'Diciembre' || mes == 'Enero' || mes == 'Febrero') {
        temporada = 'Invierno';
        console.log(`La temporada de ${mes} es ${temporada}`)
    } else if (mes == 'Marzo' || mes == 'Abril' || mes == 'Mayo') {
        temporada = 'Primavera';
        console.log(`La temporada de ${mes} es ${temporada}`)
    } else if (mes == 'Junio' || mes == 'Julio' || mes == 'Agosto'){
        temporada='Venaro';
        console.log(`La temporada de ${mes} es ${temporada}`)
    } else {
        console.log('Esbribiste ' + mes);
    }

    return temporada;
}

/**
 * 15. Math.max retorna su argumento más grande. Escriba una función 
 * findMax que tome tres argumentos y devuelva su máximo sin usar el 
 * método Math.max.
 */

function findMax(param1, param2, param3) {
    let arreglo = [param1,  param2, param3];
    let mayor = Math.max(...arreglo);
    return mayor;
}

console.log('El numero mayor del arreglo es ',findMax(10, 22, 17));

// EJERCICIOS: NIVEL 2

/**
 * 1. La ecuación lineal se calcula de la siguiente manera: 
 *    ax + by + c = 0. Escribe una función que calcule el valor 
 *    de una ecuación lineal, solveLinEquation.
 * */

function solveLinEquation(a, b, c, x, y) {
    let resultado = (a * x) + (b * y) + c;
    return resultado;
}

console.log('Se aplica la ecuacion lineal general', solveLinEquation(3, 5, 12, 2, 2))

/**
 * 3. Declare una función llamada printArray. Toma un 
 *    array como parámetro e imprime cada valor del array.
 */

function printArray(arreglo) {
    console.log('Arreglo', arreglo);
    for(let i = 0; i < arreglo.length; i++) {
        console.log('item', arreglo[i]);
    }
}

printArray(['manzanas', 'durazno', 'pera', 'mango'])
/**
 * 4. Declare una función llamada showDateTime que muestre la hora 
 *    en este formato: 01/08/2020 04:08 usando el objeto Date.
 */

function showDatetime() {
   let date = new Date();
   console.log('fecha ', date);
   let anio = date.getFullYear();
   let mes = date.getMonth();
   let dia = date.getDate();
   let hora = date.getHours() + ':' + date.getMinutes();
   console.log(`${dia}/${mes}/${anio} ${hora}`)
}

showDatetime();

/**
 * 5. Declare una función llamada swapValues. Esta función 
 *    intercambia el valor de x a y.
 */

function swapValues(x, y) {
    console.log('Inicio', x , y);
    let temp = x;
    x = y;
    y = temp;
    console.log('Intercambio', x , y);
}

swapValues(5, 7);
swapValues(7, 5);

function reverseArray(array) {
    console.log('Arreglo', array)
    let items = array.length-1;
    let arrayReverse = [];
    for(let i = items; i >= 0; i--) {
        // console.log(array[i]);
        arrayReverse.push(array[i]);
    }
    console.log('Arreglo al reves', arrayReverse)
}

reverseArray([1,2,3,4,5,6,7,8,9,10]);
reverseArray(['A','B','C','D','E','F']);

function capitalizeArray(array) {
    let items = array.length;
    let capitalize = [];
    
    for(let i = 0; i < items; i++) {
        console.log(array[i])
        capitalize.push(array[i].toLowerCase());
    }
    console.log(capitalize)
}

capitalizeArray(['Manzana', 'TACO', 'CarrO', 'HaMbRe']);

let nombres = ['Marcos', 'Andres', 'Martin', 'Mario', 'Maribel', 'Madisón'];
console.log('Nombres ',nombres)
function addItem(param) {
    nombres.push(param)
}

addItem('Jorge');
addItem('Ramiro');
addItem('Ramón');
addItem('Miguel');

console.log('Nombres agregados ', nombres);
/**
 * 9. Declare una función llamada removeItem. Toma como parámetro un index 
 *    y retorna un array después de eleminar el elemento con ese index.
 */

function removeItem(post, array) {
    // if(array.length != undefined) {
    //     console.log('Lo siento pero el arreglo tiene un tamaño de ', array.length);
    // }
    console.log('Se elimino de la lista a ', array[post]);
    array.splice(post, 1);
    console.log('Lista actual ',array)
}

removeItem(5, nombres);

/**
 * 10. Llame a su función isEmpty, toma un parámetro 
 * y verifica si está vacío o no.
 */

function isEmpty(param) {
    if(param || param != '' || param != 0) {
        console.log('El valor es:', param)
    } else {
        console.log('Lo siento pero no hay algo en el parametro')
    }
}

isEmpty('Hola');
isEmpty('');
isEmpty(0);

/**
 * 11. Declare una función llamada sumOfOdds. Toma un parámetro 
 *     numérico y suma todos los números impares en ese rango.
 */

function sumOfOdds(num) {
    let sumaImp = 0;
    for(let i = 0; i <= num; i++) {
        if(i % 2 !== 0) {
            sumaImp = sumaImp + i;
        }
    }
    console.log('Suma de numeros impares',sumaImp);
}

sumOfOdds(11);

/**
 * 12. Declare una función llamada sumOfEven. Toma un parámetro numérico
 *     y suma todos los números pares en ese rango.
 */

function sumOfEven(num) {
    let sumaPar = 0;
    for(let i = 1; i <= num; i++) {
        if(i % 2 == 0) {
            sumaPar = sumaPar + i;
        }
    }
    console.log('Suma de numeros pares ', sumaPar);
}

sumOfEven(11);

/**
 * 13. Declare una función llamada evensAndOdds . Toma un entero 
 *     positivo como parámetro y cuenta el número de pares e impares.
 */

function evensAndOdds(num) {
    let contPar = 0;
    let contImp = 0;
    for (let i = 0; i <= num; i++) {
        if(i % 2 == 0) {
            contPar++;
        } else {
            contImp++;
        }
    }

    console.log(`La cantidad de números pares son de ${contPar} y la impares son de ${contImp}`);
}

evensAndOdds(100);

/**
 * 14. Escriba una función que tome cualquier número de argumentos y 
 *     retorne la suma de los argumentos
 */

function sumaRamdom(...nums) {
    let suma = 0;
    for (let i = 0; i < nums.length; i++) {
        suma = suma + nums[i];
    }
    
    console.log('Suma de números ', suma)
}

sumaRamdom(1,2,3,5);

/**
 * 15. Escriba una función randomUserIp que genere una ip de usuario 
 *     aleatoria.
 */

function randomUserIp(){
    let numRam1 = Math.round(Math.random() * 100);
    let numRam2 = Math.round(Math.random() * 68);
    console.log(`192.168.${numRam1}.${numRam2}`);
}

randomUserIp()

function randomMacAddress() {
    let arreglo = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let cantArray = arreglo.length-1;
    let mac = '';
    for (let i = 0; i < 12; i++) {
        let numRam1 = Math.round(Math.random() * cantArray);    
        mac = mac + arreglo[numRam1];
        if(i % 2 == 0) mac = mac + ':'
    }
    console.log(mac)
}

randomMacAddress();

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
    console.log('Código hexadecimal', hex)
}
randomHexaNumberGenerator();

function userIdGenerator() {
    let arreglo = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v'];
    let cantArreglo = arreglo.length-1;
    let idUser = '';

    for (let i = 1; i <= 7; i++) {
        let nRandom = Math.round(Math.random()*cantArreglo);
        idUser = idUser + arreglo[nRandom];
    }
    console.log('Id de usuario', idUser)
}

userIdGenerator();
