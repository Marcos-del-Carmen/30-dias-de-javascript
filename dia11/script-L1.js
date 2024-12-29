const constants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravedad, humanBodyTemp, waterBoilingTemp] = constants;

console.log('constante',gravedad);

const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
let [fin, ast, sw, den, nor] = countries;
console.log('país ',fin);


const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};

let {width, height, area, perimeter} = rectangle;
console.log('perimetro ', perimeter);

const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

let {name, scores, skills, age} = users;

function infoUser(array){
  for (const {name, scores, skills, age} of array) {
    console.log(`Desarrollador : ${name} su puntaje es de ${scores} las habilidades que tiene 
      son ${skills} su edad es de ${age}`);
    if(skills.length >= 2) {
      console.log('Tiene más de dos habilidades ');
    }
  }
  
}

console.log(infoUser(users))
