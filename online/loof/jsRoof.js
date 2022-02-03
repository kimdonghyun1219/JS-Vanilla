/**  Object 객체 메소드 : 객체 순환 전용 */
// 1. Object.keys(객체) :  객체의 프로퍼티 Key 를 array로 반환
let Object_keys = Object.keys({name:'donghyun',job:'developer'});
console.log(Object_keys); // ['name','job']

// 2. Object.values(객체) : 객체의 프로퍼티 Value 를 array로 반환
let Object_value = Object.values({name:'dong',job:'developer'});
console.log(Object_value); // ['dong','developer']

// 3. Object.entries(객체) : 객체의 프로퍼티 [key,value]을 array로 반환
let Object_entries = Object.entries({name:'dong',job:"developer"});
console.log(Object_entries); // [array(2),array(2)] -> [['name','dong'],['job','developer']]


/**  Array.prototye : 배열 전용 메소드 */
// 1. array.forEach((value,index,array)=>{.....})
// 배열의 length만큼 반복하여 callback() 호출
// callback()의 매개변수로 value=요소값, index=index, array=array원본
[1,2,3,4,5].forEach((value,index,array)=>{
    console.log(value); // 1,2,3,4,5
})

// 2. array.map((value,index,array)=>{......})
// forEach()와 유사하지만 다른점은 각 callback()에서 return하는 값들로 새로운 array를 만들어 반환.
const map_result = [1,2,3,4,5].map((value,index,array)=>{
    console.log(value); // 1, 2, 3, 4, 5
    return value*10; // 각 요소1,2,3,4,5 에 10을 곱한 값을 array로 반환
})
console.log(map_result); // [10,20,30,40,50]

// 3. array.filter((value,index,array)=>{......})
// forEach()유사하지만 다른점은 각 callback()에서 return하는 값이 true일때만, 그때의 값을 새로운 array을 만들어 반환
const filter_result = [1,2,3,4,5,6].filter((value,index,array)=>{
    console.log(value); //1, 2, 3, 4, 5, 6
    return value%2 == 0;
})
console.log(filter_result); // [2,4,6]

// 4. array.reduce((previousValue,currentValue,currendIndex,array)=>{....},initialValue)
// initialValue: 시작값, 각 callback()가 return하는 값이 다음에 실행되는 callback()의 previousValue로 들어감.
// 최종적으로 마지막 callback()가 return하는 값을 반환.
const reduce_result = [1,2,3,4,5].reduce((pv,cv,idx,arr)=>{
    return pv+cv; // 이전 callback()가 return한 값에 현재의 요소 값을 더함. (누적 개념)
},100); // 초기값 100
console.log(reduce_result); // 115 (100+1+2+3+4+5)
