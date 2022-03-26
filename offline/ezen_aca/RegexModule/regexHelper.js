// import { badRequestException as bad} from "./badRequestException.js";
const bad = require('./badRequestException');

class RegExHelper {

    kor(input, msg){
        const kpattern = /^[ㄱ-ㅎ가-힣]*$/;

        if(!kpattern.test(input)){
            throw new bad(msg);
        }
    }

    num(input, msg){
        const npattern = /^[0-9]*$/;

        if(!npattern.test(input)){
            throw new bad(msg);
        }
    }

    engNum(input, msg){
        const enpattern = /^[a-zA-Z0-9]*$/;

        if(!enpattern.test(input)){
            throw new bad(msg);
        }
    }

    maxLen(input, len, msg){
        if(input.length > len){
            throw new bad(msg);
        }
    }
}

// export const regExpTest = RegExHelper;
module.exports = RegExHelper;