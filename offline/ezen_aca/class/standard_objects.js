/** 
*    2022-03-19
*    JS Standard built-in objects 
*   
*/



/**
    isNaN(value)
    : value is NaN (true), value is not NaN (false) 
 */
console.log(isNaN(NaN)); // true
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true
console.log(isNaN(`123abc`)); // true

console.log(isNaN(true)); // false
console.log(isNaN(false)); // false
console.log(isNaN(null)); // false
console.log(isNaN(``)); // false
console.log(isNaN(` `)); // one space false
console.log(isNaN(`123`)); // false
console.log(isNaN(123.232)); // false
console.log(isNaN(0)); // false


/* encode, decode */
// encodeURI => UTF-8환경에서 사용불가.
// encodeURIComponent => UTF-8 환경에서 사용가능.
// 예약, 비예약 문자 차이: encode가 되는지 문제

const reserved = `; , / ? : @ & = + $ # % | [] {} `; // 예약어
const noreserved = `- _ . ! ~ * ' ()`; // 비예약어 (원본유지)

const encode1 = encodeURIComponent(reserved);
console.log(encode1);
console.log(decodeURIComponent(encode1));

const encode2 = encodeURIComponent(noreserved);
console.log(encode2);
console.log(decodeURIComponent(encode2));
// %20 : space


/* String */
// replace: 첫번째로 일치하는 것만 변경
// replaceAll: 일치하는 모든 항목 변경
const test = `안녕하세요. 저는 김동현입니다. 오늘 컨디션 최상입니다.`;
const oneRepl = test.replace(`.`,`!`);
const result = test.replaceAll(`.`,`!`);
console.log(oneRepl);
console.log(result);


function random(n1,n2){
    return parseInt(Math.random() * (n2-n1 +1)) + n1;
}
const result = random(0,9);
console.log(`0 ~ 9 사이의 난수 : ${result}`);

// 인증번호 (1000~9999범위를 해도 되지만 같은 라인77817 식으로 나올 확률이 좀더 높기에 개별 적용)
let numbers = ``;
for(let i=0; i<5; i++){
    numbers += random(0,9);
}
console.log(numbers);


/* Data */
const nowDate = new Date();

const yy = nowDate.getFullYear();
const mm = nowDate.getMonth() +1;
const dd = nowDate.getDate();
console.log(`${yy} ${mm} ${dd}`);

const i = nowDate.getDay(); // 0일 ~ 6토 
const day = [`일`,`월`,`화`,`수`,`목`,`금`,`토`][i];
console.log(day);


// timestamp: 1970년 1월1일 자정부터 현재까지 흐른 시간을 초 단위로 환산.
// getTime(): timestamp -> ms

const date = new Date();
const tstmp = date.getTime();
console.log(tstmp);

// 며칠 지났는지 계산
const prevDate = new Date(date.getFullYear(), 0, 1);
const second1 = prevDate.getTime();
const tmp1 = tstmp - second1;
const passeDay = Math.floor(tmp1 / (1000 * 60 * 60 * 24)); // 오늘 날짜까지 소수점으로 증가되기에 floor처리.
console.log(`${prevDate.toLocaleDateString(`ko-KR`)}부터 현재까지 ${passeDay}일 지났습니다.`);

// 며칠 남았는지 계산
const nextDate = new Date(date.getFullYear(), 11, 31);
const second2 = nextDate.getTime();
const tmp2 = second2 - tstmp;
const leftDay = Math.ceil(tmp2 / (1000 * 60 * 60 * 24));
console.log(`올해 말까지 앞으로 ${leftDay}일 남았습니다.`);



/* Number */
const abc = new Number(`12345`);
console.log(typeof abc); // Object
console.log(abc == 12345); // true
console.log(abc === 12345); // false


/* 
    RegExp 
    const 변수명 = /정규표현식/ 
    변수명.test(검사할 문자열) -> 부합 시 true
*/
const pattern1 = /^[ㄱ-ㅎ가-힣]*$/;
const pattern2 = /^[a-zA-Z0-9]*$/;
console.log(pattern1.test(`가자`));
console.log(pattern2.test(`12abc`));



/* array */
const data = [1, 2, 3, 4, 5];

// pop(): 마지막 요소를 리턴하고 제거
const popData = data.pop();
console.log(popData); // 5
console.log(data); // [1, 2, 3, 4]

// shift(): 맨 앞 요소를 리턴하고 제거
const shiftData = data.shift();
console.log(shiftData); // 1
console.log(data); // [2, 3, 4, 5]

// unshift(a, ...b): 맨 앞에 파라미터를 추가
data.unshift(100,200,300,400,500);
console.log(data); // [100, 200, 300, 400, 500, 1, 2, 3, 4, 5]

// splice(a,b, ...c): a index부터 b개 요소를 반환하고 이를 원본배열에서 제거. c는 추가할 원소(원본배열->가변, 삭제되는 맨앞 idx에 추가)
const spliceData = data.splice(1,3);
console.log(spliceData); // 2, 3, 4

const sp = data.splice(1,2,`a`,`b`,`c`,`d`);
console.log(sp); // [2, 3]
console.log(data); // [1, 'a', 'b', 'c', 'd', 4, 5]

// includes(element): 해당 array에서 요소 찾기 @return: boolean
const arr = [1,0,false];
console.log(arr.includes(1)); // 요소가 있는지 검색(ok:true, no: false)  === 완전 항등 비교 (NaN도 비교가능!)

// 오름차순, 내림차순 정렬: sort() 내부 콜백함수에 로직 작성.
const data = [13,28,21,3,1];
data.sort((a,b)=>{
    if(a > b){
        return 1;
    } else {
        return -1;
    }
});
console.log(data);

const data = [22,30,21,27,1];
data.sort((a,b)=>{
    if(a < b){
        return 1;
    } else {
        return -1;
    }
});
console.log(data);

// find(): 콜백함수를 만족하는 첫번째 값을 리턴. 없으면 undefined
const arr = [5, 12, 8, 4, 7];
const found = arr.find(v => {
    console.log(v); // 5, 12

    if(v % 2 == 0){
        return true; // true를 return하는 순간 배열 탐색을 중단.
    } else {
        return false; // false가 return되면 parameter값 버림.
    }
});
console.log(found); // 12


// forEach: 전체를 탐색할 때 사용 (break 사용불가, return은 해당 콜백함수만 종료됨)
// some(): 전체 탐색 후 true가 return되면 중단됨.
const arr = [1,2,3,4,5];
const someResult = arr.some((val,idx)=>{
    if( idx == 3 ){
        console.log(`break`);
        return true;
    }
    console.log(`idx : ${idx} , value : ${val}`);
});
console.log(someResult); // true  만약 전체를 탐색하고도 나오지 않으면 false return

// sort(): 오름차순 정렬 -> **string순   ex) [1, 3, 11]인 경우 [1, 11, 3]이 된다.
const data = [29,6,27,3,10];
data.sort();
console.log(data); // [10, 27, 29, 3, 6]

const data = [8,2,3,5,1];
data.reverse();
console.log(data); // [1, 5, 3, 2, 8]
