import { BadRequestException as badExp} from "./BadRequestException.js";

class RegExp{
    
    /**
    *  value(selector, msg): value exist
    *  @param selector: 선택자
    *  @param msg: error message
    * 
    */
    value(selector, msg) {
      
        const content = document.querySelector(selector).value;

        if(content == undefined || content == null || (typeof content == 'string' &&  content.trim().length === 0)) {
            throw new badExp(msg, selector);
        }

        return true;
    }

    /**
    *  maxLength(selector, len, msg): Max text length
    *  @param selector: 선택자
    *  @param len: length
    *  @param msg: error message
    * 
    */
    maxLength(selector, len, msg) {
        this.value(selector, msg);

        const content = document.querySelector(selector).value;

        if(content.trim().length > len) {
            throw new badExp(msg, selector);
        }
    }

    /**
    *  minLength(selector, len, msg): Min text length
    *  @param selector: 선택자
    *  @param len: length
    *  @param msg: error message
    * 
    */
    minLength(selector, len, msg) {
        this.value(selector, msg);
        
        const content = document.querySelector(selector).value;

        if(content.trim().length < len) {
            throw new badExp(msg, selector);
        }
    }

    /**
    *  compareTo(value, target, msg): compare value with target
    *  @param value: 원본
    *  @param target: 비교대상
    *  @param msg: error message
    * 
    */
    compareTo(value, target, msg) {
        this.value(value, msg);
        this.value(target, msg);

        const origin = document.querySelector(value).value.trim();
        const compare = document.querySelector(target).value.trim();

        if(origin !== compare) {
            throw new badExp(msg, value);
        }

        return true;
    }

    /**
    *  isChecked(selector, msg): radio or checkbox is checked?
    *  @param selector: 선택자    
    *  @param msg: error message
    * 
    */
    isChecked(selector, msg) {
        const content = document.querySelectorAll(selector);
        const checkedItem = Array.from(content)
                                 .filter((v, i) => v.checked);

        if(checkedItem.length === 0) {
            throw new badExp(msg, selector);
        }                                 
    }

    /**
    *  checkedMin(selector, len, msg): Min choice radio or checkbox per
    *  @param selector: 선택자
    *  @param len: length    
    *  @param msg: error message
    * 
    */
    checkedMin(selector, len, msg) {
        const content = document.querySelectorAll(selector);
        const checkedItem = Array.from(content)
                                 .filter((v, i) => v.checked);

        if(checkedItem.length < len) {
            throw new badExp(msg, selector);
        }                                
    }

    /**
    *  checkedMax(selector, len, msg): Max choice radio or checkbox per
    *  @param selector: 선택자
    *  @param len: length    
    *  @param msg: error message
    * 
    */
    checkedMax(selector, len, msg) {
        const content = document.querySelectorAll(selector);
        const checkedItem = Array.from(content)
                                 .filter((v, i) => v.checked);

        if(checkedItem.length > len) {
            throw new badExp(msg, selector);
        }                                
    }

    /**
    *  satisfyRegExp(selector, msg, regExp): input value is regExp satisfy
    *  @param selector: 선택자
    *  @param msg: error message
    *  @param regExp: 정규표현식
    * 
    */
    satisfyRegExp(selector, msg, regExp) {
        this.value(selector, msg);

        const content = document.querySelector(selector).value;
        const value = content.trim();

        if(!regExp.test(value)) {
            throw new badExp(msg, selector);
        }

        return true;
    }

    /**
    *  fieldNum(selector, msg): input value is only number
    *  @param selector: 선택자
    *  @param msg: error message    
    * 
    */
    fieldNum(selector, msg) {
        return this.satisfyRegExp(selector, msg, /^[0-9]*$/);
    }

    /**
    *  fieldEng(selector, msg): input value is only english
    *  @param selector: 선택자
    *  @param msg: error message    
    * 
    */
    fieldEng(selector, msg) {
        return this.satisfyRegExp(selector, msg, /^[a-zA-Z]*$/);
    }

    /**
    *  fieldKor(selector, msg): input value is only korean
    *  @param selector: 선택자
    *  @param msg: error message    
    * 
    */
    fieldKor(selector, msg) {
        return this.satisfyRegExp(selector, msg, /^[ㄱ-ㅎ가-힣]*$/);
    }

    /**
    *  fieldEngNum(selector, msg): input value contain english or number
    *  @param selector: 선택자
    *  @param msg: error message    
    * 
    */
    fieldEngNum(selector, msg) {
        return this.satisfyRegExp(selector, msg, /^[a-zA-Z0-9]*$/);
    }

    /**
    *  fieldKorNum(selector, msg): input value contain Korean or number
    *  @param selector: 선택자
    *  @param msg: error message    
    * 
    */
    fieldKorNum(selector, msg) {
        return this.satisfyRegExp(selector, msg, /^[ㄱ-ㅎ가-힣0-9]*$/);
    }

    /**
    *  fieldEmail(selector, msg): input value satisfy the email form
    *  @param selector: 선택자
    *  @param msg: error message    
    * 
    */
    fieldEmail(selector, msg) {
        return this.satisfyRegExp(selector, msg, /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[az]{2})?)$/i);
    }

    /**
    *  fieldTel(selector, msg): input value satisfy the cell-phone form
    *  @param selector: 선택자
    *  @param msg: error message    
    * 
    */
    fieldTel(selector, msg) {
        return this.satisfyRegExp(selector, msg, /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/);
    }   

}
export const RegExp = RegExp;