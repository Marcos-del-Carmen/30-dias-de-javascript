// Tiempo de desarrollo 00:34.21  
let cont = document.querySelector('.cont')
let text = document.getElementById('text')

let tipografias = ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'];
let parrafo = '30 DAYS OF JAVASCRIPT CHALLENGUE 2025 MARCOS DEL CARMEN';

function colores() {
    let l = 'a,b,c,d,e,f,1,2,3,4,5,6,7,8,9,0';
    let letras = l.split(',');    
    let hex = '';
    
    for (let i = 0; i < 6; i++) {
        let ramdom = Math.floor(Math.random() * letras.length);
        hex = hex + letras[ramdom];
    }
    return `#${hex}`;
}

function letrasColores() {
    text.innerHTML = '';
    for (let i = 0; i < parrafo.length; i++) {
        let l = document.createElement('span');
        l.innerHTML = parrafo[i];
        l.style.color = colores();
        text.appendChild(l);
    }

}

let i = 0;
cont.style.width = '100%';
cont.style.height = '100vh';
text.style.fontSize = '5.5em';
text.style.padding = '30px';

cont.style.background = colores();

letrasColores();

setInterval(() => {
    i++;
    if(tipografias.length == i) {
        i = 0;
    }
    cont.style.background = colores();
    letrasColores();
    text.style.fontFamily = tipografias[i];
    console.log(tipografias[i]);
    
}, 2000);

cont.appendChild(text);
document.body.appendChild(cont);