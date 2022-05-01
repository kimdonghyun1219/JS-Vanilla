/**
 *  Change.js
 *  @Date: 22-04-23
 *  @connect: change.html, change.css 
 * 
 */

export class ChangeString{

    comma(numbers){
        return `${numbers}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

}