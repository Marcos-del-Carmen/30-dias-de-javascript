// let planets = ['SELECCIONA UN PLANETA','Tierra', 'Jupiter', 'Marte', 'Mercurio', 'Luna', 'Neptuno', 'Pluton', 'Saturno', 'Urano', 'Venus'];
const planets = [
    {
        planeta: 'Seleccione un planeta',
        gravedad: 0
    }, {
        planeta: 'Tierra',
        gravedad: 9.8
    }, {
        planeta: 'Júpiter',
        gravedad: 24.79
    }, {
        planeta: 'Marte',
        gravedad: 3.71
    }, {
        planeta: 'Mercurio',
        gravedad: 3.7
    }, {
        planeta: 'Luna',
        gravedad: 1.62
    }, {
        planeta: 'Neptuno',
        gravedad: 11.15
    }, {
        planeta: 'Plutón',
        gravedad: 0.62
    }, {
        planeta: 'Saturno',
        gravedad: 10.44
    }, { 
        planeta: 'Urano',	
        gravedad: 8.69
    }, {
        planeta: 'Venus',	
        gravedad: 8.87
    }
]

let combo = document.getElementById('combo_planets');
let kilo = document.getElementById('kilogramos');
let boton = document.getElementById('btn_calcule');
let result = document.getElementById('result');
result.style.padding = '10px';
result.style.display = 'flex';

let i = 0;
for (const planet of planets) {
    let option = document.createElement('option');
    option.className = 'options';
    option.value = i;
    option.innerHTML = planet.planeta
    combo.appendChild(option);
    i++;
}

let opcions = document.querySelectorAll('.options');
let peso;

boton.addEventListener('click', function() {
    result.innerHTML = '';   
    if (kilo.value > 0) {
        let cont_text = document.createElement('h3');
        let cont_peso = document.createElement('p');
        let img = document.createElement('img');
        let v = combo.value;
        let planeta;
        let text;
        if(v == 0) {
            result.innerHTML = '<p>No a seleccionado un planeta</p>'
        } else {
            let cont = document.createElement('div')
            cont.className = 'cont-result';
            cont.style.width = '100%';
            img.src = `img/${planets[v].planeta}.png`;
            img.style.width = '200px';
            img.style.height = '200px';

            planeta = planets[v].planeta
            peso = kilo.value * planets[v].gravedad;
            text = `El peso del objeto en la ${planeta}`;
        
            cont_text.innerHTML = text;
            cont_peso.innerHTML = peso.toFixed(2) + ' N';

            cont.appendChild(cont_text);
            cont.appendChild(cont_peso);

            result.appendChild(img);
            result.appendChild(cont);
        }
    } else {
        console.log('Lo siento no se permite texto');
        result.innerHTML = '<p>Lo siento, no se permite texto</p>'
    }

    if (kilo.value.trim() === '') {
        result.innerHTML = '<p>No seleccionaste un numero</p>'
        console.log('No seleccionaste un numero')
    }
    
    
})

