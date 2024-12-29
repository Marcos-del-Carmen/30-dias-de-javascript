import {countries } from '../countries_data.js';

function infoCountries(array) {
    let {name, capital, lenguages, pupalation, flag, currency} = array;

    for (const {name, capital, languages, population, flag, currency} of array) {
        console.log(`${name} tiene como capital ${capital} su poblacion es de ${population} y los idomas que hablan son ${languages}`);
    }
}

// console.log(infoCountries(countries)); 

const student1 = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
let [name, skills, [htmlScore, cssScore, jsScore, reactScore]] = student1;
console.log(name, skills, [htmlScore, cssScore]); 

const students = [
    ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
    ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];
function convertArrayToObject(array) {
    let obj = array.map(([name, skills, scores]) => ({
        nombre: name, 
        habilidades: skills,
        puntuacion: scores,
    }));
    return obj;
}
let obj = convertArrayToObject(students);
console.log('Estudiantes', obj);

const student = {
    name: "David",
    age: 25,
    skills: {
      frontEnd: [
        { skill: "HTML", level: 10 },
        { skill: "CSS", level: 8 },
        { skill: "JS", level: 8 },
        { skill: "React", level: 9 },
      ],
      backEnd: [
        { skill: "Node", level: 7 },
        { skill: "GraphQL", level: 8 },
      ],
      dataBase: [{ skill: "MongoDB", level: 7.5 }],
      dataScience: ["Python", "R", "D3.js"],
    },
};

function agregarItem(obj) {
    let {name, age, skills} = obj;

    skills.frontEnd.push({
        skill: 'BootStrap',
        level: 8
    })

    skills.backEnd.push({
        skill: 'Express',
        level: 9
    })

    skills.dataBase.push({
        skill: 'SQL',
        level: 8
    })

    skills.dataScience.push('SQL')
}

agregarItem(student);
console.log('nuevas propiedades', student);