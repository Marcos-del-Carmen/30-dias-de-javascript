let webTechs = ["Java", "PHP", "JavaScript", "Phyton"];

let cadena = webTechs.toString();
console.log(cadena)
let cambio = cadena.replace(/,/g," ");
console.log('Tecnologias', cambio);

let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.split(" ")
console.log(words);
console.log(words.length);

// console.log(Array(text));
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log('Productos ', shoppingCart)
shoppingCart.push("Meat");
shoppingCart.push("Sugar");
console.log('Agregar producto ', shoppingCart)

let eliminar = shoppingCart.indexOf("Honey");
shoppingCart.splice(eliminar, 1);
console.log('Arreglo de carrito con producto eliminaodo ', shoppingCart);
// console.log('Eliminar producto',shoppingCart)


let agregar = shoppingCart.indexOf("Tea");
console.log(agregar);
shoppingCart[agregar] = "Green Tea";
console.log(shoppingCart)

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort());
let suma=0;
let cantidad = ages.length;

for (let i = 0; i < ages.length; i++) {
    suma = suma + ages[i];
}
let medio = ages.length;

let medio1 = Math.floor(medio/2);
let medio2 = Math.ceil(medio/2) + 1;

console.log(medio1, medio2)
if (medio % 2 == 0) {
    console.log('La edad de en medio', ages[medio1], ages[medio2]);
} else {
    console.log('La edad de en medio', ages[Math.ceil(medio/2)]);
}
let promedio = Math.round(suma / cantidad);
let max = Math.max(...ages);
let min = Math.min(...ages);
let rango = max-min;
let promMin = min - promedio;
let promMax = max - promedio;


console.log('promedio minimo ', Math.abs(promMin));
console.log('promedio maximo ', Math.abs(promMax));
console.log('El promedio de las edades es', promedio);
console.log('El rango es de ', rango);



