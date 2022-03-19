/** module export */

// node 방식 (JS방식하고는 예약어나 차이가 있음.)
/**
 *  module.exports 를 통해 등록된 기능들을 리턴.
 * 
 */

// 1. method
function methodModule1(){
    console.log("method export");
}
// 1-1. 작성한 method를 모듈로 등록
// module.exports = methodModule1;


// 2. 변수, JSON, method
module.exports.name = "export name";
module.exports.property = {id:'node.js', type:'javascript'};
module.exports.say = function(){
    console.log("변수에 익명함수 할당");
}
// 2-a. export 속성으로 객체 추가
module.exports.home = {
    postcode: '12345',
    address: '서울시 서대문구',
    getAddress: function(){
        console.log(`${this.postcode} ${this.address}`);
    }
}


// 3. Class 모듈화
class ClassModule{
    constructor(){
        console.log(`ClassModule 객체 생성됨.`);
        this.age = 28;
        this.name = "KIM DONG HYUN";
    }

    say(){
        console.log(`이름 : ${this.name}`);
        console.log(`나이 : ${this.age}`);
    }
}
module.exports = ClassModule;
module.exports = new ClassModule();


// 4. new를 통해 객체 생성 후 export
module.exports = new HelloWorld();