let firstName = "", lastName = "", country = "", city="", age=0, isMarried=false, year=0;
let num1 = '10';
let num2 = 10;

console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof isMarried, typeof year);

console.log(typeof num1 == typeof num2);// string === number
console.log('9.8' == 10);
console.log("");
console.log(5 > 1);
console.log(10 >= 9);
console.log(10 < 20);
console.log(!true);
console.log(""==true);
console.log(10 != 10);
console.log("");
let lenjuage1 = "Python".length;
let lenjuage2 = "Jargon".length;

console.log(lenjuage1 != lenjuage2);


/**
 *  4 > 3   true
    4 >= 3  true
    4 < 3   false
    4 <= 3  false
    4 == 4  true
    4 === 4 true
    4 != 4  false
    4 !== 4 false
    4 != '4'false
    4 == '4'true
    4 === '4'false

    4 > 3 && 10 < 12        true
    4 > 3 && 10 > 12        false
    4 > 3 || 10 < 12        true
    4 > 3 || 10 > 12        true
    !(4 > 3)                false
    !(4 < 3)                true
    !(false)                true    
    !(4 > 3 && 10 < 12)     false
    !(4 > 3 && 10 > 12)     true
    !(4 === '4')            true 
*/

let date = new Date();
console.log('objeto date ', date)
console.log('Estamos en el año ', date.getFullYear());
console.log('Estamos en el mes ', date.getMonth()+1);
console.log('Estamos en el dia ', date.getDate());
console.log('Son las ', date.getHours());
console.log('Minuros de la hora ', date.getMinutes());
console.log('segundos trancurridos ', date.getSeconds())

console.log('segundos trancuridos desde 1970');

seg = ((86400 * 360) * (date.getFullYear() - 1970)) + date.getSeconds();
console.log('resultado '+ seg)

let a, b, c;

a = 10
// a = parseInt(prompt('Ingresa a'));
b = 20
// b = parseInt(prompt('Ingresa b'));
c = 10
// c = parseInt(prompt('Ingresa c'));

let area = 0.5 * (a * b);
let perimetro = a + b + c;

console.log('el area de un triangulo es :'+ area);
console.log('el primetro de un triangulo es :'+ perimetro);

let radio = 2.2;
// let radio = parseFloat(prompt('¿Cual es el raído del circulo?'));
let areaC = Math.PI * radio * radio;
let circuferencia = 2 * Math.PI * radio;

console.log('Area del ciruclo es '+ areaC);
console.log('circuferencia del circulo es ' + circuferencia);
let x = 7, y = -4;
let m = (Math.pow(y, 2)) - (y * 1) / (Math.pow(x, 2)) - (x * 1);
console.log('La pendiente recta es ' + m);

let valorY = ((x**2 + (6 * x)) + 9)
console.log(valorY)

let horas = 44
// let horas = parseInt(prompt('Ingrese horas'));
let tarifa = 28;
// let tarifa = parseInt(prompt('Ingrese la tarifa por hora'));

let gananciaSemanal = horas * tarifa;
console.log('ganancia semanal ',gananciaSemanal)

firstName = 'Marcos';
lastName = 'Sanchez';

let mensaje = firstName.length >= 7  ? 'tu nombre es largo ': 'tu nombre es corto';
console.log(firstName + ' ' + mensaje)

if (firstName.length < lastName.length) {
    mensaje = `Tu nombre es, ${firstName}, es más corto que tu apellido, ${lastName}`;
} else {
    mensaje = `Tu apellido es, ${lastName}, es más corto que tu nombre, ${firstName}`;
}

if(firstName.length == lastName.length) {
    mensaje = `Tu nombre ${firstName} es igual de largo que tu ${lastName} apellido`;
}

console.log(mensaje);

let myAge = 30;
let yourAge = 5;
let mayor = myAge > yourAge ? myAge - yourAge : yourAge - myAge;
console.log(`Soy mayor que por ${mayor} año(s)`)

anioNacimiento = 2006;
let edad = date.getFullYear() - anioNacimiento;

if (edad >= 18) {
    mensaje = `Tines ${edad} puedes conducir`
} else {
    let falta = 18 - edad;
    mensaje = `Tienes ${edad}, te faltan ${falta} años para conducir`;
}

console.log(mensaje)

formato1 = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
formato2 = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
formato3 = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

console.log(formato1)
console.log(formato2)
console.log(formato3)