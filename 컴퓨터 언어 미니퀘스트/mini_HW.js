import readlineSyncModule from 'readline-sync';

console.log("1. 메모 작성\n2. 메모 조회\n3. 메모 수정\n4. 메모 삭제\n5. 추가 기능\n6. 종료");
let userSelect = parseInt(readlineSyncModule.question("메뉴 번호를 선택하세요: "),10);

let memoTitle;
let memoContent;

let memoTitleList = [];
let memoContentList = [];

function memoSearch(titles, contents){
    // 존재하는 메모가 없을 경우
    if(titles.length === 0){
        console.log("메모가 없습니다.");
    } else {
        // 존재하는 메모 있을 경우
        console.log("메모의 번호를 선택하세요.");
        for(let i = 0 ; i < titles.length ; i ++){
            console.log(`${i+1}. ${titles[i]}`);
        }
    }
}

while(userSelect !== 6){
    switch (userSelect) {
        case 1:{
            memoTitle = readlineSyncModule.question("메모의 제목을 입력하세요: ");
            memoTitleList.push(memoTitle);
            memoContent = readlineSyncModule.question("메모의 내용을 입력하세요: ");
            memoContentList.push(memoContent);
            break;
        }

        case 2:{
            console.log("메모 조회");
            memoSearch(memoTitleList, memoContentList);
            const userMemoSelect = parseInt(readlineSyncModule.question("메모 번호 입력: "),10);
            console.log(`제목: ${memoTitleList[userMemoSelect-1]}`);
            console.log(`내용: ${memoContentList[userMemoSelect-1]}`);
            break;
        }

        case 3:{
            console.log("메모 수정");
            memoSearch(memoTitleList, memoContentList);
            const userMemoSelect = parseInt(readlineSyncModule.question("메모 번호 입력: "),10);
            memoTitle = readlineSyncModule.question("수정할 제목을 입력하세요: ");
            memoTitleList[userMemoSelect - 1] = memoTitle;
            memoContent = readlineSyncModule.question("수정할 내용을 입력하세요: ");
            memoContentList[userMemoSelect - 1] = memoContent;
            console.log("수정 완료 되었습니다.")
            break;
        }


        case 4:{
            console.log("메모 삭제");
            memoSearch(memoTitleList, memoContentList);
            const userMemoSelect = parseInt(readlineSyncModule.question("메모 번호 입력: "),10);
            memoTitleList.splice(userMemoSelect-1,userMemoSelect-1);
            memoContentList.splice(userMemoSelect-1,userMemoSelect-1);
            console.log("삭제 완료 되었습니다.")
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