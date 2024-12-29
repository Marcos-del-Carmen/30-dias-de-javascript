
let a = "JavaScript"; // es un scope global que se encontrará en cualquier parte de este archivo
let b = 10; // es un scope global que se encontrará en cualquier parte de este archivo
function letsLearnScope() {
  console.log(a, b); // JavaScript 10, accesible
  if (true) {
    let a = "Python";
    let b = 100;
    console.log(a, b); // Python 100
  }
  console.log('a ver',a, b);
}
letsLearnScope();
console.log(a, b); // JavaScript 10, accesible