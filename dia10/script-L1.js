const languages = [
    "English",
    "Finnish",
    "English",
    "French",
    "Spanish",
    "English",
    "French",
];

const setOfLanguages = new Set(languages);
console.log(setOfLanguages);

// for(let item of setOfLanguages) {
//     console.log('Valores ',item);
// }

// Añadir un elemento a un set
// const companies = new Set(); 
// console.log(companies.size); 
// companies.add("Google"); 
// companies.add("Facebook");
// companies.add("Amazon");
// companies.add("Oracle");
// companies.add("Microsoft");
// console.log(companies.size);
// console.log(companies); 

const companies = ["Google", "Facebook", "Amazon", "Oracle", "Microsoft"];
setOfCompanies = new Set();
for (const company of companies) {
  setOfCompanies.add(company);
}

console.log(setOfCompanies)
console.log(setOfCompanies.delete("Google"));
console.log(setOfCompanies.size);
console.log(setOfCompanies.has("Apple")); // false
console.log(setOfCompanies.has("Facebook")); // true

// setOfCompanies.clear(); // limpa los sets
// console.log(setOfCompanies);

const langSet = new Set(languages);
console.log(langSet); // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size); // 4

const counts = [];
const count = {};

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l);
//   console.log(filteredLang); // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length });
}
console.log(counts);

const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
const setOfNumbers = new Set(numbers);

console.log(setOfNumbers);

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);
// console.log(C);

let c2 = a.filter((num) => !B.has(num));
let c1 = a.filter((num) => B.has(num));
let C2 = new Set(c2);
let C1 = new Set(c1); 
console.log('C1',C1);
console.log('C2',C2);

let countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

const map = new Map(countries);
console.log(map);
console.log(map.size); 
// const a = [4, 5, 8, 9];
// const b = [3, 4, 5, 7];

// const countries = ["Finland", "Sweden", "Norway", "Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay"];
// let setCountries = new Set();
// // countries.length
// for(let countrie of countries){
//   setCountries.add(countrie);
// }

// console.log(setCountries);
// setCountries.delete("Finland"); 
// console.log(setCountries);
// setCountries.clear(); 
// console.log(setCountries);

// const names = ["Diana","Damian","Martin","Roman","Rogerlio","Emilio","Andres","Samuel","Hector","Ramiro"];
// let setNames = new Set(names);
// console.log('Nombres ', setNames)


// function contCaracteres(array) {
//   let mapa = new Map();
//   for(let item of array) {
//     mapa.set(item ,item.length);
//   }
//   return mapa;
// }

// let mapCountires = contCaracteres(countries);
// console.log('Map con paises', mapCountires);