const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
let student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;

let textArray = JSON.stringify(skills);
console.log('Usando JSON.stringify()',textArray);
console.log('Usando JSON.stringify() con edad',JSON.stringify(age));
console.log('Usando JSON.stringify() con isMarried', JSON.stringify(isMarried));
console.log('Usando JSON.stringify() con obj estudiante',JSON.stringify(student));

/**
 * Stringify el objeto estudiantes con sólo las propiedades 
 * firstName, lastName y skills
 */

const texto = JSON.stringify(student, ["firstName", "lastName", "skills"], 4);
console.log('Obj convertido a texto con algunas propiedades',texto);
let estudiantes = JSON.parse(txt);
let userMaxskill = "";
let maxSkillCount = 0;
for (let user in estudiantes) {
    let skillsCount = estudiantes[user].skills.length;
    if(skillsCount > maxSkillCount) {
        maxSkillCount = skillsCount;
        userMaxskill = user;
    }
}

console.log('Usuario con más skills ' +  userMaxskill + ' ' + maxSkillCount);