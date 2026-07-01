import { add, subtract} from './operations.js';
import userProfile from './userProfile.js';

console.log(add(2,3));
console.log(subtract(5,1));

const user = new userProfile("keryn",25);
console.log(`이름 : ${user.name}, 나이 : ${user.age}`);