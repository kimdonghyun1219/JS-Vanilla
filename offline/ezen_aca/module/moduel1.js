/** module 1 */

// node 방식 (JS방식하고는 예약어나 차이가 있음.)

/**
 *  require(): 파일경로는 확장자 생략 가능.
 *              동일경로라도 "./"는 생략불가.   
 *              "./"가 생략되는 경우 node의 내장 모듈로 인식함.
 */
const module1 = require('./moduel1_export');


// case1. method export
 module1();


 // case2.
 console.log(module1.name);
 console.log(module1.property.id);
 module1.say();

 console.log(module1.home.postcode);
 module1.home.getAddress();


 // case3.
 const module_obj = new module1();
 module_obj.say();

 // case4. return object
 module1.say();
