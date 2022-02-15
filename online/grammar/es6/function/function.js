/**
 *  함수 표현식: 함수 표현을 값처럼 사용 -> Hoisting X
 *  함수 선언식: function AAA(){}
 * 
 */ 
//  const printCode = function(x){
//     console.log(x);
//     printCode(x-1);  
//   }
//   printCode(10);
  
  /** 함수 스코프 내에서 메소드 선언 -> 함수 스코프 내에서만 사용 가능. */
  function printCode1(){
    function printJS1(){
      console.log("printJS1");
    }
    printJS1();
  }
  printCode1();
//  printJS1(); // ReferenceError
  
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


  /** 고차 함수  / 변수,데이터 구조에 할당 && 파라미터로 전달 && 선언자체로 값 할당 -> 일급함수 */
  function getPrint(){
    return function (){
      console.log("Hi");
    };
  };
  const sayHi = getPrint();
  getPrint(); //  => function(){console.log("Hi");} -> Hi 출력 X
  sayHi(); // Hi
  getPrint()(); // Hi



  /** 
   *  Parameter 
   *  기본값을 작성할 때는 가급적 오른쪽에 작성. good(a,b,c="apple");
   *  Parameter 앞쪽부터 채워진다. -> 3개의 Parameter를 받는 함수에 2개의 Argument를 주면 앞에 2개만 Parameter로 전달됨.
   * 
   *  function 내부에 arguments 객체를 사용하여 Parameter를 유연하게 동작할 수 있음.
   *  arguments => 유사 배열
   *  arguments.length , arguments[idx], for(of)
   *  
  */
  function threeParamter(name, age, tel){
    console.log(`${name} , ${age} , ${tel}`);
  }
  threeParamter('dong',28); // dong,28,undefiend

  function threeArguments(name, age, tel){
    for(let item of arguments){
      console.log(item);
    }
  }
  threeArguments('dong',28,'010-7111-1333','good');


  /** 
   * Rest Parameter : array
   * ...parameter
   * 일반 parameter와 함께 사용할 경우 제일 마지막에 작성.
   * arguments 보다는 Rest Parameter 권장. (완벽 대체는 불가)
   * 
   * */
  function restParameter(first, second, ...others){ // ..others => ['good','job','man']
    console.log(`${first}`);
    console.log(`${second}`);
    for(let item of others){
      console.log(`${item}`);
    }
    console.log(others.splice(0,2)); // ['good','job']
    console.log(others.shift()); // ['man']  -> remove the first element of array
  }
  restParameter('dong','hyun','good','job','man');

  
  /** arrow function  
   * 
   *  arguments가 없다.
  */
  const getArrow = (number) => {
    return number *2;
  }

  const myBtn = document.querySelector('#button');

  myBtn.addEventListener('click', () => {
    console.log('button click ');
  });

  const getArrow1 = number => number*2; // parameter가 1개일 경우 ()생략가능, 함수 내부에 return문 한줄만 있는 경우 return 생략가능.  
  const getArrow2 = ()=> ({name:"dong"});  // 리턴문 한줄이 객체인 경우 ()로 묶어준다.
  console.log(getArrow1(2));


  /** this 
   *  
   *  method를 호출한 객체를 가리키는 키워드
   * 
  */
  function getFullName(){
    return `${this.firstName} ${this.lastName}`;
  }
  const teacher = {
    firstName: 'donghyun',
    lastName:'kim',
    getFullName:getFullName
  };
  const student = {
    firstName:'messi',
    lastName:'lionel',
    getFullName:getFullName
  }
  /** 어떤 객체의 method를 호출할 경우 method를 호출한 객체에 this가 담긴다. */
  console.log(teacher.getFullName()); 
  console.log(student.getFullName());
  // function testA(){console.log(this);}  testA(); -> window  (this만 사용하거나, 예시처럼 method를 선언만 하고 호출하는 경우)

  /** 
   * arrow function this
   * 
   * arrow function에서의 ***this의 값은 arrow function이 선언되기 직전에 유효한 this값과 똑같은 값을 가지고서 동작함. (window)
   * => * 일반 함수처럼 호출한 대상에 따라 상대적으로 변하지 않음.
   * 
   *  method를 생성할 때 this에 method를 호출한 객체를 가리키고 싶으면 일반 함수를 활용!
   * 
   * */