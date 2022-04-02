class BadRequestException extends Error {
    constructor(msg= `잘못된 요청입니다.`, selector= null){
        super(msg);

        this._statusCode = 400;
        this._selector = selector;
    }

    get statusCode(){
        return this._statusCode;
    }

    get selector(){
        return this._selector;
    }
}

export const BadRequestException = BadRequestException;