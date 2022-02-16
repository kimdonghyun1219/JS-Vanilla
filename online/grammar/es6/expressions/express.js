 // modern property
 const title = 'good';
 const day = 2022;
 const job = 'developer';

 const user = {
     title, // title = title; 변수에 할당하는 값의 명과 담을 변수명이 동일하면 생략가능.
     day,
     getUserJob, // method
     getName(){
         return `${this.title}`;
     }
 };
 function getUserJob(){
     return `${this.job}`;
 }
 console.log(user.getName()); // good


 /** 
  * computed property name 
  * [표현식] : 값
 */
const propertyName = 'pc';
const getMemory = () => 'memory';

const computer = {
    [propertyName] : 'greatePC',
    ['cpu'+'name'] : 'i9',
    [getMemory()] : 'samsung',
}
console.log(computer); // {pc:"greatePC", cpuname:"i9",memory:"samsung"};



/** 
 * Destructuring : 구조 분해
 * 
 */
const rank = ['apple','banana','orange','cherry','melon'];
const [first,second,third] = rank; // console.log(first) => apple   나머지는 할당안됨.
const [first,second, ...last] = rank; // console.log(last) => ['orange','cherry','melon'];
const [one,two,three,four,five,six,seven]; // undefined

let intel = 'dong';
let amd = 'hyun';

// let temp = intel;
// intel = amd;
// amd = temp;
[intel,amd] = [amd,intel]; // 구조 분해