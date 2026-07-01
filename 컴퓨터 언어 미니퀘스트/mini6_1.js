import readlineSyncModule from 'readline-sync';

// NOTE: 구구단 출력 프로그램 
const userInput = parseInt(readlineSyncModule.question("숫자 입력: "),10);

if(userInput < 2){
    console.log("2 이상의 숫자를 입력하세요.");
} else{
    for(let i = 1 ; i < 10 ; i ++){
        console.log(`${userInput} * ${i} = ${userInput * i}`);
    }
}
