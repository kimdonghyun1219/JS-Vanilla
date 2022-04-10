const KAKAO_REST_API_KEY = `donghyunisVeryGood`;

/**
 *  field
 *  @currentPage: 페이지 번호
 *  @Keyword: 검색어
 *  @isEnd: 마지막 페이지 여부
 * 
 */
let currentPage = 1;
let keyword = null;
let isEnd = false;

/* search button click */
document.querySelector('#searchForm').addEventListener('submit', e=> {    
    e.preventDefault();
    
    const search = document.querySelector('#search-field');
    keyword = search.value.trim();

    if(!keyword){
        alert("검색어를 입력하세요");
        search.focus();
        return;
    }    

    // 새로 검색
    currentPage = 1;
    getImageSearch();
});

/* scroll search */
window.addEventListener('scroll', e=>{

    if(isEnd || document.querySelector('#loading').classList.contains('active')){
        return;
    }

    const scrollPosition = window.scrollY;
    const windowHeight = window.screen.availHeight;
    const documentHeight = document.body.scrollHeight;

    if(scrollPosition + windowHeight >= documentHeight) {
        currentPage++;
        getImageSearch();
    }   
});


/* 검색한 이미지 가져오기 */
function getImageSearch(){

    const loading = document.querySelector('#loading');    

    loading.classList.add('activce');

    const list = document.querySelector('#list');

    if(currentPage == 1){
        Array.from(list.querySelectorAll('li')).forEach((v,i)=>{
            list.removeChild(v);
        });
    }    
    getImage(keyword, currentPage);
}

async function getImage(word, currentPage) {
    try{
        const searchData = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': `KakaoAK ${KAKAO_REST_API_KEY}`                
            }            
        }

        const params = {
            'query': word,
            'page': currentPage
        }

        const query = Object.keys(params)
                        .map(v => `${encodeURIComponent(v)}=${encodeURIComponent(params[v])}`)
                        .join('&');

        const res = await fetch(`https://dapi.kakao.com/v2/search/image?${query}`, searchData);      
        const result = await res.json();

        if(result){
            const {documents } = result;
            
            isEnd = result.meta.is_end;            
    
            documents.map((v,i)=>{
    
                const li = document.createElement('li');
                const aTag = document.createElement('a');
    
                aTag.setAttribute('href', v.doc_url);
                aTag.setAttribute('target','_blank');
                aTag.setAttribute('title', v.display_sitename);
    
                const img = document.createElement('img');
                img.setAttribute('src', v.image_url);
    
                const div = document.createElement('div');
                div.textContent = v.display_sitename;
    
                aTag.appendChild(img);
                aTag.appendChild(div);
    
                li.appendChild(aTag);
                list.appendChild(li);
            });
        } 

    }catch(e){
        console.log(e.message);
    }finally {
        loading.classList.remove('active');
    }
}

