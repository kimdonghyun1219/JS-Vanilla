/** 기존 비동기 실행 함수 */

setTimeout(()=> {console.log('setTimeout method play'), 1000});

setInterval(()=> {console.log('setInterval method play'), 2000});


/** 
 *  promise
 *  : 작업에 관한 상태정보를 가지고 있는 객체
 * 
 *  
 *  pending: 진행중
 *  fulfilled: 성공
 *  rejected: 실패
 * 
 *  
 *  fetch => promise객체 리턴
 *  fulfilled인 경우 그 작업 성공 결과를, rejected인 경우 작업 실패 정보를 담고 있다.
 * 
 */

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> response.text()) // response.text(): promise객체를 리턴하는 메소드.
.then((result)=> { 
/** then(): promise객체가 fulfilled상태가 되었을 때 실행할 callback을 등록하는 메소드,
 *          **새로운 promise객체를 리턴.
 *          then()이 리턴한 promise객체는 처음에는 pending상태이다.
 *          이후 then()로 등록한 callback()이 실행되고 callback에서 어떤 값을 리턴하면
 *          then()가 리턴했던 promise객체가 영향을 받는다.
 *          이때, callback에서 어떤 값을 리턴했느냐에 따라서 받는 영향이 달라지는데 크게 2가지 경우
 *          
 *          1. callback안에서 promise객체를 리턴하는경우
 *              1) then()가 리턴한 promise 객체는 callback이 리턴한 객체와 동일한 상태와 결과를 갖게 됨.
 * 
 *          2. callback에서 promise 객체가 아닌 값을 리턴하는 경우
 *              2) 숫자, 문자열, 일반객체을 리턴하면 then()가 리턴했던 promise객체는 fulfilled 상태가 되고
 *                 callback의 리턴값을 작업 성공 결과로 갖게 된다. 
 *          
 */
    const users = JSON.parse(result);
    return users[0];
}).then((user)=> {
    const {address} = user;
    return address;
});

/** set second parameter to error */
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> response.text(), (error)=> {console.log(error);}) // then()이 rejected가 될 때 실행하고 싶으면 2번째 parameter를 준다.
.then((result)=> {console.log(result); });


/** catch(): rejected 상태가 될 때 실행 */
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> response.text())
.then((result)=> {console.log(result); })
.catch((error)=> {console.log(error); }); 


/** catch()는 then() 변형 */
fetch('https://jsonplaceholder.typicode.com/users') // Promise-A
  .then((response) => response.text()) // Promise-B
  .then(undefined, (error) => { console.log(error); }) // Promise-C
  .then((result) => { console.log(`Quiz: ${result}`); }); // Promise-D 
  // 결과: undefined
  // 이유: catch()에서 아무것도 리턴하지 않음. -> catch()에서 리턴한 promise객체는 fulfilled가 되고 undefined를 작업 성공 결과를 갖게되며
  //       그 뒤의 then()의 callback 파라미터(result)로 undefined가 넘어가게 되어 result가 undefined로 출력됨.




 /** finally */ 
fetch('https://jsonplaceholder.typicode.com/users') 
.then((response) => response.text()) 
.then((result)=> {console.log(result); })
.catch((error)=> {
    console.log(error);
    throw new Error("error create"); 
})
.finally(()=> {console.log('finally'); });



/** Promise 객체 생성 */
const p = new Promise((resolve, reject)=> {
    setTimeout(()=> {resolve('success'); }, 2000);
    // setTiemout(()=> {reject(new Error('fail')); }, 2000);
});

p.then((result)=> {console.log(result)});
// p.catch((error)=> {console.log(error); });



function wait(text, milliseconds){
    const p = new Promise((resolve, reject)=>{
        setTimeout(()=> {resolve(text); }, 2000);
    });
    return p;
}

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> response.text())
.then((result)=> wait(`${result}`,2000))
.then((result)=> {console.log(result); });
