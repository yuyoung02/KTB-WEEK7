// 제공 코드
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 퀘스트 답안 작성
let sumEven = 0;

for (let i = 0 ; i < numbers.length ; i ++){
    if(numbers[i]%2 === 0){
        console.log(`짝수 발견: ${numbers[i]}`);
        sumEven += numbers[i];
    } else {
        continue;
    }
}

console.log(`짝수 합계: ${sumEven}`);