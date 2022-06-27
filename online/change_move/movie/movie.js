/**
 *  Movie.js
 *  @Date: 2022-04-23
 *  @API: 영화진흥위원회 오픈API
 *  @CallURI: http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json
 *  @CallQueryString: key, targetDt, itemPerPage
 */
import {RequestError as rero} from '../exception/exception.js';
import { DateForMat } from '../date/date.js';
import { ChangeString } from '../change.js';

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

const movieWrap = document.querySelector('.wrap-div');
const changeString = new ChangeString();


const date = new DateForMat();
const dateBox = document.querySelector('#date-choice');
const setDay = ()=>{        
    dateBox.max = date.yesterDay(new Date());
    dateBox.value = date.yesterDay(new Date());
}
setDay();

const getMovieData = async ()=> {
    
    const ldingDiv = document.querySelector('#loading');
    ldingDiv.classList.toggle('active');
    
    const movieQst = {
        'key' : apiKey,        
        'itemPerPage' : 10
    }
    // requestHeader set 2022-04-30 => 20220430
    movieQst.targetDt = dateBox.value.replaceAll('-','');
    
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
            const theadTitle = [`순위`,`영화코드`,`영화명`,`관람객수`,`당일판매액`,`총판매액`];

            const movieTbl = document.createElement('table');
            
            const movieData = dailyBoxOfficeList.map((v,i)=>{
                
                const obj = {};

                obj.rank = v.rank;
                obj.code = v.movieCd;
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
            const searchValue = document.querySelector('#movie-search').value.trim();
                       
            movieData.forEach(v=>{
                const tradd = document.createElement('tr');
                objKeys.forEach((val,idx)=>{
                    const tdadd = document.createElement('td');                    
                    
                    tdadd.textContent = v[val];
                    if(idx > 2) tdadd.textContent = changeString.comma(tdadd.textContent);                        
                    else if(idx === 2) tdadd.innerHTML = overlapWord(searchValue, v[val]);
                    
                    tradd.appendChild(tdadd);
                });
                tbodyadd.appendChild(tradd);
            });
            movieTbl.appendChild(tbodyadd);
            movieTbl.classList.add('tb-wrap');

            // dateDiv set: searchDate
            const searchDiv = document.createElement('div');
            const searchDateText = document.createElement('h2');
            searchDateText.textContent = dateBox.value;
            searchDiv.appendChild(searchDateText);
            searchDiv.appendChild(movieTbl);

            movieWrap.appendChild(searchDiv);
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
