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
const [red,yellow, ...color] = rank; // console.log(color) => ['orange','cherry','melon'];
const [one,two,three,four,five,six,seven] = rank; // six,seven -> undefined

console.log(first); // apple
console.log(second); // banana
console.log(third); // orange

let intel = 'dong';
let amd = 'hyun';

// let temp = intel;
// intel = amd;
// amd = temp;
[intel,amd] = [amd,intel]; // 구조 분해
console.log(intel); // hyun
console.log(amd); // dong


const macbook = {
    product: '맥북프로',
    price: 3000000,
    memory: '64GB',
    storage: '1TB',
    'seoul-SDM': 'bukGaJa', // ''안에 - 이 있어서 propertyName이 변수명으로 사용할 수 없는 경우일 때에도 proertyName으로 사용할 수 있다.
};
const {product:productname, price, ...rest} = macbook; // 구조 분해하려는 객체 내부의 property를 다르게 하려면 : 을 붙인다. (기존객체내부의property: 새로운변수명)
console.log(productname); // 맥북프로
console.log(rest); // {memory:"64GB",storage:"1TB"}

const { storage: save, 'seoul-SDM':seoulSDM} = macbook; //  새로운 변수명(seoulSDM)으로 선언해야한다.

const propertyName1 = 'price';
const {[propertyName1]: newPropertyName} = macbook;
console.log(newPropertyName); // 3000000


/**
 * function Destructuring
 * 
 */
const coding = {
    language : 'JavaScript',
    framework : 'vue',
    tool : 'vsCode',
}
function printCoding({language,framework,tool}){ // 요소에 바로 접근    
    console.log(`${language}`);
    console.log(`${framework}`);
    console.log(`${tool}`);
}
printCoding(coding);

// 자주 사용되는 JS 객체 또는 이벤트 객체인 경우 Destructuring을 활용
const button = document.querySelector('#button');
button.addEventListener('click', ({target}) => {  // event가 발생하는 객체 내부에 target 프로퍼티에 바로 접근!! -> code concise
                                                  // parameter로 ({target: {classList}}) 형태로 중첩 객체 구조 분해를 사용해도 된다.
    const { classList } = target;
    classList.toggle('checked');
});



/**
 *  error, errorObject
 * 
 *  name, message
 */
const error = new TypeError("TypeError Object");
throw error; // 강제로 error 발생. message: "TypeError Object"


/** 
 *  try catch
 * 
 *  Exception만 가능, SyntaxError은 불가.(lan-good 과 같이 실행되지 않는 코드 에러)
 */
try{
    const lan = 'JavaScript';
    lan = 'good'; // typeError
}catch(error){
    console.error("error");
    console.log(e.name);
    console.log(e.message);
}