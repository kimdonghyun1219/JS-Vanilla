/**  */
fetch('https://jsonplaceholder.typicode.com/users')
.then((Response) => Response.text())  // Response.json() => json으로 응답받는 경우 사용.-> JSON.parse() 사용 안해도 됨.
.then((result)=> { 
    const users = JSON.parse(result); 
    console.log(users.length);
    users.forEach((user)=>{
        console.log(user.name);
    });
});

 /**
  *  조회: GET Request
  *  추가: POST Request
  *  수정: PUT Request
  *  삭제: DELETE Request
  * 
  *  Request에는 Head, Body로 구성됨.
  *  Head: Request에 대한 부가정보
  *  Body: 실제 데이터를 담는 부분
  * 
  *  POST,PUT => Body에 데이터를 담아 보냄.
  *  GET, DELETE => 보통 Body 필요없음. 
  * 
  *  Header: method, path, user-agent... 
  *     - method: get, post, put, delete
  *     - path: / ~~
  *     - user-agent: request를 보낸 브라우저와 운영체제 정보
  * 
  *  Response
  *  Head: Status Code (1xx, 2xx, 3xx, 4xx, 5xx)
  *  Body: 실제 데이터를 담는 부분 (json, ..)
  * 
  */
 
  // GET
  fetch('https://learn.codeit.kr/api/members/3')
  .then((Response) => Response.text())
  .then((result)=> {        
      console.log(result);  
  });


  // POST
  const newMember = {
      name: 'Jerry',
      email: 'jerry@Codeitmail.kr',
      department: 'engineering',
  };

  /** fetch()의 2번째 parameter에 옵션객체를 전달 */
  fetch('https://learn.codeit.kr/api/members', {
      method: 'POST',
      body: JSON.stringify(newMember),
  })
  .then((Response) => Response.text())
  .then((result)=> {       
      console.log(result);  
  });


  // PUT
  const member = {
      name: 'Alice',
      email: 'alice@codeitmail.kr',
      department: 'marketing',
  }

  /** fetch()의 2번째 parameter에 옵션객체를 전달 */
  fetch('https://learn.codeit.kr/api/members/2', {
      method: 'PUT',
      body: JSON.stringify(member),
  })
  .then((Response) => Response.text())
  .then((result)=> {       
      console.log(result);  
  });  


   // DELETE
   const member = {
        name: 'Alice',
        email: 'alice@codeitmail.kr',
        department: 'marketing',
    }

    /** fetch()의 2번째 parameter에 옵션객체를 전달 */
    fetch('https://learn.codeit.kr/api/members/2', {
        method: 'DELETE',        
    })
    .then((Response) => Response.text())
    .then((result)=> {     
        console.log(result);  
    });  



    