var num = 10;
var num2 = 5;
var operador = '*';

switch(operador){
    case '+':
        console.log(num + num2);
        break;
    case '-':
        console.log(num - num2);
        break;
    case '*':
        console.log(num * num2);
        break;
    case '/':
        console.log(num / num2);
        break;
    default:
        console.log("Operador inválido");
        break;
}