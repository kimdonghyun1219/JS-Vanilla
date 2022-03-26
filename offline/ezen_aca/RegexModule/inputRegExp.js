// import { regExpTest as regTest } from "./regexHelper.js";
const regTest = require('./regexHelper');

const username = `김동현`;
const age = `28`;
const userid = `donghyun1219`;

const regex = new regTest();

try{

    regex.kor(username, `이름은 한글로만 입력하세요.`);
    regex.num(age, `나이는 숫자만 입력해주세요.`);
    regex.engNum(userid, `아이디는 영어와 숫자 조합만 가능합니다.`);
    regex.maxLen(userid, 15, `아이디는 최대 15글자만 입력 가능합니다.`);

} catch(error){
    console.error(`error : ${error.statusCode}`);
} finally{
    console.log(`검사가 완료되었습니다.`);
}
