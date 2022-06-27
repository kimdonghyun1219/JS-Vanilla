/**
 *   typeof
 */
   typeof 'good'; // String
   typeof Symbol(); // symbol
   typeof {}; // object
   typeof []; // object
   typeof true; // boolean
   typeof(false); // boolean
   typeof(123); // number
   typeof(NaN); // number
   typeof(123n); // bingint
   typeof(undefined); // undefined
   typeof null; // ** object
   
   function apple(){};
   typeof apple; // function

/**
 *   AND, OR
 * 
 *   AND:
 *      왼쪽값이 true면 오른쪽 값을 리턴, 왼쪽값이 false면 왼쪽값을 리턴.
 *      console.log("good","apple"); => good apple
 *      console.log(true && false);  => false
 *      console.log('0' && NaN); => NaN
 *      console.log(null && undefined); => null
 *      
 *   OR:
 *      왼쪽값이 true면 왼쪽값을 리턴, 왼쪽값이 false면 오른쪽값을 리턴.
 *      console.log(0 || true);  => true
 *      console.log({} || 123);  => {}
 *      console.log(123 || 'good'); => 123
 *      console.log( null || undefined); => undefined
 *      console.log( false || NaN) => NaN
 * 
 *   우선순위: AND > OR
 */   
 
function print(value){
  const message = value || 'good';
  console.log(message);
}

print(); // good
print('apple'); // apple