/**
 *  fetch(param): doing function that request, response 
 * 
 *  1. param을 server로 request
 *  2. server로부터 response param을 받음.
 * 
 *  then(): callback을 등록
 */

fetch('https://www.google.com')
    .then((response)=> response.text()) // response parameter는 Object (실제 내용 자체가 넘어오지 않음.)
    .then((result)=> {console.log(result); });
    // response.text 응답값으로 다음 callback()의 parameter인 result로 전달할 수 있음.