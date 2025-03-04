const countriesAPI = "https://restcountries.com/v2/all";
let btn_population = document.getElementById("btn-population");
let btn_lenguages = document.getElementById("btn-lenguages");
let texto = document.getElementById('texto');
let tabla = document.getElementById('table-result');

btn_population.addEventListener('click', function(){
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

btn_lenguages.addEventListener('click', function(){
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