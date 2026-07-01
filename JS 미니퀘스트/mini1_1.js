//다음 요구 사항을 충족하는 객체 myPet을 만드세요.
//- myPet 객체는 name (이름)과 type (종류), 두 개의 속성을 가져야 합니다.
//- name의 값은 "Momo"이고, type의 값은 "Cat"입니다.
//- 객체를 생성한 후, console.log를 사용하여 myPet 객체의 name과 type을 출력하는 코드를 작성하세요.


// 1. 객체 리터럴 방법
// const myPet = {
//     name : "Momo",
//     type : "Cat"
// };

// console.log(`이름 : ${myPet.name}\n타입 : ${myPet.type}`);

// 2. 생성자 함수 방법 
// function MyPet(name, type){
//     this.name = name;
//     this.type = type;
// }

// const myPet = new MyPet("Momo", "Cat");

// console.log(`이름 : ${myPet.name}\n타입 : ${myPet.type}`);

// 3. 클래스 방식
class MyPet {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
} 

const myPet = new MyPet("Momo", "Cat");

console.log(`이름 : ${myPet.name}\n타입 : ${myPet.type}`);