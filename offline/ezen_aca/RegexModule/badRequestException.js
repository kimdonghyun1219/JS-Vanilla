/** 
 * 
 *  HTTP Status Code  
 * 
 */

class BadRequestException extends Error{
    constructor(msg = `잘못된 요청`){
        super(msg);
        super.name = `BadReqeustException`;

        this._statusCode = 400;
    }

    get statusCode(){
        return this._statusCode;
    }
}

// export const badRequestException = BadRequestException;
module.exports = BadRequestException;