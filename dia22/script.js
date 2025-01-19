
// let title;
// for (let i = 1; i <= 30; i++) {
//     title = document.createElement('h1'); // crea un elemento html desde js
//     title.className = "title";
//     title.style.fontSize = "24px";
//     title.textContent = "Creating HTML element DOM Day 2 " + i;
//     document.body.appendChild(title); // muestra el elemento creado en el html
//     console.log(title);
// }

// const ul = document.querySelector('ul'); // seleccionamos los elementos html
// const lists = document.querySelectorAll('li') // elimina los elementos html
// for (const list of lists) {
//     ul.removeChild(list);
// }

// const ul = document.querySelector('ul');
// ul.innerHTML = '';
let title = document.createElement('h1');
title.innerHTML = 'Number Generator';
title.style.fontSize = '3em';
document.body.appendChild(title)

document.body.style.fontFamily = 'sans-serif';

let title2 = document.createElement('h2');
title2.innerHTML = '30 days JavaScript: DOM Day 2';
document.body.appendChild(title2)

let title3 = document.createElement('h3');
title3.innerHTML = 'Author: Asabeneh Yetayeh';
title3.style.marginBottom = '20px';
document.body.appendChild(title3)

let container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

function primo(numero) {
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
}

for (let i = 1; i <= 100; i++) {
    let element = document.createElement('div');
    element.className = "item";
    element.style.color = "#fff";

    if(primo(i)){
        element.style.background = 'yellow';
        element.style.color='#333';
    } else if (i % 2 == 0) {
        element.style.background = "green"
    } else if (i % 2 != 0) {
        element.style.background = "red"
    }

    element.innerHTML = i;
    container.appendChild(element);
}
