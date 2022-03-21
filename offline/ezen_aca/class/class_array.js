/**
     Ezen
     2022-03-19

     @param : 9     

*/


/*
    문제1.
    다음을 만족하는 Student Class를 작성하시오.

    1. String형의 학과와 정수형의 학번을 프로퍼티로로 선언 후 생성자를 통해 주입
    2. getter, setter를 정의
    3. sayHello()를 통해 "나는 ~학과 ~학번 입니다."를 출력하는 기능을 구현.

*/
class Student{
    // 1. constructor
    constructor(study, gradeNum){
        this._gradeNum = gradeNum;
        this._study = study;
    }

    // 2. getter, setter
    get gradeNum(){
        return this._gradeNum;        
    }
    set gradeNum(gradeNum){
        this._gradeNum = gradeNum;
    }
    
    get study(){
        return this._study;
    }
    set study(study){
        this._study = study;
    }

    // 3. sayHello
    sayHello(){
        console.log(`나는 ${this.study}학과 ${this.gradeNum}학번 입니다.`);
    }
}
const callStudent = new Student(`빅데이터`,23);
callStudent.sayHello();



/*
    문제2.
    다음을 만족하는 Account Class를 작성하시오.

    1. 다음의 2개의 필드를 선언
        - 문자열 owner
        - 숫자형 blance;
    2. 위 모든 필드에 대한 getter, setter 구현
    3. 위 모든 필드를 사용 가능한 생성자 구현
    4. deposit(amount) -> 금액을 저축하는 method 구현
    5. withdraw(amount) -> 금액을 리턴하는 method
        - 인출 상환 금액은 잔액까지로 하며, 이 경우 이러한 상황을 출력
*/
class Account{    

    constructor(owner, blance){
        this._owner = owner;
        this._blance = blance;
    }

    get owner(){
        return this._owner;
    }
    set owner(owner){
        this._owner = owner;
    }
    get blance(){
        return this._blance;
    }
    set blance(blance){
        this._blance = blance;
    }

    deposit(amount){
        this._blance += amount;
    }

    withdraw(amount){
        if(this._blance < amount){
            console.log(`잔액이 부족!`);
            return 0;
        }

        this._blance -= amount;
        return amount;
    }
}
const acc = new Account(`like`, 15000);
console.log(`${acc.owner}의 잔액은 ${acc.blance}원 입니다.`);

// deposit
acc.deposit(5000);
console.log(`${acc.owner}의 잔액은 ${acc.blance}원 입니다.`);

// consum
acc.withdraw(10000);
console.log(`${acc.owner}의 잔액은 ${acc.blance}원 입니다.`);

// consum
acc.withdraw(15000);
console.log(`${acc.owner}의 잔액은 ${acc.blance}원 입니다.`);



/*
    문제3.
    이메일 주소를 email이라는 변수에 저장하고 @를 기준으로 id, domain을 분리하라.
*/
function emailDivision(inputEmail){

    const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if(!emailRegExp.test(inputEmail)){
        return console.log(`email 형식이 잘못되었습니다.`);
    }    
    
    const email = inputEmail;    
    const position = email.lastIndexOf(`@`);
    
    const id = email.substring(0,position);
    const domain = email.substring(position+1);

    console.log(`id: ${id}, domain: ${domain}`);
}
emailDivision(`donghyun1219@naver.com`);


/*
    문제4.
    임의의 주민번호를 다음과 같이 *을 포함하여 변수에 저장하시오.

    ssn = `951219-1******'
        - 생년월일, 나이, 성별을 출력하라.
*/
const ssn = `951219-1******`;

const date = new Date();
const now_year = date.getFullYear();

let yy = Number(ssn.substring(0,2));
const mm = Number(ssn.substring(2,4));
const dd = Number(ssn.substring(4,6));
const yycheck = Number(ssn.substring(7,8));

yy = (yycheck === 1 || yycheck ===2 ) ? 1900+yy : 2000+yy;
const gender = (yycheck === 1 || yycheck === 3) ? `male` : `female`;
const age = now_year - yy +1 ;

console.log(`생년월일 : ${yy} , 나이 : ${age} , 성별 : ${gender}`);


/*
    문제5.
    아래 문장에서 "수업시간" 이라는 단어가 총 몇번 등장하는지 카운트 하는 프로그램을 작성하라.

    str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다."
    result = 3
*/
let str = `수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다.`;
let count = 0;
const target = `수업시간`;
while(str){
    const searchIdx = str.indexOf(target);
    if(searchIdx === -1) break;   
    str = str.substring(searchIdx+target.length-1);
    count++;
}
console.log(`"${target}" 은 총 ${count}번 등장한다.`);


/*
    문제6.
    주어진 범위 안에서 랜덤한 숫자를 추출하는 함수는 아래와 같다.

    function random(n1, n2) {
        return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
    }

        - 0개의 원소를 갖는 배열 lotto를 생성하고 6회의 반복을 수행하는 for문을 사용하여 
          배열의 각 원소를 1~45 사이의 범위를 갖는 임의의 숫자로 채워 넣으시오.
        - 반복이 종료되었을 때 lotto의 원소는 6개의 숫자가 채워져 있어야 하고 각 숫자는 중복되지 않아야 한다.
        - 중복되지 않는 숫자를 생성하기 위해 for문 안에서 무한반복을 위한 while문을 수행해야 한다.
*/
function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}
let lotto = [];
for(let i=0; i<6; i++){
    
    while(true){
        const lotto_num = random(1,45);
        if(!lotto.includes(lotto_num)){ // 있으면 true
            lotto.push(lotto_num);
            break;
        }        
    }
}
console.log(lotto);

/*
    문제7.
    1~45사이의 범위의 1씩 증가 하는 원소가 저장되어 있는 배열 balls을 생성하고 6개의 빈 칸을 갖는 배열 lotto를 생성하라.
    lotto 배열을 탐색하는 반복을 수행하면서 balls 배열에서 임의의 원소 하나를 추출하여 lotto 배열에 채워넣어라.
    추출된 숫자는 balls 배열에서 삭제되어야 한다.
*/
let lotto = new Array(6);
let balls = [];
function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}
for(let i=1; i<46; i++){
    balls.push(i);
}
for(let i=0; i<lotto.length; i++){
    
    const random_number = random(0, balls.length-1);
    lotto[i] = balls[random_number];
    
    balls.splice(random_number,1);
}
console.log(lotto);



/*
    문제8.
    수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였다.
    마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
    완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성하라.

    제한사항
        - 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하이다.
        - completion의 길이는 participant의 길이보다 1 작다.
        - 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있다.
        - 참가자 중에는 동명이인이 있을 수 없다.

*/

