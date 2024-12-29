const mernStack = ["MongoDB", "Express", "React", "Node"];

console.log(countries.length)
console.log(webTechs.length)
console.log(mernStack.length)

console.log('for(){ ... }');
for(let i = 0; i <= 10; i++) { console.log('num ' + i); }

console.log('while(){ ... }')
let j = 0;
while(j <= 10) {
    console.log('num '+ j);
    j++;
}

console.log('do{ ... }while()')
let k = 0;
do {
    console.log('num' + k)
    k++;
} while(k <= 10);

console.log('for(){ ... }');
for(let z = 10; z >= 0; z--) {
    console.log('num ' + z);
}

console.log('while(){ ... }')
let l = 10;
while(l >= 0) {
    console.log('num '+ l);
    l--;
}

console.log('do{ ... }while()')
let m = 10;
do {
    console.log('num ' + m)
    m--;
} while(m >= 0);

let n = 7;
for (let k = 0; k <= n; k++){
    console.log('numero ' + k);
}
let cadena = "#";
let concant = "";
for(let j = 0; j <= n; j++) {
    concant = concant + cadena;
    console.log(concant)
}

let mult;
for (let i = 0; i <= 10; i++){
    mult = i * i;
    console.log(`${i} x ${i} = ${mult}`)
}
let pow1, pow2;
console.log('i\ti^2\ti^3')
for (let i = 0; i <= 10; i++){
    pow1 = i * i;
    pow2 = pow1 * i;
    console.log(`${i}\t${pow1}\t${pow2}`)
}

let par = 0;
console.log('Numeros pares del 0 al 100')
let numsPar = [];
let numsImp = [];
let numsPri = [];
let divisible = 0;
let suma = 0;
let sumaPar = 0;
let sumaImp = 0;

for(let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        numsPar.push(i);
        sumaPar = sumaPar + i;
    } else {
        numsImp.push(i);
        sumaImp = sumaImp + i;
    }

    let esPrimo = true;
    if (i < 2) esPrimo = false
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            esPrimo=false
            break;
        }
    }
    if (esPrimo) numsPri.push(i)

    suma = suma + i;
}


console.log('Arreglo de números pares', numsPar);
console.log('Arreglo de números impares', numsImp);
console.log('Arreglo de números primos', numsPri);
console.log('Suma de todos los números', suma);
console.log('Suma de todos los números pares', sumaPar);
console.log('Suma de todos los números impares', sumaImp);

let arraySumas = [sumaPar, sumaImp];
console.log('Arreglo de sumas', arraySumas)