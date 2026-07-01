// TODO: 사용자 입력 직접 받도록 수정하기
const firstNumber = 10;
const secondNumber = 5;
const operator = '+';

let result;

// NOTE: 사칙연산 계산기
switch (operator) {
    case '+':
        result = firstNumber + secondNumber;
        break;
    case '-':
        result = firstNumber - secondNumber;
        break;
    case '*':
        result = firstNumber * secondNumber;
        break;
    case '/':
        result = firstNumber / secondNumber;
        break;
    
    // XXX : 이후 연산자 추가 가능성을 고려해 break;문 추가할것
    default:
        result = '유효하지 않은 연산자입니다.';
}

// NOTE: 결과 출력
console.log(`결과: ${result}`);