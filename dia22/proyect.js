function crearElemento(element) {
    return document.createElement(element);
}

function agregarContenido(element, texto) {
    return element.innerHTML = texto;
}

function mostrarElemento(element) {
    return document.body.appendChild(element);
}


function colorRamdom() {
    let arreglo = ['a','b','c','d','e','f',1,2,3,4,5,6,7,8,9,];
    let hex = '';

    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * arreglo.length);
        hex += arreglo[num];
    }
    // console.log('#'+hex);
    return '#'+hex;
}

function fechaFormateada() {
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    let date = new Date();
    let mes = meses[date.getMonth()];
    let dia = date.getDate();
    let anio = date.getFullYear();
    let tiempo = date.getHours() + ':'+ date.getMinutes() + ':' + date.getSeconds();

    return `${mes} ${dia}, ${anio} ${tiempo}`; 
}

document.body.style.width = '70%';
document.body.style.margin = '0px auto';

let titulo = crearElemento('h1');
let txt1 = crearElemento('h2');
let fecha = crearElemento('p');

titulo.style.textAlign = 'center';
txt1.style.textAlign = 'center';
fecha.style.textAlign = 'center';

agregarContenido(titulo, 'Asabeneh Yateyag challenges in <span>2020</span>')
let span = titulo.querySelector('span')
setInterval(() => {
    span.style.color = colorRamdom();
}, 1000);

agregarContenido(txt1, '30 Days of javascript chanllenge');

setInterval(() => {
    txt1.style.background = colorRamdom()
}, 2000);

agregarContenido(fecha, fechaFormateada());

mostrarElemento(titulo);
mostrarElemento(txt1);
mostrarElemento(fecha);

let lista = crearElemento('ul');
mostrarElemento(lista);
let obj = [
    {
        nombre: 'Python',
        reto: '30 Days of Python',
        descripcion: 'Un reto de 30 días para aprender Python, desde los fundamentos hasta temas avanzados como programación orientada a objetos y manejo de archivos.',
        estado: 'Done'
    },
    {
        nombre: 'JavaScript',
        reto: '30 Days of JavaScript',
        descripcion: 'Explora JavaScript en 30 días, cubriendo conceptos esenciales como funciones, objetos, eventos y manipulaciones del DOM.',
        estado: 'Ongoing'
    },
    {
        nombre: 'HTML & CSS',
        reto: '30 Days of HTML & CSS',
        descripcion: 'Un viaje de 30 días para dominar la creación de estructuras web con HTML y su diseño visual con CSS.',
        estado: 'Comming'
    },
    {
        nombre: 'React',
        reto: '30 Days of React',
        descripcion: 'Aprende React en 30 días, incluyendo componentes, estado, propiedades y el manejo del ciclo de vida de los componentes.',
        estado: 'Comming'
    },
    {
        nombre: 'ReactNative',
        reto: '30 Days of ReactNative',
        descripcion: 'Desarrolla aplicaciones móviles usando React Native en 30 días, desde configuraciones básicas hasta componentes avanzados.',
        estado: 'Comming'
    },
    {
        nombre: 'fullstack',
        reto: '30 Days of fullstack',
        descripcion: 'Un reto para convertirte en un desarrollador full-stack en 30 días, aprendiendo frontend, backend y bases de datos.',
        estado: 'Comming'
    },
    {
        nombre: 'Analysis',
        reto: '30 Days of Data Analysis',
        descripcion: 'Domina el análisis de datos en 30 días, desde recolección de datos hasta su visualización usando herramientas y bibliotecas populares.',
        estado: 'Comming'
    },
    {
        nombre: 'Machine Learning',
        reto: '30 Days of Machine Learning',
        descripcion: 'Aprende los conceptos básicos y avanzados de Machine Learning en 30 días, incluyendo algoritmos y aplicaciones prácticas.',
        estado: 'Comming'
    },
];

let i = 0;
for (let key of obj) {
    let item = document.createElement('li');

    agregarContenido(item, `
            <div>${key.reto}</div>
            <details>
                <summary>${key.nombre}</summary>
                <p>${key.descripcion}</p>
            </details>
            <div>${key.estado}</div>
        `)
    item.style.display = 'flex';
    item.style.justifyContent = 'space-between';
    item.style.listStyle = 'none';
    item.style.width = '100%';
    item.style.height = '10vh';
    item.style.padding = '10px';
    item.style.margin = '5px';

    if ( i == 0) {
        item.style.background = 'lightgreen';
    } else if (i == 1) {
        item.style.background = 'yellow';
    } else if (i >= 2) {
        item.style.background = 'tomato'
    }
    i++;
    mostrarElemento(item);
}

let cont_datos_dev = crearElemento('div');
let nombre = crearElemento('h1');
let txt2 = crearElemento('p');

nombre.style.textAlign = 'center';
txt2.style.textAlign = 'center';

agregarContenido(nombre, 'Marcos del Carmen');
agregarContenido(txt2, 'Hola, soy un programador que recien esta entrando al mundo la loboral sigo aprendido cosas además de las del trabajo <br> sigo practicando para mejorar mi logica de programación ademas de empezar con proyectos pequeños');

//? esto ayuda agrear el contenido al contenedor

cont_datos_dev.appendChild(nombre);
cont_datos_dev.appendChild(txt2);

mostrarElemento(cont_datos_dev);

let titulos = ['Programador', 'Development', 'Motivador', 'Creador de contenido'] ;
let sckills = ['Web development', 'Programming', 'Delvelopment Front End'];
let certificados = ['Angular', 'Ionic', 'Java de 0 a master'];

let cont_hablidades = crearElemento('div');
cont_hablidades.style.display = 'flex';
cont_hablidades.style.justifyContent = 'space-around';

let listaTitulos = crearElemento('ul');
cont_hablidades.appendChild(listaTitulos);

for (const element of titulos) {
    let item = crearElemento('li');
    agregarContenido(item, element);
    listaTitulos.appendChild(item);
}

let listaSkills = crearElemento('ul');
cont_hablidades.appendChild(listaSkills);
for (const element of sckills) {
    let item = crearElemento('li');
    agregarContenido(item, element);
    listaSkills.appendChild(item);
}
    
let listaCertificados = crearElemento('ul');
cont_hablidades.appendChild(listaCertificados);
for (const element of certificados) {
    let item = crearElemento('li');
    agregarContenido(item, element);
    listaCertificados.appendChild(item);
}

mostrarElemento(cont_hablidades)
let cont_keywords = crearElemento('div');
let titulo2 = crearElemento('h1');
agregarContenido(titulo2, 'Keywords')
mostrarElemento(titulo2);
// let keywords = ['#HTML', '#CSS', '#JS', '#JAVA', '#ASYC AWAIT', 'DOM', 'PROMISE']
const keywords = [
    "DOM", "Promesas", "async/await", "Eventos", "Fetch API", "Closures", "Hoisting",
    "Callbacks", "Arrow functions", "Prototipos", "Spread/rest operators", "Destructuración",
    "JSON", "ES6+", "Event loop",
  ];

cont_keywords.style.display = 'grid'
cont_keywords.style.gridTemplateColumns = 'repeat(9, auto)';
cont_keywords.style.gap = '10px';

for (let i = 0; i < keywords.length; i++) {
    let item = crearElemento('p');
    item.style.padding = '7px'
    item.style.background = colorRamdom();
    item.style.borderRadius = '30px';

    agregarContenido(item,keywords[i]);
    cont_keywords.appendChild(item);
}

mostrarElemento(cont_keywords)
