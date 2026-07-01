
// 👉 - **`Person`** 클래스는 **`constructor`**를 사용하여 이름(**`name`**)과 나이(**`age`**)를 초기화해야 합니다.
// - **`Person`** 클래스는 **`greet`**라는 메서드를 가지고 있어야 하며,
// 이 메서드는 "Hello, my name is [name] and I am [age] years old."라는 메시지를
// 콘솔에 출력해야 합니다.
// - **`[name]`**과 **`[age]`**는 해당 인스턴스의 속성값으로 대체되어야 합니다.
// - 이름이 "Jane Doe"이고 나이가 25인 **`Person`** 인스턴스를 생성하세요.
// - 생성한 인스턴스의 **`greet`** 메서드를 호출하여 메시지를 출력하세요.

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

const person = new Person("Jane Doe", 25);
person.greet();