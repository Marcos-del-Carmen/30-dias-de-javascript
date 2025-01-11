//Callback

const callback = (err, result) => {
    if (err) {
        return console.error(err);
    }
    return console.log(result);
};

const doSomething = (callback) => {
    setTimeout(() => {
        const skills = ["HTML", "CSS", "JS"];
        callback("", skills);
    }, 2000);
};


// doSomething(callback);

// sintaxis
// const promise = new Promise((resolve, reject) => {
//     resolve("success");
//     reject("failure");
// });

const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// console.log(countriesAPI);
// console.log(catsAPI);

fetch(countriesAPI)
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0].name);
        console.log(data[0].capital);
        console.log(data[0].languages);
        console.log(data[0].population);
    })
    .catch((error)=>console.error(error));

fetch(catsAPI)
    .then((response) => response.json())
    .then((data) => {
        let catNames = [];
        data.forEach(element => {
            catNames.push(element.name);
        });
        console.log('nombres de gatos', catNames);
    })
    .catch((error)=>console.error(error));

fetch(catsAPI)
    .then((response) => response.json())
    .then((data) => {
        let peso_str = '';
        data.forEach(element => {
            let pesos_km = element.weight.metric.replace(" - ", ",")   
            console.log(pesos_km); 
            peso_str += ',' + pesos_km;
        });

        let arrayPeso = peso_str.split(",");
        let numeros = arrayPeso.map(item => item == "" ? 0 : Number(item));
        let suma = numeros.reduce((accunt, item) => accunt + item, 0)
        let media = suma / arrayPeso.length;

        console.log('media', media);
    })
    .catch((error)=>console.error(error));

    