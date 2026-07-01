import readlineSyncModule from 'readline-sync';

console.log("1. 메모 작성\n2. 메모 조회\n3. 메모 수정\n4. 메모 삭제\n5. 추가 기능\n6. 종료");
let userSelect = parseInt(readlineSyncModule.question("메뉴 번호를 선택하세요: "),10);

let memoTitle;
let memoContent;

while(userSelect !== 6){
    switch (userSelect) {
        case 1:{
            memoTitle = readlineSyncModule.question("메모의 제목을 입력하세요: ");
            memoContent = readlineSyncModule.question("메모의 내용을 입력하세요: ");
            break;
        }

        case 2:{
            console.log("메모 조회");
            console.log(`제목: ${memoTitle}`);
            console.log(`내용: ${memoContent}`);
            break;
        }

        case 3:{
            console.log("메모 수정");
            break;
        }

        case 4:{
            console.log("메모 삭제");
            break;
        }

        case 5: {
            console.log("추가 기능");
            break;
        }

        default:{
            console.log("잘못된 입력입니다.");
            break;
        }
    }
    console.log("1. 메모 작성\n2. 메모 조회\n3. 메모 수정\n4. 메모 삭제\n5. 추가 기능\n6. 종료");
    userSelect = parseInt(readlineSyncModule.question("메뉴 선택: "),10);

}