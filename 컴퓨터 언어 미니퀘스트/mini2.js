// NOTE: 조건문 미니퀘스트 1
// TODO: 사용자 입력 직접 받도록 수정하기
let hour = 14;

// NOTE: 7시부터 9시라면 "아침 식사 시간", 
// 12시부터 14시라면 "점심시간",
// 18시부터 20라면 "저녁 식시 시간"
if (hour >= 7 && hour <=9){
    console.log("아침 식사 시간");
} else if(hour >= 12 && hour <=14){
    console.log("점심 시간");
} else if(hour >= 18 && hour <= 20){
    console.log("저녁 식사 시간");
} else {
    console.log("식사 금지");
}



// NOTE: 조건문 미니퀘스트 2
// TODO: 사용자 입력 직접 받도록 수정하기
let operator = '/';

// NOTE : 사칙 연산자 출력
// NOTE: '+'라면 더하기, '-'라면 빼기, '*'라면 곱하기, '/'라면 나누기
switch (operator){
    case '+':
        console.log("더하기");
        break;
    
    case '-':
        console.log("빼기");
        break;

    case '*':
        console.log("곱하기");
        break;

    case '/':
        console.log("나누기");
        break;
    
    default:
        console.log("연산 기호가 아님");
        break;
}

// NOTE: 조건문 미니퀘스트 3
// TODO: 사용자 입력 직접 받도록 수정하기
let userSelect = 1;

// NOTE : 사용자 입력 받기
// NOTE: 1이라면 작성, 2라면 조회, 3이라면 수정, 4라면 삭제, 5라면 추가기능, 6이라면 종료
switch (userSelect){
    case 1: {
        console.log("작성");
        break;
    }

    case 2: {
        console.log("조회");
        break;
    }

    case 3: {
        console.log("수정");
        break;
    }

    case 4: {
        console.log("삭제");
        break;
    }

    case 5: {
        console.log("추가 기능");
        break;
    }

    case 6: {
        console.log("종료");
        break;
    }

    default: {
        console.log("잘못된 입력");
        break;
    }
}