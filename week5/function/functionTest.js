// requires function.js

// IIFE
( function() {
    let x = true;
    document.writeln(x);
})();

try { // test x is not in scope
    x;
    document.writeln(false)
} catch (e) {
    document.writeln(true)
}


document.writeln( hasNoReturn(1)    === undefined);
document.writeln( hasReturn(1)      === 1);

document.writeln( lambdaFun1(1)     === 1);
document.writeln( lambdaFun2(1,1)   === 2);
document.writeln( lambdaFun3(1)(1)  === 2);
document.writeln( lambdaFun4(1)(1)  === 2);
document.writeln( any(1)(1)         === 2);


document.writeln("---------------------");

// const bonusFormula = 'employee.bonus = employee.revenue * 0.2';
// const exec = e => fun => 'function (employee) { var employee = ' + e + '; ' + fun + '; }';
// const bonusCalculation = e => eval(exec(e)(bonusFormula));
// const e = {revenue: 10000, bonus: null};
// bonusCalculation(e);
// e.bonus === e.revenue * 0.2;
// console.log(e.bonus, e.revenue, e.bonus === e.revenue * 0.2)

const bonusFormula = 'employee.bonus = employee.revenue * 0.2';
const exec = e => ''
    +`var employee = {revenue: ${e.revenue}, bonus: ${e.bonus}};`
    + bonusFormula
    + 'return employee;'
    + '';

const bonusCalculation2 = e => {
    const emp = eval(exec(e));
    e.revenue = emp.revenue;
    e.bonus = emp.bonus;
};
const prepareExecutionFunction = fun => '(employee) => '+ fun + ';';
const bonusCalculation = e => eval(prepareExecutionFunction(bonusFormula))(e);

const e = {revenue: 10000, bonus: null};
bonusCalculation(e);
e.bonus === e.revenue * 0.2;
console.log(e.bonus, e.revenue, e.bonus === e.revenue * 0.2)


const bonusFormula2 = 'employee.revenue * 0.2';
const f = _ => Function("x", "return " + userFunction.value);
const bonusCalculation4 = e => Function("employee", "employee.bonus = " + bonusFormula2)(e);
const bonusCalculation5 = e => e.bonus = Function("employee", "return " + bonusFormula2)(e);

const e5 = {revenue: 10000, bonus: null};
bonusCalculation5(e5);
e5.bonus === e5.revenue * 0.2;
console.log(e5.bonus, e5.revenue, e5.bonus === e5.revenue * 0.2)


document.writeln("---------------------");