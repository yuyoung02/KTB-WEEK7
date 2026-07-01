// NOTE: readline-sync 모듈을 불러옴
import readlineSyncModule from 'readline-sync';

// NOTE: 사용자에게 입력받은 내용을 10진수 정수형(int)으로 변환하고 그 데이터를 userInput 변수에 할당
//const userInput = parseInt(readlineSyncModule.question('사용자입력: '), 10);

// NOTE: 유저로부터 이름을 입력받아 출력합니다.
const name = readlineSyncModule.question('이름 입력: ');
console.log(`입력받은 이름: ${name}`);

// NOTE: 유저로부터 나이를 입력받아 출력합니다.
const age = parseInt(readlineSyncModule.question('나이 입력: '), 10);
console.log(`입력받은 나이: ${age}`);