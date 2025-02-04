let nombre = 'Marcos Del Carmen';
let skills = [
  { name: 'Programador', emoji: '💻' },
  { name: 'Creador de contenido', emoji: '🎥' },
  { name: 'Motivador', emoji: '🔥' },
  { name: 'Diseñador web', emoji: '🎨' }
];

let description = 'Soy un desarrollador que a trabajado 8 meses en la empresa Softura Solitions trabajando en el proyecto Bituyú y Firel obteniendo experiencia, quiero llegar a tener un senior y bueno aunque tengo un camino por recorrer voy disfrutando de su proceso. <br> Este es un reto de JavaScript para probarme a mi que puedo con lo que me prongo.';
let retos = ['JAVASCRIPT FOR EVERYONE', '30 DAYS OF PYTHON', '30 DAYS OF JAVASCRIPT']
let conocimientos = ['JAVASCRIPT', 'JAVA', 'HTML', 'NODE.JS', 'PHP', 'ANGULAR', 'IONIC', 'VUE.JS'];

let projets = [
    {
        name: 'Bituyú',
        image: 'img/bituyu.png',
        description: 'Colaboro en el proyecto resolviendo bugs e implementando requerimientos',
        date: 'Enero 2025',
        tools: ['Angular', 'Laravel']
    },
    {
        name: 'Firel',
        image: 'img/firel.png',
        date: 'Noviembre 2024',
        description: 'Colabore en gerando una firma pkcs7 apartir de el cer y key ademas del maquetado',
        tools: ['Vue.js', 'Yii']
    }
];
document.body.style.width = '80%';
document.body.style.margin = '0px auto';

let cont_name =  document.createElement('div');
cont_name.innerHTML = `${nombre}`;
cont_name.style.fontSize = '3.4em';
cont_name.style.fontWeight = '800';
cont_name.style.marginBottom = '20px';
document.body.appendChild(cont_name);

let cont_skills = document.createElement('div');
let i = 0;
cont_skills.innerHTML = `${skills[3].emoji} <marquee> ${skills[3].name}</marquee>`;
cont_skills.style.background = this.colores();
cont_skills.style.fontSize = '1.4em';
cont_skills.style.marginBottom = '20px';
cont_skills.style.fontWeight = '700';
cont_skills.style.padding = '10px';
cont_skills.style.borderRadius = '5px';
cont_skills.style.letterSpacing = '10px';
// let marquee = document.getElementsByTagName('marquee');
// marquee.style.width = '90%';
setInterval(() => {
    let element = skills[i];
    i++;
    cont_skills.innerHTML = `${element.emoji} <marquee> ${element.name}</marquee>`;
    if (i == skills.length) i = 0;
}, 18000);

document.body.appendChild(cont_skills)

let text_description = document.createElement('p')
text_description.innerHTML = description;
document.body.appendChild(text_description);

let cont_languajes = document.createElement('div')
cont_languajes.style.display = 'grid';
cont_languajes.style.justifyContent = 'center';
cont_languajes.style.alignItems = 'center';
cont_languajes.style.marginTop = '30px';
// cont_languajes.style.content = 'center';
cont_languajes.style.gridTemplateColumns = 'repeat(3, 1fr)';

retos.forEach((item, index) => {
    let text_languages = document.createElement('p');
    text_languages.innerHTML = item;
    text_languages.style.textAlign = 'center';
    text_languages.style.height = '120px';
    text_languages.style.margin = '10px';
    text_languages.style.display = 'flex';
    text_languages.style.justifyContent = 'center';
    text_languages.style.alignItems = 'center';
    
    text_languages.addEventListener('mousedown', () => {
        text_languages.style.transition = "all 0.5s ease";
        text_languages.style.background = '#ffded8';
        text_languages.style.transform = "scale(1.2)";
    })
    
    text_languages.addEventListener('mouseup', () => {
        text_languages.style.background = '';
        text_languages.style.transform = "scale(1)"; 
    });

    cont_languajes.appendChild(text_languages);
});

document.body.appendChild(cont_languajes);
 
let text_tecnologi = document.createElement('h3'); // tomar el contenido o texto de este elemento para insertar otro que este dentro de un arreglo
// let spann = document.getElementsByTagNameNS('span');

let j = 0;
text_tecnologi.innerHTML = `Tengo los siguientes conocimientos <span>${conocimientos[7]}</span>`;
text_tecnologi.style.textAlign = 'center';
setInterval(()=>{
    j++;
    text_tecnologi.innerHTML = `Tengo los siguientes conocimientos <span>${conocimientos[j]}</span>`;
    text_tecnologi.style.color = this.colores()
}, 3000);

document.body.appendChild(text_tecnologi)

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
