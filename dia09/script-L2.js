// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand", "Ecuador", "El Salvador"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

function totalProductos(array) {
  const filtarPrecios = array.map(item => {
    if(item.price > 0) {
      return item.price;
    } else {
      return item.price = 0;
    }
  });
  const total = filtarPrecios.reduce((acumulador, precio) => acumulador = acumulador + precio);
  console.log('Suma total de todos los productos', total);
}
totalProductos(products);

const totalProductosReduce = products.reduce((acumulador, precio)=>{
  if (precio.price == " " || precio.price == "") {
    precio.price = 0;
  } else {
    Number(precio.price);
  }
  return acumulador + precio.price
}, 0);
console.log('Total de prodcutos' ,totalProductosReduce);

/** 
 * ESTE ES EL RESULTADO QUE SE ESPERA 
  [
    {
      pattern: "land",
      countries: ["Finland", "Iceland", "Thailand"]
    },
    {
      pattern: "ia",
      countries: ["India", "Australia", "Estonia"]
    },
    {
      pattern: "island",
      countries: ["Iceland"]
    },
    {
      pattern: "stan",
      countries: ["Pakistan", "Afghanistan"]
    }
  ]
*/

const countries = [
  "Finland",
  "Iceland",
  "Ireland",
  "India",
  "Pakistan",
  "Afghanistan",
  "Australia",
  "Estonia",
  "Thailand",
];


function categorizeCountries(array, patterns) {
  let objBusqueda = {};
  let paisesFiltrados = [];

  array.forEach(pais => {
    patterns.forEach(pattern => {
      if (pais.includes(pattern)) {
        paisesFiltrados.push('Busqueda de '+ pattern + ' se encontro el país ' + pais)
      }
    });
  });
  return paisesFiltrados;
}

const patterns = ["land", "ia", "island", "stan"];
console.log(categorizeCountries(countries, patterns));

// 4. Cree una función que retorne un array de objetos, 
// que es la letra y el número de veces que la letra
// usa para empezar el nombre de un país.

function conteoLetras(array) {
  let objLetras = {};
  
  array.forEach((pais) => {
    let letra = pais[0];

    if (objLetras[letra]) {
      objLetras[letra]++;
    } else {
      objLetras[letra] = 1;
    }
  });

  let arregloObj = Object.entries(objLetras).map(([letra, conteo]) => {
    return { 
      letra: letra, 
      conteo: conteo 
    };
  });
  return arregloObj;
}
console.log(conteoLetras(countries));

const paises = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
  "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
  "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
  "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
  "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (North)", "Korea (South)", "Kosovo",
  "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
  "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius",
  "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia",
  "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman",
  "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
  "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
  "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan",
  "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela",
  "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];
const arrayWithRepetition = ['a', 'a', 'z', 't', 'm', 'm', 'm', 'm', 't', 'a', 'm', 'm', 'a', 'm' ];

function getFirstTenCountries(array) {
  let rango = array.slice(0, 10);
  return rango;
}

console.log(getFirstTenCountries(paises));

function getLastTenCountries(array) {
  let numIni = array.length;
  let numFin = array.length - 10;

  let rango = array.slice(numFin, numIni);
  return rango;
}
console.log(getLastTenCountries(paises));

function letraRepetida(array) {
  let result = {};
  array.forEach((item) => {
    if(result[item[0]]) {
      result[item[0]]++;
    } else {
      result[item[0]] = 1;
    }
  });
  console.log('Se repite hasta',Math.max(...Object.values(result)))

  return result
}

console.log(letraRepetida(countries));
// console.log(letraRepetida(arrayWithRepetition));