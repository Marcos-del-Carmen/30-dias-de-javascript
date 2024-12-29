let dog = {
    name: 'Coco', 
    legs: 4, 
    color: 'brown', 
    age: 3, 
    bark() {
        return 'woof woof'
    },
    breed: '',
    getDogInfo() {
        let mensaje = '';
        mensaje = `Hola mi perro se llama ${this.name}, tiene ${this.legs} patas es de color ${this.color} tiene ${this.age} de edad y el hace ${this.bark()}`;
        return mensaje;
    }
};
console.log(dog);
console.log(dog.getDogInfo());