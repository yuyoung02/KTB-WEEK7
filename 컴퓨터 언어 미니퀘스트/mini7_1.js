// 제공 코드
const numbers = [1, 2, 3, 4, 5];

// 퀘스트 답안 작성
let sumList = 0;

for(let i = 0 ; i < numbers.length ; i ++){
    sumList += numbers[i];
    console.log(`현재 합계: ${sumList} (${numbers[i]}를 더함)`)
}

console.log(`최종 합계: ${sumList}`);