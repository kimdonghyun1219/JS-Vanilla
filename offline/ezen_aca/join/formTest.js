import {regExp} from "../libs/RegExp.js";

/** form Test */
document.querySelector('#member-form').addEventListener('submit', (e)=>{   
    e.preventDefault();
    
    try{
        // id
        const idSelector = `#member_id`;
        regExp.value(idSelector,`아이디를 입력해주세요.`);
        regExp.minLength(idSelector, 6, `아이디는 최소 6자 이상 입력해주세요.`);
        regExp.maxLength(idSelector, 15, `아이디는 최대 15자 까지 입력 가능합니다.`);
        regExp.fieldEngNum(idSelector, `아이디는 영어와 숫자 조합만 입력 가능합니다.`);

        // pwd
        const pwdSelector = `#member_pwd`;
        regExp.value(pwdSelector, `비밀번호를 입력해주세요.`);
        regExp.minLength(pwdSelector, 7, `비밀번호는 최소 7자리 이상 입력해주세요.`);        
        regExp.maxLength(pwdSelector, 16, `비밀번호는 최대 16자리 까지만 입력 가능합니다.`);
        regExp.compareTo(pwdSelector, `#member_pwd_rep`, `비밀번호가 일치하지 않습니다.`);

        // name
        const nameSelector = `#member_name`;
        regExp.value(nameSelector, `이름을 입력해주세요.`);
        regExp.minLength(nameSelector, 2, `이름은 최소 2자 이상 입력해주세요.`);
        regExp.maxLength(nameSelector, 30, `이름은 최대 30자 까지 입력 가능합니다.`);
        regExp.fieldKor(nameSelector, `이름은 한글만 입력 가능합니다.`);

        // email
        const emailSelector = `#member_email`;
        regExp.value(emailSelector, `이메일을 입력해주세요.`);
        regExp.fieldEmail(emailSelector, `이메일 형식이 잘못되었습니다.`);

        // tel
        const telSelector = `#member_tel`;
        regExp.value(telSelector, `연락처를 입력해주세요.`);
        regExp.filedTel(telSelector, `연락처 형식이 잘못되었습니다.`);       
        
        // gender
        regExp.isChecked(`input[name=gender]`, `성별을 선택해주세요.`);
        
        // root
        const rootSelector = `input[name=root]`;
        regExp.isChecked(rootSelector, `경로를 선택해주세요.`);
        regExp.checkedMax(rootSelector, 2, `경로는 최대 2개만 선택할 수 있습니다.`);

    } catch (error){
        document.querySelector(error.selector).focus();
        return;
    }
    
});