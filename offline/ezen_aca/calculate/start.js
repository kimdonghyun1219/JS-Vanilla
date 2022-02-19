/**  
 *  ecma8 start ezen 22-02-19 
 *  @response: start.html
*/


/** JS %d, %s, %o, %j  => number, string, object, json */

const item1 = 10;
const item2 = 3;
const itembox = {item1,item2};

function calcu(param){

    if(param){
        let plus = param.item1 + param.item2;
        let minus = param.item1 - param.item2;
                
        let loseAdd = plus %= minus;

        console.log(`plus : ${plus}  minus : ${minus}  loseAdd = ${loseAdd}`);
    }
}
calcu(itembox);

console.log(typeof {} || true);
let andORResult = 123 || false;
console.log(100+andORResult);

const count = 100;
const resultThree = count > 101 ? true : false;
console.log(resultThree);


/**
 *  연습문제 
 *  @question : 4
 *  @Resource : ezen
 *  @date : 2022-02-19 
 * 
*/

/**  
 *  1
 *  현재 년도에 대한 값을 year라는 상수로 생성하고 
 *  이 값을 활용하여 자신의 나이를 연산한 후 
 *  age라는 이름의 지역변수에 할당하고 "나는 OO세 입니다." 
 *  라는 형식의 문장으로 이스케이프 문자를 활용하여 출력하시오.
 * 
*/
const YEAR = 2022;
let age = YEAR - 1995;
console.log(`나는 ${age}세 입니다.`);

/** 
 *  2
 *  자신의 나이를 의미하는 상수 myage를 정의하고
 *  이 값을 활용하여 자신이 태어난 년도 year를 전역 변수 형식으로 산출하여 
 *  "나는 OOOO년도에 태어났습니다."라는 형식의 문장으로 
 *  이스케이프 문자를 활용하여 출력하시오.
 * 
 */
const MY_AGE = 28;
let brith_year = YEAR - (MY_AGE - 1);
// let brith_year = YEAR - (MY_AGE + 1);

console.log('나는 %d년도에 태어났습니다.', brith_year);

/** 
 *  3
 *  사과를 바구니에 나누어 담으려고 한다.
 *  하나의 바구니는 사과를 10개씩 담을 수 있다.
 *  예를 들어 120개의 사과를 나누어 담기 위해서는 12개의 바구니가 필요하지만 
 *  121~130개까지 사과가 있다면 13개의 바구니가 필요하게 된다.
 *  현재 갖고 있는 사과의 수를 의미하는 numOfApples 변수를 활용하여 
 *  필요한 바구니의 수를 구하는 프로그램을 구현하시오.
 * 
*/
let itemCnt = 123.23323;
function needBacketCnt(itemCnt){

    if(typeof itemCnt === 'number'){

        const backetCnt = ((itemCnt % 10) === 0) ? itemCnt/10 : Math.floor(itemCnt/10) + 1;
        
        return console.log(backetCnt);

    }else{
        console.log("not number");
    } 
}
needBacketCnt(itemCnt);

/**  
 *  4
 *  입력된 값에서 백의자리 이하를 버리고 결과를 도출한다고 한다.
 *  예를 들어 입력된 값이 457이라면 400이 결과로 출력된다. 
 *  이러한 출력결과를 만들 수 있는 코드를 작성하시오.
 * 
*/
let inputValue = 45723212.21;
function floorTenPosi(inputValue){
    
    if(typeof inputValue === 'number'){
        const tenPosi = inputValue % 100;
        const tenPosiResult = inputValue - tenPosi;

        console.log(tenPosiResult);
    } else{
        console.log('not number');
    }        
}
floorTenPosi(inputValue);

/**
    vscode extends : code Runner

    script: 변수 선언과 동시에 메모리에 할당.

    UTF-8
    language 1word => 3byte (eng:1byte, kor:2byte => X)

    computer : 2진수 표기법 해석(D/T)

*/






