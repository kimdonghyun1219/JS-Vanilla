/** 
 *  forEach , map 
 * 
 *  forEach: 단순반복
 *  map: 결과 리턴
*/

const members = ['짱구','유리','철수','훈이','맹구'];

const firstName = ['dong','hyun','joo','lim'];
const lastName = ['kim','na','park','lee']; 

members.forEach((value,idx)=>{
    console.log(`value : ${value}`);
    members.push('arr push'); // array length가 증가한다고해서 forEach 반복횟수도 증가하지 않고 기존 members의 길이만큼 반복한다.
//  members.pop();               하지만, pop인 경우 forEach반복만큼 array length가 줄어들어 반복횟수가 감소한다.           
});

const fullName = firstName.map((value, idx)=>{
    return lastName[idx]+value;
});
console.log(fullName);


/**
 *  filter , find
 * 
 *  filter: 조건에 맞는 결과값 리턴-> array
 *  find: 조건에 맞는 결과값 찾기 -> 요소 리턴
 * 
 *  조건에 맞는 요소가 없는 경우
 *  filter: []
 *  find: undefind, 처음 조건을 만족하는 값을 찾는경우 반복 종료
 */

const devices = [
    {name: 'galaxyS22', brand: 'samsung',},
    {name: 'iphone13', brand: 'apple',},
    {name: 'ipad7', brand: 'apple',},
    {name: 'galaxyNote10', brand: 'samsung',},
    {name: 'macbook', brand: 'apple'},
];

const apple = devices.filter((value)=>value.brand ==='apple');
console.log(apple); // array로 리턴하기에 array안에 있는 값을 얻고 싶다면 console.log(...apple); [{ name: 'iphone13', brand: 'apple' } ..]
console.log(...apple); // { name: 'iphone13', brand: 'apple' } { name: 'ipad7', brand: 'apple' } { name: 'macbook', brand: 'apple' }

const galaxyNote = devices.find((value)=> value.name==='galaxyNote10');
console.log(galaxyNote); // { name: 'galaxyNote10', brand: 'samsung' }


/**
 *  some , every
 * 
 *  some: 조건을 만족하는 요소가 1개 이상 있는지 여부
 *  every: 모든 요소가 조건을 만족하는지 여부
 * 
 *  return: boolean
 *  
 *  []
 *  some: false
 *  every: true
 */
const numbers = [1,2,3,4,5];

const someResult = numbers.some((value,idx)=> value>3);
console.log(someResult);

const everyResult = numbers.every((value,idx)=> value >0);
console.log(everyResult);


/**
 *  reduce
 * 
 *  array.reduce((acc,ele,idx,arr)=> {return nextAccValue;}, initialAccValue);
 *  acc: 직전에 동작한 콜백함수가 리턴한 값을 전달받는 파라미터
 * 
 *  reduce에 활용되는 콜백함수는 다음 콜백함수의 acc로 전달할 값을 리턴.
 *  매 반복때마다 콜백함수의 리턴값을 다음콜백 함수의 acc로 전달해주면서 
 *  마지막에 실행되는 콜백함수의 리턴값이 reduce 메소드의 최종값이 된다.
 * 
 *  제일 처음 실행되는 콜백함수는 acc에 전달받을 값이 없기 때문에
 *  첫번째 콜백함수가 동작할 때 acc값을 reduce메소드의 2번째 argument로 전달해줌.
 * 
 */
const count = [1,2,3,4,5];

const sumAll = count.reduce((acc,value,idx,arr)=>{
    console.log(`idx : ${idx}`);
    console.log('acc :',acc);
    console.log('value :',value);
    console.log('------------');

    return acc + value; // arrow function에서 return이 있는 경우 {return} 사용
},0); // 2번째 parameter를 주지 않을 경우 array의 첫번째 요소가 acc로 전달된다. -> 배열의 반복 횟수가 1회 감소한다.(원하는 결과값이 안나올 수 있음.)
console.log(sumAll);


/**
 *  sort , reverse
 * 
 *  sort: 정렬
 *  reverse: 역정렬
 * 
 *  한번 정렬메소드를 사용하면 사용된 원본 배열은 정렬된 상태로 변함.
 */

const numbers = [1,1230,310,7];
numbers.sort(); // no argument => unicode
console.log(numbers); // [1,1230,310,7]

// 오름차순
numbers.sort((a,b) => a-b);
console.log(numbers);

// 내림차순
numbers.sort((a,b)=> b-a);
console.log(numbers);

const hair = [3,102,301,601,582];
hair.reverse(); // no parameter
console.log(hair); // [582,601,301,102,3]