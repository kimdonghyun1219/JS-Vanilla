/**
 *  Exception.js
 *  @Date: 2022-04-23
 *  @Connect: 
 * 
 */

export class RequestError extends Error{
    constructor(message){
        super(message);
        this.name = 'RequestError';
        this.statusCode = 404;
    }
}



