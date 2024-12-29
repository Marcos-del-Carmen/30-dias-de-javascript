const personAccount = [
    {
        firstName: 'Marcos',
        lastName: 'Del Carmen',
        incomes: [
          { description: 'Salario', amount: 3000 },
          { description: 'Freelance', amount: 1200 }
        ],
        expenses: [
          { description: 'Renta', amount: 1000 },
          { description: 'Comida', amount: 500 }
        ],
        totalIncome() { // Calcula el ingreso total sumando todos los ingresos
          return this.incomes.reduce((acc, income) => acc + income.amount, 0);
        },
        totalExpense() { // Calcula el gasto total sumando todos los gastos
          return this.expenses.reduce((acc, expense) => acc + expense.amount, 0);
        },
        accountInfo() { // Devuelve la información completa de la cuenta
          return `Nombre: ${this.firstName} ${this.lastName}\nIngresos totales: ${this.totalIncome()}\nGastos totales: ${this.totalExpense()}`;
        },
        addIncome(description, amount) { // Agrega un nuevo ingreso
          this.incomes.push({ description, amount });
        }, 
        addExpense(description, amount) { // Agrega un nuevo gasto
          this.expenses.push({ description, amount });
        },
        accountBalance() { // Calcula el balance de la cuenta
          return this.totalIncome() - this.totalExpense();
        }
    }
]

console.log('Objeto de cuenta personal', personAccount);


const users = [
    {
      _id: "ab12ex",
      username: "Alex",
      email: "alex@alex.com",
      password: "123123",
      createdAt: "08/01/2020 9:00 AM",
      isLoggedIn: false,
    },
    {
      _id: "fg12cy",
      username: "Asab",
      email: "asab@asab.com",
      password: "123456",
      createdAt: "08/01/2020 9:30 AM",
      isLoggedIn: true,
    },
    {
      _id: "zwf8md",
      username: "Brook",
      email: "brook@brook.com",
      password: "123111",
      createdAt: "08/01/2020 9:45 AM",
      isLoggedIn: true,
    },
    {
      _id: "eefamr",
      username: "Martha",
      email: "martha@martha.com",
      password: "123222",
      createdAt: "08/01/2020 9:50 AM",
      isLoggedIn: false,
    },
    {
      _id: "ghderc",
      username: "Thomas",
      email: "thomas@thomas.com",
      password: "123333",
      createdAt: "08/01/2020 10:00 AM",
      isLoggedIn: false,
    },
];

/**
 * Imagina que estás obteniendo la colección de usuarios anterior 
 * de una base de datos MongoDB.
 * 
 * a. Crear una función llamada signUp que permita al usuario 
 *    añadirse a la colección. Si el usuario existe, informar
 *    al usuario que ya tiene una cuenta.
 * 
 * b. Crear una función llamada signIn que permita al usuario 
 *    iniciar sesión en la aplicación
 */

function signUp(id, userName, mail, pass, createDate, isLogged) {
  let newUser = [
    ...users, 
    {
      _id: id,
      username: userName,
      email: mail,
      password: pass,
      createdAt: createDate,
      isLoggedIn: false,
    }
  ]
  newUser.forEach(user => {
    if(user._id == id) {
      console.log('Lo siento, pero el usuario ya existe')
      return null;
    }
  });
  return newUser;
}

let user = {};
function signIn(user) {
  if (user.username != '' && user._id != '') {
    console.log(`Bienvenido ${user.username} :D`);
  }
}

/**
 * 3. El array de productos tiene tres elementos y cada uno de ellos tiene seis propiedades. 
 * a. Crear una función llamada rateProduct que califique el producto 
 * b. Crear una función llamada averageRating que calcule la valoración media de un producto
 * 
 * Crear una función llamada likeProduct. Esta función ayuda a dar un like al producto. 
 * Si no le gusta eliminar el like y si le gusta darle like
 */

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// console.log('producto', products);
function rateProduct(array, cali, product) {
  product = product-1
  array.forEach((item, i)=> {
    item.calificacion = 0;
    if (i == product) {
      item.calificacion = cali;
    }
  });  
  console.log('objeto',array); // tiene que recorrer los items
}

rateProduct(products, 10, 1);
rateProduct(products, 5, 2);
rateProduct(products, 8.5, 3);

function averageRating(array) {
  let long = array.length, suma =  0, media = 0;

  array.forEach(producto => {
    suma += producto.price;
  });

  media = suma / long;
  return media;
}

let precioMediaProductos = averageRating(products);
console.log('La media del precio de los productos', precioMediaProductos);

function likeProduct(array, like = false, post) {
  array.forEach((product, i) => {
    product.like = like
    if( i == post)
      product.like = like;
  })
  console.log('Producto con reacción',array);
}

likeProduct(products, true, 3);