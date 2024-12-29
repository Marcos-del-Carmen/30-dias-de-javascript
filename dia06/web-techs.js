const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
];
let arrayAux1 = [];

let mernAcronym = '';
let mernStack = ['MongoDB', 'Express', 'React', 'Node'];

for(let i = 0; i <  webTechs.length; i++) {
    
    let array = [
        webTechs[i],
        webTechs[i].length
    ]

    arrayAux1.push(array)
    console.log('tecnologia web ', webTechs[i]);
}

for (let i = 0; i < mernStack.length; i++) {
    mernAcronym = mernAcronym + mernStack[i].charAt(0);
}

console.log(mernAcronym)
console.log(arrayAux1)

let frutas = ['banana', 'orange', 'mango', 'lemon'];
for(let i = frutas.length-1; i >= 0; i--) {
    console.log(frutas[i]);
}

const fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"],
];

fullStack.forEach(item => {
    item.forEach(tech=>{
        console.log(tech)
    })
});