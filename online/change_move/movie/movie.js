/**
 *  Movie.js
 *  @Date: 2022-04-23
 *  @API: 영화진흥위원회 오픈API
 *  @CallURI: http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json
 *  @CallQueryString: key, targetDt, itemPerPage
 */
import {RequestError as rero} from '../exception/exception.js';

/*
    @Request
    key: api key (necessary)
    targetDt: get Date-yyyymmdd (necessary)
    itemPerPage: result rows   

    @Response
    showRange: view date
    dailyBoxOfficeList: [
        movieCd: movie rep code
        movieNm: movie name
        rank: this day rank
        audiCnt: this day audience count
        salesAmt: this day total sale
        salesAcc: total accumulate sale amout
    ]
*/

const movieURI = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json`;
const apiKey = `ae49916cca62e1d967e50e8bbfac3861`;

const movieQst = {
    'key' : apiKey,
    'targetDt' : '20220422',
    'itemPerPage' : 10
}

async function getMovieData(){

    const ldingDiv = document.querySelector('#loading');
    ldingDiv.classList.toggle('active');

    try{

        const query = Object.keys(movieQst)
                            .map(v=> `${encodeURIComponent(v)}=${encodeURIComponent(movieQst[v])}`)
                            .join(`&`);

        const res = await fetch(`${movieURI}?${query}`);
        const result = await res.json();


        if(result){
            const {boxOfficeResult} = result;
            const {dailyBoxOfficeList} = boxOfficeResult;

            const showRangeDate = boxOfficeResult.showRange;
            
            const movieData = dailyBoxOfficeList.map((v,i)=>{
                
                const obj = {};

                obj.code = v.movieCd;
                obj.name = v.movieNm;
                obj.rank = v.rank;
                obj.audienceCount = v.audiCnt;
                obj.salesAmout = v.salesAmt;
                obj.salesTotal = v.salesAcc;

                return obj;
            });

            const viewDiv = document.querySelector('.view-div');
            const cUl = document.createElement('ul');            
            
            movieData.forEach(v=>{
                const cli = document.createElement('li');                      
                
                const item = `
                    코드 : ${v.code} <br>
                    영화명 : ${v.name} <br>
                    영화순위 : ${v.rank} <br>
                    해당요일 관람객 수 : ${v.audienceCount} <br>
                    해당요일 판매액 : ${v.salesAmout} <br>
                    총 판매액 : ${v.salesTotal} <br>
                `;
                
                cli.innerHTML = item;
                cli.classList.add('view', 'li-remove');
                
                cUl.appendChild(cli);
            });
            viewDiv.appendChild(cUl);
        }

    }catch(error){
        console.log(error.message);
    }finally{
        ldingDiv.classList.toggle('active');
    }
}

const mvGetDataBtn = document.querySelector('#mv-get-btn');

mvGetDataBtn.addEventListener('click', ()=>{
    getMovieData();
});



