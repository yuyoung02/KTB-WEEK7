// NOTE: 주어진 문장과 비교해 입력한 문장이 같은지 검사하는 받아쓰기 프로그램을 조건에 맞춰 만들어보세요.

import readlineSyncModule from 'readline-sync';

let isCorrect = false;

const sentence = "열심히 배워서 최고의 개발자가 되어보자!";

const userInput = readlineSyncModule.question("문장: ");

if(sentence === userInput){
    isCorrect = true;
}

if (isCorrect === true){
    console.log("정답입니다.");
} else {
    console.log("실패입니다.");
}