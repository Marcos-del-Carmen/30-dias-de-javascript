let texto = document.querySelector("p");
console.log('contenido del texto', texto);

for (let i = 1; i <= 3 ; i++) {
    console.log(document.querySelector("#txt"+i));
}

console.log('contenido del node list');
let nodeList = document.querySelectorAll('p');
for (let i = 0; i < nodeList.length; i++) {
    console.log(nodeList[i]);
}
console.log('node list', nodeList);

nodeList[3].textContent = 'Este es el contenido desde el js';
for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].className = 'texto'
    nodeList[i].style.padding = '10px';
    nodeList[i].style.background = "green";
    if(i >= 3) {
        nodeList[i].style.background = "red";
    }
}
// Cambiar el estilo de cada párrafo mediante JavaScript (ej, color, fondo, borde, tamaño de la fuente, familia de la fuente)
// Seleccione todos los párrafos y haga un bucle a través de cada uno de los elementos y dé al primer y tercer párrafo un color verde, y al segundo y cuarto párrafo un color rojo
// Establecer textContent, id y class a cada párrafo
nodeList[5].id = 'txt5';
nodeList[5].style.background = '#999'
nodeList[5].style.color = '#000'
nodeList[5].style.borderRadius = '10px';
nodeList[5].style.border = '1px solid #333';
