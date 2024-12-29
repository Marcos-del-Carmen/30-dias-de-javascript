/**
 * 1. Crea un objeto literal llamado personAccount. Tiene las propiedades firstName, lastName, incomes, expenses 
 *    y tiene los metodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. 
 *    Incomes es un conjunto de ingresos y su descripción y expenses es un conjunto de ingresos y su descripción.
 */

const personAccount = {
    firstName: '',
    lastName: '',
    incomes: [
        {descripcion: '', monto: 0},
        {descripcion: '', monto: 0}
    ],
    expenses: [
        {descripcion: '', monto: 0},
        {descripcion: '', monto: 0}
    ],
    accountInfo:  {
        account: '',
        holder: ''
    },
    addIncome(descripcion, monto) {
        array.push({descripcion, monto});
    },
    addIncome(descripcion, monto) {
        array.push({descripcion, monto});
    },
    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    },
    totalIncome() {
        return this.incomes.reduce((account, item) => account + item.monto, 0);
    },
    totalExpense() {
        return this.expenses.reduce((account, item) => account + item.monto, 0);
    },
}