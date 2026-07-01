// 1. let 키워드를 사용한 변수의 호이스팅 확인하기
// console.log(messageLet); // 무엇이 출력될까요?
// let messageLet = "Hello with let!";

// // 2. const 키워드를 사용한 변수의 호이스팅 확인하기
// console.log(messageConst); // 무엇이 출력될까요?
// const messageConst = "Hello with const!";

// 3. 화살표 함수의 호이스팅 확인하기
console.log(greet()); // 무엇이 출력될까요?
const greet = () => "Hello, Arrow Function!";