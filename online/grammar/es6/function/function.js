/**
 *  함수 표현식: 함수 표현을 값처럼 사용 -> Hoisting X
 *  함수 선언식: function AAA(){}
 * 
 */ 
 const printCode = function(x){
    console.log(x);
    printCode(x-1);
  }
  printCode(10);
  
  /** 함수 스코프 내에서 메소드 선언 -> 함수 스코프 내에서만 사용 가능. */
  function printCode1(){
    function printJS1(){
      console.log("printJS1");
    }
    printJS1();
  }
  printCode1();
  printJS1(); // ReferenceError
  
  /** 함수 스코프가 아닌 곳에서 메소드 선언하는 경우 -> 전역처럼 사용 가능. */
  const test1 = 3;
  if(test1 < 5){
    function printJS2(){
      console.log("printJS2");
    }
  }
  {
    function printJS3(){ console.log("printJS3");}
  }
  printJS2(); // printJS2
  printJS3(); // printJS3
  
  /** 즉시 실행 함수: 함수 선언과 동시에 즉시 실행됨. -> 기명이어도 외부에서 재사용 불가. */
  (function iifeFunction(n){
    console.log(10);
    if(n === 10){
      iifeFunction(n-3);
    }
  })(10); // 소괄호로 감싸고 뒤에 소괄호를 붙여 메소드 실행.