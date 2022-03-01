/**
 *   <form/> used Type
 * 
 *   1. application/x-www-form-urlencoded Type: form Tag Default
 *   2. multipart/form-data
 * 
 */


/**  application/x-www-form-urlencoded Type => name=value&name=value... */
const urlencoded = new URLSearchParams();
urlencoded.append('email','tonny@naver.com');
urlencoded.append('password','tonny123');
urlencoded.append('id','tonny');

fetch('https://learn.codeit.kr/api/members', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: urlencoded,
})
.then((response)=> response.text())
.then((result)=> {
    console.log(result);
});


/** multipart/form-data: 여러 종류의 데이터를 하나로 합친 데이터 */
const formData = new FormData();
formData.append('email','tonny@naver.com');
formData.append('password','tonny123');
formData.append('id','tonny');
formData.append('profile', image.files[0],'.jpg');

fetch('https://learn.codeit.kr/api/members', {
    method: 'POST',
    body: formData,
})
.then((response)=> response.text())
.then((result)=> {console.log(result); });

