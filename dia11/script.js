let numbers = [1, 2, 3];
let [n1, n2, n3] = numbers;

console.log('Desestruración números', n1, n2, n3);

let names = ['Adrian', 'Martin', 'Carlos', 'Carla', 'Damian'];
let [name1,  name2, name3, name4] = names;

console.log('Desestruración de nombres', name1, name2, name3, name4);

const fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"],
  ];
const [frontEnd, backEnd] = fullStack;

console.log(frontEnd);
console.log(backEnd);
const rect = {
    width: 20,
    height: 10,
};

const calculatePerimeter = ({ width, height }) => {
    return 2 * (width + height);
};

console.log(calculatePerimeter(rect)); // 60
