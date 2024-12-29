// calculemos si una persona puede o no manejar un automovil

let edad = 15;

if (edad >= 18) {
    console.log(`Tienes ${edad} años, la edad suficiente para conducir`);
} else {
    let falta = 18 - edad;
    console.log(`Tienes ${edad} te faltan ${falta} años para que puedas conducir`);
}

// comparaciones de edad 
let myAge = 23;
let yourAge = 25;
let mayor = 0;
let mensaje = '';

if(myAge > yourAge) {
    mayor = myAge - yourAge;
    mensaje = `Soy mayor que tu por ${mayor} años`;
} else if (myAge == yourAge) {
    mensaje = 'Tenemos la misma edad';
} else {
    mayor = yourAge - myAge;
    mensaje = `Eres ${mayor} años mayor que yo`;
}

console.log(mensaje);

// calculamos cual de los dos numeros es mayor
let a = 2, b = 3;
if(a > b) {
    mensaje = `${a} es mayor que ${b}`;
} else {
    mensaje = `${b} es mayor que ${a}`;
}

console.log(mensaje)

// numeros pares o impares 

if (a % 2 == 0){
    console.log(`${a} es número par`);
} else {
    console.log(`${a} es número impar`);
}

// nivel 2

let calificacion = 70;
let nota = '';

if (calificacion >= 100 && calificacion <= 90) {
    nota = 'A';
} else if (calificacion >= 89 && calificacion <= 70) {
    nota = 'B';
} else if (calificacion >= 69 && calificacion <= 60) {
    nota = 'C';
} else if (calificacion >= 59 && calificacion <= 40) {
    nota = 'D';
} else if (calificacion >= 39 && calificacion <= 0) {
    nota = 'F';
}

console.log(`La calificacion es ${calificacion} tienes una nota de ${nota}`);

let mes = 'Junio';
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

let dia = 'Sábado';
console.log(dia)
dia = dia.toLowerCase()
console.log(dia)
if (dia == 'lunes' ||  dia == 'martes' || dia == 'miercoles' || dia == 'jueves' || dia == 'viernes') {
    console.log(`El ${dia} es un día laborable`);
} else if(dia == 'sábado' || dia == 'sabado' || dia == 'domingo') {
    console.log(`El ${dia} es fin de semana`);
}