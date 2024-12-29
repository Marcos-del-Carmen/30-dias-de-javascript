const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers)
numbers.splice(3, 3, 7, 8, 9);
console.log(numbers.splice(3, 3, 7, 8, 9)); // -> [1, 2, 3, 7, 8, 9] //elimina tres elementos y reemplaza tres elementos
console.log(numbers)

let arreglo = ["perro", "gato", "cerdo", "cuyo", "gaster", "gallo", "perico"];
let medio = Math.round(arreglo.length / 2);
let ultimo = arreglo.length-1;
console.log(arreglo)
console.log('primer valor', arreglo[0])
console.log('segundo valor', arreglo[medio])
console.log('tercer valor', arreglo[ultimo])

let mixedDataTypes = ["Marcos",  "Sachez", "Del Carmen", 23, false, "soltero"];
console.log(mixedDataTypes.length)

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompanies)
for(let i = 0; i < itCompanies.length; i++){
    console.log('Empresa :',itCompanies[i]);
}

let medio0 = Math.round(itCompanies.length / 2);
let ultimo0 = itCompanies.length-1;

console.log('Primera compañia',itCompanies[0])
console.log('Media compañia',itCompanies[medio0])
console.log('Ultima compañia',itCompanies[ultimo0])

for(let j = 0; j < itCompanies.length; j++){
    console.log('Empresa :',itCompanies[j].toUpperCase());
}

console.log(itCompanies.toString() + ' son las mejores empresas de TI')
let companie = "Google";
for(let k = 0; k < itCompanies.length; k++){
    if (itCompanies[k] === companie){
        console.log('La empresa si existe')
    } else {
        console.log('La empresa no existe')
    }
}

for(let l = 0; l < itCompanies.length; l++) {
    if(itCompanies[l].search("o")>0){
        console.log('La empresa ' + itCompanies[l] + ' tiene la letra o')
    }
}

console.log('Ordenar las empreas: ', itCompanies.sort())
console.log('Revertir el orden de las empresas: ',itCompanies.reverse())
// los siguientes métodos funcionan por rango lo que quiero decir 
// es que debe resibir un parametro inicial y uno final
console.log('Tomar las primeras empresas',itCompanies.slice(0,3)) 
console.log('Tomar las ultimas empresas: ', itCompanies.slice(4,7))
// console.log('Eliminar empresa de TI ', itCompanies.splice(0,1));
console.log('Se elimina todos los elemento del arreglo');
itCompanies.splice()
console.log(itCompanies)

