import readlineSyncModule from 'readline-sync';

// NOTE : 입출력을 이용해서 메뉴를 선택하고, 메모를 작성할 수 있도록 제작해보세요.

console.log("1. 메모 작성\n2. 종료");

const userSelect = parseInt(readlineSyncModule.question("메뉴 번호를 선택하세요: "),10);

switch (userSelect){
    case 1:{
        const memoTitle = readlineSyncModule.question("메모의 제목을 입력하세요: ");
        const memoContent = readlineSyncModule.question("메모의 내용을 입력하세요: ");

        console.log(`제목: ${memoTitle}\n내용: ${memoContent}`);
        break;
    }
    case 2:{
        console.log("종료합니다.");
        break;
    }
    default:{
        console.log("잘못된 입력입니다.")
        break;
    }

}