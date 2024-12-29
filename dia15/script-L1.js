class Animal {
  constructor(nombre, edad, color, piernas) {
    this.nombre = nombre;
    this.edad = edad;
    this.color = color;
    this.piernas = piernas
  }

  getAnimalInfo() {
    let info = `Es un ${this.nombre} tiene ${this.edad} años. Es de color ${this.color} y camina en ${this.piernas}`;
    return info;
  }

  obtenerColor() {
    return `El color del perro es ${this.color}`
  }
  
  calcularEdad(edadEnAnimal) {
    if (this.edad == 1) {
      console.log('Tiene 15 años aproximadamente');
    } else if(this.edad == 2) {
      console.log('Tiene 24 años aproximadamente');
    } else {
      let calculo = 0;
      for (let i = 0; i < this.edad; i++) {
        calculo = calculo + edadEnAnimal;
      }
      return calculo;
    }
  }
}

class Perro extends Animal {
  constructor(nombre, edad, color, piernas, raza, tamanio) {
    super(nombre, edad, color, piernas)
    this.raza = raza;
    this.tamanio = tamanio;
  }
}

class Gato extends Animal {
  constructor(nombre, edad, color, piernas, suenio) {
    super(nombre, edad, color, piernas);
    this.suenio = suenio;
  }
}