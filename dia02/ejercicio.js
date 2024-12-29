let desafio = "30 días de JavaScript";
console.log('texto: ', desafio)
console.log('Caracteres del texto', desafio.length);

let desafioMayus = desafio.toUpperCase();
console.log('Texto en mayusculas: ', desafioMayus);

let desafioMin = desafio.toLocaleLowerCase();
console.log('Texto en minusculas: ', desafioMin);

let segmenta = desafio.substring(0, 5);
console.log('primera palabra del texto ', segmenta);

let segmenta2 = desafio.substring(3, desafio.length - 1)
console.log('Texto corto: ', segmenta2);

let valitarPalabra = desafio.includes("Script");
console.log('El texto tiene "Script": ', valitarPalabra);

let arreglo = desafio.split(" ");
console.log('Arreglo de texto: ', arreglo);

let cadena = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let arregloCadena = cadena.split(", ");
console.log(arregloCadena);

let cambio = desafio.replace("JavaScript", "Python");
console.log('Cambio de lenjuage: ',cambio);

console.log('Letra en la posición 15: ', desafio.charAt(15))

console.log('Codigo de una letra ', desafio.charCodeAt("j"))

console.log('Posicion de letra la primera "a" en el texto: ', desafio.indexOf("a"));

let oracion = "No puedes terminar una oración con porque porque porque es una conjunción"
console.log('aparacion de texto principal: ', oracion.indexOf("porque"));
console.log('aparacion de texto final: ', oracion.lastIndexOf("porque"));
console.log('aparacion de texto al buscar: ', oracion.search("porque"));

console.log('se eliminan espacios: ', desafio.trim())

console.log('Comparamos una letra: ',desafio.startsWith("30 "));
console.log('Comparamos una letra: ',desafio.endsWith("JavaScript"));
console.log('Busqueda de letra a: ', desafio.match(/\a+/g));

let texto = "30 días de";
let concatenado = texto.concat("JavaScript");
console.log('Concatenado: ', concatenado);

console.log('Repetir texto 2 veces: ', desafio.replace(2));

// LEVEL TWO

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

let num0 = 10;
let num1 = '10';
num1 = parseInt(num1);
console.log('Son iguales', typeof num0 == typeof num1);

let num2 = parseFloat('9.8');
num2 = Math.round(num2);
let num3 = 10;

console.log(`${num2} es igual a ${num3}: ${num2 == num3}`);
let numRandom0 = Math.round(Math.random() * 101);
console.log('numero del 1 al 100: ', numRandom0);

let numRandom1 = Math.floor(Math.random() * 51 ) + 50;
console.log('numero del 50 al 100: ', numRandom1);

let numRandom2 = Math.round(Math.random() * 256);
console.log('numero del 1 al 100: ', numRandom2);

let caracteresLong = 'JavaScript'.length;
let numRandom3 = Math.round(Math.random() * caracteresLong + 1);

console.log('Caracteres entre JavaScript ', numRandom3, 'JavaScript'.charAt(numRandom3-1));

console.log(
`1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125`)

// numeros con secuencias de escape
console.log('1 1 1 1 1 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125');
let oracion1 = 'No puedes terminar una oración con porque porque porque es una conjunción';
let ini = oracion.indexOf('porque');
let fin = oracion.lastIndexOf('es');

console.log(ini, fin);
console.log(oracion1.substring(ini, fin));

let oracion2 = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor';
console.log(oracion2);
console.log('Palabra amor', oracion2.search(/amor+/g));
let pattern = 'porque';
console.log(oracion1.match(/porque/gi));

const sentence = "+I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
console.log(sentence.replace(/[.*+\-?^${}()|[\]\\@%#&;]/g, ""));

let ingresoAnual = 10000;
let salarioBase = 5000;

let total = (salarioBase * 12) + ingresoAnual;

console.log('Total de ganancias $ '+total);