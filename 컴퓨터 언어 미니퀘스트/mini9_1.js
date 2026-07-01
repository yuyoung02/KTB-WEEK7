import fileSystem from 'fs';
import readlineSyncModule from 'readline-sync';

import { json } from 'stream/consumers';

const myInfo = '{ "name" : "keryn", "age" : 25, "email" : "hyyy8810@gmail.com", "phoneNum" : "010-6682-8810"}';
const obInfo = JSON.parse(myInfo);

fileSystem.writeFileSync(
    'myInfo.json', 
    JSON.stringify(obInfo),
    'utf-8'
);

const fileContent = fileSystem.readFileSync('myInfo.json','utf-8');
const jsonData = JSON.parse(fileContent);

console.log(`이름 : ${jsonData.name}`);
console.log(`나이 : ${jsonData.age}`);
console.log(`이메일 : ${jsonData.email}`);
console.log(`전화번호 : ${jsonData.phoneNum}`);

console.log("myInfo.json 파일이 생성되었습니다.");

console.log("myInfo.json 파일을 삭제하시겠습니까? (y/n)");

const userSelect = readlineSyncModule.question(":")

if (userSelect === "y"){
    fileSystem.unlinkSync('myInfo.json');
    console.log("myInfo.json 파일이 삭제 되었습니다.")
} else{
    console.log("삭제 안 함");
};