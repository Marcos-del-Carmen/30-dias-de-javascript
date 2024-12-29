/**
 * Calcula los ingresos anuales totales de la persona a 
 * partir del siguiente texto. 'Gana 4000 euros de sueldo 
 * al mes, 10000 euros de bonificación anual, 5500 euros 
 * de cursos online al mes'.
 */
const pattern = /\d+/g;

let texto = 'Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros de cursos online al mes';
const matches = texto.match(pattern);
const points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];

console.log(texto);
console.log('Suma de sueldo $', sumaNums(matches));

// console.log('Gana anualmente $',sueldo);

function sumaNums(array){
    let initialValue = 0;
    return array.reduce((acumulador, item) => acumulador + Number(item), initialValue);
}

let minimo = Math.min(...points)
let maximo = Math.max(...points)
let distancia = 0;
for (let i = minimo; i < maximo; i++) {
    distancia++;
}

console.log('distancia', distancia);

// no permitir caracteres especiales
// que la primera letra no sea un numero

function is_valid_variable(cadena) {
    const pattern = /[0-9]/
    const pattern1 = /[\-*,.]/g

    let con1 = pattern.test(cadena[0]);
    let con2 = pattern1.test(cadena);

    if(con1 || con2) {
        console.log('Las cadenas con números al principio no se admiten');
    } else {
        console.log('tas bien');
    }
}

is_valid_variable('num_1');

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
// paragraph.length
function conteoPalabras(cadena) {
    let obj = [];
    let arregloStr = cadena.toLowerCase().replace(/[^\w\s]/g, '').split(" ");
    arregloStr.forEach(item => obj[item] = (obj[item] || 0) + 1 );
    return obj;
}
console.log(conteoPalabras(paragraph));

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(cadena) {
    let pattern = /[%@#;&$]/g;
    let textoLimpio = cadena.replace(pattern, "")
    return textoLimpio;
}

let textoLimpio = cleanText(sentence);
console.log('texto', textoLimpio);

console.log(conteoPalabras(textoLimpio));

