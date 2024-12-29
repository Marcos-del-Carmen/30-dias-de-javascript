let word = "JavaScript";
console.log(word)
word[0] = "Y";
console.log(word)

// tipos de datos no primitivos 

let nums = [1,2,3];
let numeros = [1,2,3];

// let numeros = nums;

console.log(nums == numeros) // esto nos retorna un falso
// ya que no se puede comparar un arreglo una funcion u objeto. 

let usuarioUno = {
    nombre: "Asabeneh",
    papel: "teaching",
    pais: "Finland",
};

let usuarioDos = {
    nombre: "Asabeneh",
    papel: "teaching",
    pais: "Finland",
};

console.log(usuarioUno == usuarioDos); // Falso

// pero si se pueden comparar cuando son copiados y a lo que quiero ir 
// es a lo siguiente


let nums1 = [1, 2, 3];
let numberos1 = nums1;

console.log(nums1 == numberos1); // Verdadero

let userOne = {
  nombre: "Asabeneh",
  papel: "teaching",
  pais: "Finland",
};

let userTwo = userOne;

console.log(userOne == userTwo); // Verdadero