let a = [1,2,3,4,5,6];
let b = [1,9,10,4,5,8];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log('Unión de los arreglos a y b',C);

function interseccion(arrayA, arrayB) { // Punto de encuentro de dos o más cosas de forma lineal.
    let B = new Set(arrayB);
    let inter = arrayA.filter(item => B.has(item));
    return inter;
}

let inter = interseccion(a, b);
console.log('Encuentro de dos o más items', inter);

