let paises = ["Japón", "China", "Rusia", "México", "Colombia", "Corea del Sur", "Ethiopia", "Chile", "Corea del norte", "Canada", "Argentina", "Brazil"]
let cantPais = paises.length;
console.log('cantidad de paises ',cantPais)
let medio4 = Math.round(cantPais / 2);
console.log('mitad del arreglo ',medio4)
let array1 = paises.splice(0, medio4);

let array2 = paises.splice(medio4-1, cantPais-1)
 
if(paises.indexOf("Ethiopia") != -1) {
    console.log('Estos son los paises', paises)
} else {
    console.log('No existe Ehiopia en el arreglo')
    paises.push("Ehiopia");
}

console.log('Areglo dividio 1', array1)
console.log('Areglo dividio 2', array2)
console.log('Corte de paises', paises.splice(0,10));
console.log('El pais que esta en medio del arreglo:', 
    paises[medio4]); 

if (cantPais % 2 == 0) {
    
} else {  

}