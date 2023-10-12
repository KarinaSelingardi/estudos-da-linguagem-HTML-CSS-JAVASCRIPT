const prompt = require ("prompt-sync")();
const calculadora = {}
calculadora.soma = function (a,b){
return a + b;}
calculadora.subtração = function (a,b){
return a - b;}
calculadora.multiplicacao= function (a,b){
return a * b;}
calculadora.div = function (a,b){
return a / b;}
function realizar_op(operacao,op1,op2){
    return operacao(op1,op2);
    
    const operador1 = Number(prompt("digite o primeiro op:"));
    const operador2 = Number(prompt("digite o primeiro op:"));
    const operacao = Number(prompt("digite o primeiro op:"))

    comsole.log(realizar_op(calculadora[operacao]))
}

