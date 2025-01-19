/*
Desarrolle la siguiente aplicación, utilice los siguientes elementos HTML para empezar. Obtendrá el mismo código en la carpeta de inicio. Aplique todos los estilos y la funcionalidad utilizando sólo JavaScript.

El color del año cambia cada 1 segundo
El color de fondo de la fecha y la hora cambia cada dos segundos
El reto completado tiene fondo verde
El desafío en curso tiene fondo amarillo
Los próximos retos tienen fondo rojo 
*/

let date = new Date();

function colorHex() {
    let caracteres = ['a','b','c','d','e','f',1,2,3,4,5,6,7,8,9];    
    let hex = '';
    
    for (let i = 1; i <= 6; i++) {
        let r = Math.floor((Math.random() * caracteres.length));
        hex += caracteres[r];
    }
    
    return '#'+hex;
}

function cambioColor() {
    let item = document.querySelector('.fecha-c');
    item.style.color = colorHex();
}

function cambioBackground() { 
    let item = document.querySelector('.fecha-bg');
    item.style.background = colorHex();
}

setInterval(cambioColor, 1000);
setInterval(cambioBackground, 2000);

let titulo = document.querySelector('h3');
titulo.textContent = `${date}`;

let items = document.querySelectorAll('li');
items[0].style.background = 'green';
items[1].style.background = 'yellow';
for (let i = 0; i < items.length; i++) {
    items[i].style.padding = '10px';
    items[i].style.margin = '5px';
    items[i].style.borderRadius = '10px';
    items[i].style.border = '1px solid #333';
    if(i >= 2) {
        items[i].style.background = 'tomato';
    }
}



