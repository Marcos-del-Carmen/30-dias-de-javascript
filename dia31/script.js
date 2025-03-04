let nombre = document.getElementById('first_name');
let last_name = document.getElementById('last_name');
let email = document.getElementById('email');
let pass = document.getElementById('password');
let telephone = document.getElementById('telephone');
let description = document.getElementById('description');

let title_input = document.getElementsByClassName('title-input');
let alert_number = document.getElementsByClassName('alert_number');
let alert_caracter = document.getElementsByClassName('alert_caracter');
let alert_empy = document.getElementsByClassName('alert_empy');
let alert_domain = document.getElementsByClassName('alert_domain')
let alert_length = document.getElementsByClassName('alert_length');

let togglePassword = document.getElementById('togglePassword');
let btn_send = document.getElementById('btn-send');

let colores = ['#333', 'rgb(0, 135, 0);']

function validNumbers(nums) {
    regex = /[0-9]/g; // expreción regular que busca en una cadena si tiene numeros
    return regex.test(nums); // metodo que retorna una bandera 
}

function validSymbol(text) {
    regex = /[^\w\s]/g;
    return regex.test(text);
}

function validEmail(email) {
    let domain = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    console.log('correo', domain.test(email))
    return domain.test(email);
}

function validPass(pass) {
    let regex = /^(?=.*[A-Z])(?=.*\d).+$/;
    return regex.test(pass);
}

nombre.addEventListener('input', (e) => {

    if (e.target.value == '') {
        title_input[0].style.color = 'tomato';
        alert_empy[0].style.display = 'block';
        nombre.style.border = '1px solid tomato';
        alert_caracter[0].style.display = 'none';
    } else {
        title_input[0].style.color = colores[0];
        nombre.style.border = colores[0];
        alert_empy[0].style.display = 'none';
    }
    
    if(validNumbers(e.target.value)) {
        nombre.style.border = '1px solid tomato';
        alert_number[0].style.display = 'block';
    } else {
        nombre.style.border = colores[0];
        alert_number[0].style.display = 'none';
    }
    
    if (validSymbol(e.target.value)){
        nombre.style.border = '1px solid tomato';
        alert_caracter[0].style.display = 'block';
    } else {
        nombre.style.border = colores[0];
        alert_caracter[0].style.display = 'none';
    }
})

last_name.addEventListener('input', (e) => {

    if (e.target.value == '') {
        title_input[1].style.color = 'tomato';
        nombre.style.border = '1px solid tomato';
        alert_empy[1].style.display = 'block';
        alert_caracter[1].style.display = 'none';
    } else {
        title_input[1].style.color = colores[0];
        nombre.style.border = colores[0];
        alert_empy[1].style.display = 'none';
    }
    
    if(validNumbers(e.target.value)) {
        nombre.style.border = '1px solid tomato';
        alert_number[1].style.display = 'block';
    } else {
        nombre.style.border = colores[0];
        alert_number[1].style.display = 'none';
    }
    
    if (validSymbol(e.target.value)){
        nombre.style.border = '1px solid tomato';
        alert_caracter[1].style.display = 'block';
    } else {
        nombre.style.border = colores[0];
        alert_caracter[1].style.display = 'none';
    }
})


email.addEventListener('input', (e)=> {
    if (e.target.value == '') {
        title_input[2].style.color = 'tomato';
        email.style.border = '1px solid tomato';
        alert_empy[2].style.display = 'block';
        alert_caracter[2].style.display = 'none';
    } else {
        title_input[2].style.color = colores[0];
        email.style.border = colores[0];
        alert_empy[2].style.display = 'none';
    }
    
    if(validEmail(e.target.value)) {
        alert_domain[0].style.display = 'none';
    } else {
        alert_domain[0].style.display = 'block';
    }
})

// togglePassword.addEventListener('click', (e)=>{

//     if (pass.type === "password") {
//         pass.type = "text";
//     } else {
//         pass.type = "password";
//     }
// })

pass.addEventListener('input', (e)=> {
    if (e.target.value == '') {
        title_input[3].style.color = 'tomato';
        alert_empy[3].style.display = 'block';
        pass.style.border = '1px solid tomato';
        alert_caracter[3].style.display = 'none';
    } else {
        title_input[3].style.color = colores[0];
        pass.style.border = colores[0];
        alert_empy[3].style.display = 'none';
    }
    
    if (e.target.value.length <= 6) {
        pass.style.border = '1px solid tomato';
        alert_length[0].style.color = 'tomato';
        alert_length[0].style.display = 'block';
        console.log('Tiene que ser mayor de 6');
    } else {
        alert_length[0].style.color = colores[0];
        alert_length[0].style.display = 'none';
        pass.style.border = colores[0];
        console.log('Tiene es ser mayor de 6');
    }
})


telephone.addEventListener('input', (e)=>{
    if (e.target.value.length != 0 && validNumbers(e.target.value) && e.target.value.length <= 11) {
        alert_length[1].style.color = colores[0];
        alert_length[1].style.display = 'none';
        telephone.style.border = colores[0];
    } else {
        telephone.style.border = '1px solid tomato';
        alert_length[1].style.color = 'tomato';
        alert_length[1].style.display = 'block';
    }
})

description.addEventListener('input', (e)=>{
    if (e.target.value.length != 0 && (e.target.value.length >= 8 && e.target.value.length <= 50)) {
        alert_length[2].style.color = colores[0];
        alert_length[2].style.display = 'none';
        description.style.border = colores[0];
    } else {
        description.style.border = '1px solid tomato';
        alert_length[2].style.color = 'tomato';
        alert_length[2].style.display = 'block';
    }
})


function datosValidos() {
    console.log('click')
    if (nombre != '' && last_name != '' && email != '' && pass != '' && telephone != '' && description != '') {
        btn_send.style.backgroud  = colores[1];
    } else {
        btn_send.style.backgroud  = colores[0];
    }
}

btn_send.addEventListener('click', datosValidos());