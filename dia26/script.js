const countriesAPI = "https://restcountries.com/v2/all";

let banner_section = document.createElement('section');
let fondo = document.createElement('div');
let cont = document.createElement('div');
let title = document.createElement('h1');
let total_countries = document.createElement('p');
let cont_buttons = document.createElement('div');
let input_search = document.createElement('input');
let btn_upward = document.createElement('button');
let search_icon = document.createElement('img');
let resutl = document.createElement('div');

cont.style.width = '100%';
cont.style.height = '100%';

fondo.style.background = 'rgb(33 150 243 / 28%)';
fondo.style.width = '100%';
fondo.style.height = '100%';
fondo.style.display = 'flex ';
fondo.style.justifyContent = 'center';
fondo.style.alignItems = 'center';

banner_section.style.backgroundImage = "url('img/globe-2.jpg')";
banner_section.style.backgroundSize = 'cover';
banner_section.style.width = '100%';
banner_section.style.height = '70vh';
banner_section.appendChild(fondo)

title.innerHTML = 'WORLD COUNTRIES LIST';
title.style.letterSpacing = '5px';
title.style.marginBottom = '20px';
title.style.marginTop = '10%';
title.style.fontSize = '3em';
title.style.textAlign = 'center';
title.style.color = '#fff';
cont.appendChild(title);

total_countries.innerHTML = 'Total number of countries: 193';
total_countries.style.color = '#fff';
total_countries.style.textAlign = 'center';
total_countries.style.fontSize = '1.5em';
total_countries.style.fontWeight = '500';
total_countries.style.marginBottom = '20px';
cont.appendChild(total_countries);

let countries_search = document.createElement('p') // este aparece cuando se empieza a buscar

cont_buttons.style.width = '40%';
cont_buttons.style.margin = '0px auto';

input_search.style.width = '85%';
input_search.style.height = '45px';
input_search.style.padding = '10px';
input_search.style.marginRight = '10px';
input_search.style.borderRadius = '5px';
input_search.style.border = 'none';
cont_buttons.appendChild(input_search)

btn_upward.innerHTML = '^';
btn_upward.style.width = '45px';
btn_upward.style.height = '45px';
btn_upward.style.borderRadius = '5px';
btn_upward.style.border = 'none';
// cont_buttons.appendChild(btn_upward)


cont.appendChild(cont_buttons);
fondo.appendChild(cont);
document.body.appendChild(banner_section);
// paises
/**
 * div
 *  div > p
 *  div.backgroundImg = 'imagen';
 */
function compararPaises(cadena) {  
    let resultado = [];  
    fetch(countriesAPI)
    .then((response)=>response.json())
    .then((data) => {
        resultado = data.filter(element => {
            let names = element.name.toLowerCase().split(cadena.toLowerCase());
            return names    
        });
        
        resultado.forEach(element => {
            let item = document.createElement('div');
            
            item.style.position = 'relative';
            item.style.textAlign = 'center';
            item.style.fontSize = '1.2em';
            item.style.fontWeight = '700';
            item.style.color = '#fff';
            item.style.width = '150px';
            item.style.height = '150px';
            item.style.backgroundImage = "url('img/map_image.jpg')";
            item.style.backgroundSize = 'cover';

            let fondo = document.createElement('div');
            fondo.style.position = 'absolute';
            fondo.style.width = '100%';
            fondo.style.height = '100%';
            fondo.style.top = '0';
            fondo.style.left = '0';
            fondo.style.zIndex = '0';
            fondo.style.background = 'rgb(33 150 243 / 28%)';

            let texto = document.createElement('span');
            texto.textContent = element.name;
            texto.style.position = 'relative'; // Asegura que el texto esté encima
            texto.style.zIndex = '1'; // Pone el texto encima del fondo

            item.appendChild(fondo);
            item.appendChild(texto);
            resutl.appendChild(item);
        });
        
    }).catch((error)=>console.error(error));
}

resutl.style.marginTop = '20px';
resutl.style.width = '100%';
resutl.style.height = '50%';
resutl.style.display = 'grid';
resutl.style.justifyItems = 'center';
resutl.style.gridTemplateColumns = 'repeat(6, 1fr)';
resutl.style.gap = '20px';

input_search.addEventListener('input',(event)=> {
    resutl.innerHTML = '';
    this.compararPaises(event.target.value);
})

document.body.appendChild(resutl);