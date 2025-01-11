let person = {
    nombre: 'Marcos',
    apellido: 'Del Carmen',
    edad: 23,
    pais: 'México',
    ciudad: 'Chilapa de Álvarez'
}

let estudiante = {
    nombre: 'Marcos',
    apellido: 'Del Carmen',
    edad: 23,
    habilidades: ['JAVA', 'JavaScript', 'TypeScript', 'PHP'],
    pais: 'México',
    ciudad: 'Chilapa de Álvarez'
}

let personAccount = {
    nombre: 'Marcos',
    apellido: 'Del Carmen',
    edad: 23,
    pais: 'México',
    ciudad: 'Chilapa de Álvarez',
    ingresos: [5000, 800],
    gastos: [1000, 1000, 200],
    totalIncome() {
        return this.ingresos.reduce((accu, item) => accu + item, 0);
    },
    totalExpense() {
        return this.gastos.reduce((accu, item) => accu + item, 0);
    },
    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    },
    accountInfo() {
        return `${this.nombre} tiene un ingreso mensual de $${this.totalIncome()}, un gasto total de $${this.totalExpense()} y su saldo actual es $${this.accountBalance()}`;
    }
}
let personStr = JSON.stringify(person);
let estudianteStr = JSON.stringify(estudiante);
let personAccountStr = JSON.stringify(personAccount);
let personAccountM1 = JSON.stringify(personAccount.totalIncome());
localStorage.setItem("person", personStr);
localStorage.setItem("estudent", estudianteStr);
localStorage.setItem("personAccount", personAccountStr);
localStorage.setItem("personAccountM1", personAccountM1);