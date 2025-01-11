function outerFunction() {
    let count = 0;
    function innerFunction() {
      count++;
      return count;
    }
  
    return innerFunction;
}

const innerFunc = outerFunction();

function operaciones() {

    function suma(n1, n2) {
        return n1 + n2;
    }
    
    function rest(n1, n2) {
        return n1 - n2;
    }
    
    function mult(n1, n2) {
        return n1 * n2;
    }
    
    function div(n1, n2) {
        return n1 / n2;
    }

    return {
        opcSuma: suma,
        opcRest: rest,
        opcMult: mult,
        opcDiv: div
    }
}

let opc = operaciones();

console.log('suma de numeros ',opc.opcSuma(10, 5));
console.log('resta de numeros ',opc.opcRest(5,4));

function personAccount() {
    let nombre = 'Marcos';
    let apellido = 'Del Carmen';
    let ingresos = [2500, 2500, 50];
    let gastos = [1400, 2000, 1000];

    function totalIncome() {
        
        return ingresos.reduce((account, ingreso) => account + ingreso, 0);
        // return 10;
    }

    function totalExpense() {
        return gastos.reduce((account, gasto) => account + gasto, 0);
    }

    function addIncome(ingreso) {
        ingresos.push(ingreso);
        return ingresos;
    }

    function addExpense(gasto) {
        gastos.push(gasto);
        return gastos;
    }

    function accountBalance() {
        let balance = totalIncome() - totalExpense();
        return `Mi nombre es ${nombre} ${apellido} tengo un saldo mensual de ${balance}`;
    }

    return {
        totalIncome,
        totalExpense,
        addIncome, 
        addExpense,
        accountBalance
    }
}

let objPersonAccount = personAccount();

console.log('Ingresos mensuales', objPersonAccount.totalIncome());
console.log('Gatos mensuales', objPersonAccount.totalExpense());
console.log('Ingreso extra', objPersonAccount.addIncome(300));
console.log('Gasto extra', objPersonAccount.addExpense(250));
console.log('Gatos mensuales', objPersonAccount.totalExpense());
console.log('Salgo mensual',objPersonAccount.accountBalance());

/**
 * LO APRENDIDO - CLOSURE
 * Closure alo que me suena baste es a tener una clase con 
 * metodos pero la diferencia de tener funciones dentro de otras 
 * es que puedes cambiar sus valores y tener dichos valores 
 * temporares ya que si agrego un dato a una funcion y la vuelvo 
 * a llamar pasa a subir, decrementar o quedar en cero el valor 
 * de la variable. 
 */