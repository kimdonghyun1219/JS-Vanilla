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
const apiKey = `donghyunisverygood`;

const movieQst = {
    'key' : apiKey,
    'targetDt' : '20220422',
    'itemPerPage' : 10
}

const movieTbl = document.querySelector('.wrap-div .tb-wrap');

const getMovieData = async ()=> {

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
            const theadTitle = [`영화코드`,`순위`,`영화명`,`관람객수`,`당일판매액`,`총판매액`];
            
            const movieData = dailyBoxOfficeList.map((v,i)=>{
                
                const obj = {};

                obj.code = v.movieCd;
                obj.rank = v.rank;
                obj.name = v.movieNm;
                obj.audienceCount = v.audiCnt;
                obj.salesAmout = v.salesAmt;
                obj.salesTotal = v.salesAcc;

                return obj;
            });
            console.log(movieData);

            const theadadd = document.createElement('thead');
            const tbodyadd = document.createElement('tbody');
            
            theadTitle.forEach(v=>{
                const thadd = document.createElement('th');            
                thadd.textContent = v;
                theadadd.appendChild(thadd);
            });
            movieTbl.appendChild(theadadd);
            
            // Get object keys array
            const firstObj = movieData[0];
            const objKeys = Object.keys(firstObj);           
                       
            movieData.forEach(v=>{
                const tradd = document.createElement('tr');
                objKeys.forEach(val=>{
                    const tdadd = document.createElement('td');
                    tdadd.textContent = v[val];
                    const searchValue = document.querySelector('#movie-search').value;
                    tdadd.innerHTML = overlapWord(searchValue, v[val]);
                    tradd.appendChild(tdadd);
                });
                tbodyadd.appendChild(tradd);
            });
            movieTbl.appendChild(tbodyadd);            
        }

    }catch(error){
        console.log(error.message);
    }finally{
        ldingDiv.classList.toggle('active');
    }
}

const searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener('click', ()=>{
    getMovieData();
});

const searchInput = document.querySelector('#movie-search');
searchInput.addEventListener('keydown', e=>{
    if(e.keyCode === 13){
        searchBtn.click();
    }
});

function overlapWord(searchWord, value){
    const regExp = new RegExp(searchWord,'g');
    return value.replace(regExp, `<span class='highlight'> ${searchWord} </span>`);
}