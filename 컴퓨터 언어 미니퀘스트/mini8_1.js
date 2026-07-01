function plus(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}


const firstNumber = 10;
const secondNumber = 0;
const operator = '/';


// NOTE: 사칙연산 계산기
switch (operator) {
    case '+':
        console.log(plus(firstNumber, secondNumber));
        break;
    case '-':
        console.log(plus(firstNumber, secondNumber));
        break;
    case '*':
        console.log(plus(firstNumber, secondNumber));
        break;
    case '/':
        if (secondNumber === 0){
            console.log("0으로는 나눌 수 없습니다.");
            break;
        }
        else {
            console.log(plus(firstNumber, secondNumber));
            break;
        }
    
    default:
        result = '유효하지 않은 연산자입니다.';
        break;
}
