const countriesAPI = "https://restcountries.com/v2/all";
let input_search = document.getElementById('input-search');
let btn_name = document.getElementById('input-search');
let btn_population = document.getElementById('input-search');
let btn_lenguages = document.getElementById('input-search');
let btn_top_population = document.getElementById("btn-top-population")
let btn_top_lenguages = document.getElementById("btn-top-lenguajes")
let tabla = document.getElementById("table-stacs")
let cont_result_countries = document.querySelector('.cont-result');

/**
 * En los botones funcionan dependiendo es decir se van a ordenar de 
 * mayor a menor o viceversa 
 */

cont_result_countries.style.display = 'grid';
cont_result_countries.style.gridTemplateColumns = 'repeat(5, 1fr)';
cont_result_countries.style.gap = '20px';

const dataContries = new Promise((resolve, reject) => {
    fetch(countriesAPI)
    .then((response)=> response.json())
    .then((data)=>{
        resolve(data);
    }).catch((error)=>{
        reject(error)
    });
  
})

// apartir del parameto que se le esta pasando buscar el nombre o la capital del pais
// o se podria hacer otra funcion 
async function filtrarPaises(inputValue) {
    let data = await dataContries; 
    data.forEach((country, index) => {
        if (country.capital != undefined) {
            if (country.name.toLowerCase().search(inputValue.toLowerCase()) != -1 || country.capital.toLowerCase().search(inputValue.toLowerCase()) != -1) {
                let txt = '';
                let cont = document.createElement('div');
                let img = document.createElement('img');
                let nombre = document.createElement('p');
                let capital = document.createElement('p');
                let poblacion = document.createElement('p');
                let lenguages = document.createElement('p');
        
                img.src = country.flag;
                img.style.width = '150px';
        
                country.languages.forEach(languaje => {
                    txt += ', '+languaje.name;
                });
        
                txt = '<b>Lenguajes:</b> ' + txt;
                nombre.innerHTML = '<b>Nombre: </b>'+ country.name;
                capital.innerHTML ='<b>Capital: </b>'+ country.capital;
                lenguages.innerHTML = txt; // se hizo esto por que los lenguajes estan en un arreglo
                poblacion.innerHTML ='<b>Población: </b>'+ country.population;
        
                cont.appendChild(img);
                cont.appendChild(nombre);
                cont.appendChild(capital);
                cont.appendChild(lenguages);
                cont.appendChild(poblacion);
                cont_result_countries.appendChild(cont);
                if (index == 25) {
                    console.log('value input', inputValue)
                    return null;
                }
            } else  {
                cont_result_countries.innerHTML = '';
            }
        } 
    });
}

async function buscarPais() {
    input_search.addEventListener('input', function(event) {
        filtrarPaises(event.target.value);
    })
}

function order() {

}

btn_top_population.addEventListener('click', function(){
    tabla.innerHTML = '';
    fetch(countriesAPI)
    .then((response) => response.json())
    .then((data) => {
        let top10 = data.sort((a, b) => b - a).slice(0, 10);
        
        top10.forEach(item => {
            let total = 50000000;
            let fila = document.createElement('tr');
            let name = document.createElement('td');
            let percent = document.createElement('td');
            let numbers = document.createElement('td');
            let ancho = document.createElement('p')
            let porcetaje = ((item.population/total) * 100);
            
            name.textContent = item.name;
            ancho.style.width = Math.floor(porcetaje) + '%';
            ancho.style.background = 'orange';
            ancho.textContent = '\u00A0';
            
            numbers.textContent = item.population;
            
            fila.appendChild(name);
            percent.appendChild(ancho);
            fila.appendChild(percent);
            fila.appendChild(numbers);
            tabla.appendChild(fila);
        });
    }).catch((error)=>console.error(error));
}); 

btn_top_lenguages.addEventListener('click', function(){
    tabla.innerHTML = '';

    fetch(countriesAPI)
    .then((response) => response.json())
    .then((data) => {
        let languageCount = { };
        data.forEach((element, index) => {

            const lenguajes = element.languages || [];

            lenguajes.forEach(lenguaje => {
                const langName = lenguaje.name;
                // Incrementar el conteo del lenguaje
                if (languageCount[langName]) {
                    languageCount[langName]++;
                } else {
                    languageCount[langName] = 1;
                }
            })
        });
        
        let top10 = Object.entries(languageCount).sort(([,a], [,b]) => b - a).slice(0, 10);
        top10.forEach(([nombre, numero]) => {
            let total = 100;
            let fila = document.createElement('tr');
            let name = document.createElement('td');
            let percent = document.createElement('td');
            let numbers = document.createElement('td');
            let ancho = document.createElement('p');
            let porcetaje = ((numero/total) * 100);

            name.textContent = nombre;
            ancho.style.width = porcetaje.toFixed(0)+'%';
            ancho.style.background = 'orange';
            ancho.textContent = '\u00A0';

            // percent.textContent = ancho;
            numbers.textContent = numero;
    
            fila.appendChild(name);
            percent.appendChild(ancho);
            fila.appendChild(percent);
            fila.appendChild(numbers);
            tabla.appendChild(fila);
        });
    }).catch((error)=>console.error(error));
})

buscarPais();
// mostrarPaises();