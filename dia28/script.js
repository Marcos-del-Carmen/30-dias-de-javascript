let nombre = document.getElementById('name');
let apellido = document.getElementById('lastname');
let pais = document.getElementById('country');
let puntuacion = document.getElementById('score');
let btnAddPlayer = document.getElementById('btnAddPlayer');

let cont_players = document.getElementById('cont-players');
let table_players = document.getElementById('table-players')
let alertEmpy = document.createElement('div');
let cont_alert = document.querySelector('.cont-alert')
let users = [
    {
        id: 1,
        name: 'John',
        lastname: 'Doe',
        country: 'USA',
        score: 85, 
        date: this.fechaActual()
    },
    {
        id: 2,
        name: 'Maria',
        lastname: 'Gonzalez',
        country: 'Spain',
        score: 92, 
        date: this.fechaActual()
    },
    {
        id: 3,
        name: 'Akira',
        lastname: 'Tanaka',
        country: 'Japan',
        score: 78, 
        date: this.fechaActual()
    },
    {
        id: 4,
        name: 'Liam',
        lastname: 'O\'Connor',
        country: 'Ireland',
        score: 88, 
        date: this.fechaActual()
    }
];

function fechaActual() {
    let meses = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    let date = new Date();
    
    let dia = date.getDate();
    let mes = meses[date.getMonth()];
    let anio = date.getFullYear();
    let hora = `${date.getHours()}:${date.getMinutes()}.${date.getSeconds()}`;
    return `${mes} ${dia}, ${anio} ${hora}`;
}

let idUser = 5;
function agregarUsuario(name, lastname, country, score) {
    if (camposVacios()) {
        alertEmpy.innerHTML = 'Lo siento, pero antes tienes que rellenar todos los campos';
        alertEmpy.style.width = '80%'
        alertEmpy.style.height = '50px'
        alertEmpy.style.background = 'tomato'
        alertEmpy.style.border = '3px solid red'
        alertEmpy.style.margin = '10px auto'
        alertEmpy.style.borderRadius = '5px'
        alertEmpy.style.display = 'flex'
        alertEmpy.style.justifyContent = 'center'
        alertEmpy.style.alignItems = 'center'

        cont_alert.appendChild(alertEmpy)
    } else {
        cont_alert.innerHTML = '';
        users.push({
            id: idUser++,
            name: name,
            lastname: lastname,
            country: country,
            score: Number(score),
            date: this.fechaActual()
        });
    
        nombre.value = '';
        apellido.value = '';
        pais.value = '';
        puntuacion.value = '';
        btnAddPlayer.value = '';
    }
    
    tablaPlayes();
}

function camposVacios() {
    return nombre.value === '' || apellido.value === '' || pais.value === '' || puntuacion.value === '';
}

btnAddPlayer.addEventListener('click', function() {
    agregarUsuario(nombre.value, apellido.value, pais.value, puntuacion.value);
    tablaPlayes();
});

function tablaPlayes() {
    table_players.innerHTML = '';
    // cont_players.innerHTML = '';
    // cont_players.innerHTML = '';
    // cont_players.innerHTML = '';
    for (const [index, user] of users.entries()) {
        let fila = document.createElement('tr');
        let name = document.createElement('td');
        let lastname = document.createElement('td');
        let country = document.createElement('td');
        let score = document.createElement('td');
        
        let btn_delete = document.createElement('button');
        let btn_increment_score = document.createElement('button');
        let btn_decrement_score = document.createElement('button');
        
        name.innerHTML = `${user.name} <br> <span>${user.date}</span>`;
        lastname.innerHTML = user.lastname;
        country.innerHTML = user.country;
        score.innerHTML = user.score;

        btn_delete.addEventListener('click', function() {
            users.splice(index, 1);
            // fila.remove();
            tablaPlayes();
        })

        btn_increment_score.addEventListener('click', function() {
            user.score = user.score + 5;
            tablaPlayes();
        })

        btn_decrement_score.addEventListener('click', function() {
            user.score = user.score - 5;
            tablaPlayes();
        })

        let img = document.createElement('img');
        img.src = 'https://cdn-icons-png.flaticon.com/512/1214/1214428.png'; // URL de la imagen
        img.alt = 'Eliminar';
        img.width = 20; // Ajusta el tamaño si es necesario
        img.height = 20;
        btn_delete.appendChild(img);
        // btn_delete.innerHTML = 'D';
        // btn_delete.src = 'img/icon-delete.png';
        btn_increment_score.innerHTML = '+5';
        btn_decrement_score.innerHTML = '-5';
        
        
        btn_delete.id="btn-delete"
        btn_increment_score.id="btn_increment_score"
        btn_decrement_score.id="btn_decrement_score"
        fila.appendChild(name);
        fila.appendChild(lastname);
        fila.appendChild(country);
        fila.appendChild(score);
        fila.appendChild(btn_delete);
        fila.appendChild(btn_increment_score);
        fila.appendChild(btn_decrement_score);
        table_players.append(fila)

    }


}

tablaPlayes();
document.body.appendChild(cont_players);
