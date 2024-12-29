class Statistics {
    constructor(ages) {
        this.ages = ages;
    }

    count() {
        return this.ages.length;
    }

    min() {
        return Math.min(...this.ages)
    }

    max() {
        return Math.max(...this.ages)
    }

    sum() {
        return this.ages.reduce((account, item)=>account + item, 0);
    }

    range() {
        return this.max() - this.min();
    }

    median() {
        return this.sum() / this.count();
    }

    mode() {
        let obj = {};
        for (const item of this.ages) {
            obj[item] = (obj[item] || 0) + 1;
        }
        let maxKey = 0;
        let maxValue = 0;
        for (const key in obj) {
            if(obj[key] > maxValue) { 
                maxKey = key;
                maxValue = obj[key];
            }
        }   
        const result = { [maxKey]: maxValue };
        return result;
    }
}

let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const s1 = new Statistics(ages);

console.log(s1.count());
console.log(s1.range());
console.log(s1.sum());
console.log(s1.mode());

class PersonAccount {
    constructor(nombre, apellido, ingresos, gastos){
        this.nombre = nombre;
        this.apellido = apellido;
        this.ingresos = ingresos;
        this.gastos = gastos;
        this.descripcion = '';
        this.monto = 0;
        this.account = '';
        this.holder = '';
    }

    set setDescripcion(descripcion) {
        this.descripcion = descripcion
    }

    set setMonto(monto) {
        this.monto = monto;
    }
    
    set setAccount(account) {
        this.account = account;
    }

    set setHolder(holder) {
        this.holder = holder;
    }

    addIncome(descripcion, monto) {
        array.push({descripcion, monto});
    }

    addIncome(descripcion, monto) {
        array.push({descripcion, monto});
    }

    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }

    totalIncome() {
        return this.incomes.reduce((account, item) => account + item.monto, 0);
    }

    totalExpense() {
        return this.expenses.reduce((account, item) => account + item.monto, 0);
    }
}