/** 
 *   Ezen
 *   2022-03-12
 * 
 *   function, propotype
 * 
 */

/** 
 *   function  
 */

/** 파라미터로 전달되지 않는 값은 undefined */
function bar(x=1, y=0){ // 보통 숫자형은 default값으로 0을 준다.
    console.log(`x=${x}, y=${y}`);
    let result = x+y;
    return result;
}
bar(100,200);
const result = bar(100);
console.log(result);
bar();


function something(x,y, fn){    
    const result = fn(x,y);
    console.group(fn);
    console.log(fn);
    console.log(`x와 y의 연산 결과는 ${result}`);
    console.groupEnd();
}

// function plus(a,b){return a+b; }
// function minus(a,b){return a-b; }
// something(100,200,plus);

// something(10,20, function(a,b){ // 익명함수
//     return a*b;
// });

something(10,20, (a,b)=> a+b);


/** 
 *  재귀함수: 메뉴-서브메뉴 같이 순환과 탐색을 할 때 사용.
 *  
 *  ex) 
 *      1. 팩토리얼
 *      2. 구구단
 *      3. 피보나치수
 *  
 */
// 1. 팩토리얼
function f(x){
    if(x <= 1 ){
        console.log(1);
        return 1;
    }else {
        console.log(`${x} * f(${x-1})`);
        return x * f(x-1);
    }
}
const a = f(5);
console.log(a);

// 2. 구구단
function gugu(level, depth=1){
    if(depth > 9){
        return;
    } else {
        console.log(`${level} x ${depth} = ${level * depth}`);
        gugu(level, depth+1);
    }
}
gugu(7);

// 3. 피보나치수
/** 
 *   f(n+2) = f(n+1) + f(n)
 */
function fibonacci(n){
    if( n < 2 ){
        return n;
    } else{
        return fibonacci(n-2) + fibonacci(n-1);
    }
}
console.log(fibonacci(10));

///////////////////////
function printStar(max){

    for(let i=0;i<max;i++){
        let result = '';
        for(let j=0; j<i+1; j++){
            result += '*';
        }
        console.log(result);        
    }
}
printStar(5);

function printStar(max, current=1){
    if(max < current){
        return;
    } else{
        let result = '';
        for(i=0; i<current; i++){
            result += '*';
        }    
        console.log(result);        
        printStar(max, current+1);
    }
    
}
printStar(5);


//////////////////
function printRevStar(max){

    for(let i=max; i>0 ; i--){
        let result = '';
        for(let j=0; j<i ; j++){
            result += '*';
        }
        console.log(result);
    }
}
printRevStar(5);

function printRevStar(max, current=1){
    if(max < current){
        return;
    } else{
        let result = '';
        for(i=0; i<max-current+1; i++){
            result += '*';
        }    
        console.log(result);        
        printStar(max, current+1);
    }    
}
printStar(5);


/**
 *   문제1. 
 *   369 게임
 *   1부터 파라미터로 전달된 숫자까지 반복하면서 박수를 칠 조건이 충족되면 3,6,9 게임 규칙에 따라 박수를 의미하는 '짝'을 출력하고,
 *   그렇지 않은 경우에는 숫자를 출려하고, 박수를 총 몇번 쳤는지를 리턴하는 함수 myGame(n)을 작성하시오.
 * 
 */
function myGame(input){
    
    let count = 0;

    for(let i=1; i<input+1; i++){
        const str = i + '';

        let say = '';
        let clap = 0;
        
        for(let j of str){
            if(j === '3' || j ==='6' || j ==='9'){
                say += '짝';
                clap++;
            }            
        }

        if(clap == 0){
            console.log(i);
        } else {
            console.log(`${say} (${i})  ---> ${clap}번`);
        }
        count += clap;
    }
}
myGame(36);


/**
 *   문제1.
 *   국어, 영어, 수학 점수를 생성자 파라미터로 입력받아서 합계와 평균을 구하는 클래스 Student를 작성하라.
 * 
 */
function Student(kr,en,mt){
    this._kr = kr; 
    this._en = en;
    this._mt = mt;    
}

Student.prototype = {
    
    // 합계를 구하는 메소드
    sum : function(){        
        return this._kr + this._en + this._mt;
    },
    avg : function(){
        return Math.ceil(this.sum() / 3);
    }
}    
    const s1 = new Student(92, 80, 91);
    const s2 = new Student(80, 88, 85);
    const s3 = new Student(98, 92, 70);
    console.log(`짱구의 총점은 ${s1.sum()}이고 평균은 ${s1.avg()} 입니다.`);
    console.log(`철수의 총점은 ${s2.sum()}이고 평균은 ${s2.avg()} 입니다.`);
    console.log(`유리의 총점은 ${s3.sum()}이고 평균은 ${s3.avg()} 입니다.`);


/**
 *   문제2.
 *   가로, 세로정보를 getter, setter로 관리하고 Rectangle 클래스를 정의하라.
 * 
 */
function Rectangle(){
    this._width = null;
    this._height = null;
}

Rectangle.prototype = {
    get width(){
        return this._width;
    },
    set width(param){
        this._width = param;
    },
    get height(){
        return this._height;
    },
    set height(param){
        this._height = param;
    },
    getAround : function(){
        return this._width * 2 + this._height *2 ;
    },
    getArea : function(){
        return this._width * this._height;
    }
};
const rect = new Rectangle();
rect.width = 10;
rect.height = 5;

console.log(`둘레의 길이는 ${rect.getAround()} 이고 넓이는 ${rect.getArea()}`);