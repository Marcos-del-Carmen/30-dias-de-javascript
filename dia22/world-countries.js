const countriesAPI = "https://restcountries.com/v2/all";

function crearElemento(element) {
    return document.createElement(element);
}

function agregarContenido(element, texto) {
    return element.innerHTML = texto;
}

function mostrarElemento(element) {
    return document.body.appendChild(element);
}

let titulo = crearElemento('h1');
let suptitulo = crearElemento('h3');
let texto = crearElemento('p');
let autor = crearElemento('p');
let container = crearElemento('div')

container.style.display = 'grid';
container.style.gap = '20px';
container.style.placeItems = 'center';
container.style.gridTemplateColumns = 'repeat(5, 1fr)';
titulo.style.textAling = 'center';
suptitulo.style.textAling = 'center';
texto.style.textAling = 'center';
autor.style.textAling = 'center';
document.body.style.width = '80%';
document.body.style.margin = '0px auto';

agregarContenido(titulo, 'WORLD COUNTRIES LIST');
agregarContenido(suptitulo, 'total number of countries: 193');
agregarContenido(texto, '30 Days of JavaScript DOM-Day-2');
agregarContenido(autor, 'Auhor: Marcos Del Carmen');

mostrarElemento(titulo);
mostrarElemento(suptitulo);
mostrarElemento(texto);
mostrarElemento(autor);
mostrarElemento(container);

fetch(countriesAPI)
.then((response) => response.json())
.then((data) => {
        data.forEach((element, index) => {
            if (index < 20) {
                let item = crearElemento('div')
                item.className = 'item';
                item.style.width = '150px';
                item.style.height = '150px';
                item.style.border = '1px solid #cacaca';
                item.style.borderRadius = '5px';
                agregarContenido(item, element.name);
                container.appendChild(item);
            }
        });
    })
    .catch((error)=>console.error(error));