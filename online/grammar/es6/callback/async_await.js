// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=> response.text()) 
// .then((result)=> { console.log(result); });



/**
 *   await: 뒤에 있는 코드를 실행하고 그것이 리턴하는 promise객체가 fulfilled가 될때까지 기다린 후 fulfilled가 되면 작업 성공 결과를 리턴.
 *      -> async() 내부에서만 사용가능
 * 
 *   *** 메소드를 호출하는 곳 밖에 코드를 실행한 후 실행되는 코드가 있다는 뜻.
 * 
 *   async: promise 객체 리턴.
 */
async function fetchAndPrint(){
    console.log('result before');
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.text();
    console.log('result after');
    console.log(result);
}

fetchAndPrint();
console.log('fetchAndPrint after1');
console.log('fetchAndPrint after2');
console.log('fetchAndPrint after3');
console.log('fetchAndPrint after4');
console.log('fetchAndPrint after5');



/** rejected 처리 */
async function fetchAndPrint(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.text();
        console.log(result);
    }catch(error){
        console.log(error);
    }finally{
        console.log('exit');
    }
}
fetchAndPrint();


/** 특정 정보 제외하고 출력 */
const applyPrivacyRule = async function (users){ // 함수 표현식인 경우 function 앞에 async
    const resultWithRuleApplied = users.map((user)=>{
        const keys = Object.keys(user);
        const userWithoutPrivateInfo = {};
        keys.forEach((key)=>{
            if(key !== 'address' && key !== 'phone'){
                userWithoutPrivateInfo[key] = user[key];
            }
        });
        return userWithoutPrivateInfo;
    });

    const p = new Promise((resolve, reject)=> {
        setTimeout(()=> {resolve(resultWithRuleApplied); }, 2000); // 2초후에 fulfilled 상태가 되면서 address, phone가 제거된 배열결과를 작업성공 결과로 갖게됨.
    });
    return p;
};

async function getUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.text();
        const users = JSON.parse(result);
        const resultWithPrivacyRuleApplied = await applyPrivacyRule(users);
        return resultWithPrivacyRuleApplied; // address, phone이 제거된 사용자 정보배열을 작업 성공결과로 가진 promise객체를 리턴.
    }catch(error){
        console.log(error);
    }finally{
        console.log('finally');
    }
}
getUsers().then((result)=> {console.log(result); });
