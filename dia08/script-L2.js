const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node.js'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

let paises = {
    Mexico: {
        nombre: 'México',
        capital: 'Ciudad de México',
        poblacion: 126014024,
        idiomas: ['Español']
    },
    Canada: {
        nombre: 'Canadá',
        capital: 'Ottawa',
        poblacion: 38005238,
        idiomas: ['Inglés', 'Francés']
    }
}

/**
 * 1. Encuentra a la persona que tiene muchas habilidades en el objeto de los usuarios.
 * 2. Contar los usuarios conectados, contar los usuarios que 
 *    tienen más de 50 puntos del siguiente objeto.
 */
// console.log(Object.values(users));
let valores = Object.values(users);
console.log('valores',valores)
let cont = 0;
let tempSkills = [];
let copyUsers = {
    ...users,
    Marcos: {
        email: 'marcos@gmail.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Express', 'Vue.js', 'Node.js'],
        age: 23,
        isLoggedIn: false,
        points: 50
    } 
}

valores.forEach(person => {
    tempSkills.push(person.skills.length);
});
console.log('Habilidades maximas',Math.max(...tempSkills))
console.log(Object.entries(users));

valores.forEach(person => {
    if (person.points >= 50){
        cont++;
    }
})

console.log('Las personas que tienen más o igual a 50 puntos son ' + cont);

valores.forEach(person => { 
    let skill = person.skills;
    // console.log('skills', skill)
    for (let i = 0; i < skill.length; i++) {
        if (skill[i] == 'Redux'){
            console.log('Encontramos a alguien con habilidades en Redux')
        }
    }
})
/**
 * 4. Establezca su nombre en el objeto usuarios
 *    sin modificar el objeto usuarios original
*/

console.log('Copia de objeto', copyUsers);

/**
 * 5. Obtener todas las claves o propiedades del objeto 
 *    usuarios
 */

console.log(Object.keys('clave de usuarios',users));
/**
 * 6. Obtener todos los valores del objeto usuarios
 */
console.log('Valores del objeto usuario ', valores);

/** 
 * 7. Utilice el objeto países para imprimir el nombre 
 *    del país, la capital, la población y los idiomas.
 */

console.log('Paises ', paises)


