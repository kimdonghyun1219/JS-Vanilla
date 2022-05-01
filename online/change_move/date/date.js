/**
 *  Date Class
 *  @Date: 2022-04-29
 *  @Using: format Date
 * 
 */

export class DateForMat {
    
    today(date, delimiter = '-'){
        const year = date.getFullYear();
        let month = date.getMonth() +1;
        let day = date.getDate();

        month = month >= 10 ? month : `0${month}`;
        day = day >= 10 ? day : `0${day}`;

        return [year, month, day].join(delimiter);

    }

    yesterDay(date, delimiter = '-'){
        const yesterDate = date.getTime() - (1000 * 60 * 60 * 24 * 1);
        date.setTime(yesterDate);

        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();        

        month = month >= 10 ? month : `0${month}`;
        day = day >=10 ? day : `0${day}`;

        return [year, month, day].join(delimiter);
    }

}
