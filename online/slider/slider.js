/** 
 *   Slider 
 * 
 */
// const sliderCon = document.querySelector('#slider-container');
const sliderWrap = document.querySelector('#slider-wrap');
const sliderBox = document.querySelector('#slider-box');
const sliderBtn = document.querySelectorAll('.slider-btn');
const sliderMoveTime = 300;
const sliderWidth = 200;


function setSliderImg(){

    let startPageNum = 0;
    let slideIdx = startPageNum;

    const sliderItem = document.querySelectorAll('#slider-box .slider-item');
    const imgArr = ['slider1.jpg','slider2.jpg','slider3.jpg','slider4.jpg','slider5.jpg'];
    
    imgArr.forEach((val, idx)=> {                
        sliderItem.item(idx).style.backgroundImage = `url(imgs/${val})`;
    });

    const firstSliderContent = sliderBox.firstElementChild;
    const lastSliderContent = sliderBox.lastElementChild;
    const firstCopy = firstSliderContent.cloneNode(true);
    const lastCopy = lastSliderContent.cloneNode(true);

    sliderBox.appendChild(firstCopy); // 맨 뒤에 노드 추가
    sliderBox.insertBefore(lastCopy, sliderBox.firstChild); // 맨 앞에 노드 추가

    sliderBox.style.transform = `translate(-${sliderWidth * (startPageNum +1)}px, 0px)`;
    

    sliderBtn.forEach((val,idx)=>{
    
        if(val.classList.contains('left-btn')){
            
            val.addEventListener('click',function(event){
                
                setTimeout(()=>{},1000);

                if(slideIdx >= startPageNum){
                    
                    sliderBox.style.transition = `${sliderMoveTime}ms`;
                    sliderBox.style.transform = `translate(-${sliderWidth * slideIdx}px, 0px)`;
                                              
                }

                if(slideIdx === startPageNum){

                    setTimeout(()=> {
                        sliderBox.style.transition = '0ms';
                        sliderBox.style.transform = `translate(-${sliderWidth * sliderItem.length}px, 0px)`;
                    }, sliderMoveTime);

                    slideIdx = imgArr.length;
                    
                }
                --slideIdx;
            });
    
            
        } else if(val.classList.contains('right-btn')){
            
            val.addEventListener('click',function(event){ 
                   
               
               if(slideIdx < imgArr.length){

                   sliderBox.style.transition = `${sliderMoveTime}ms`;
                   sliderBox.style.transform = `translate(-${sliderWidth * (slideIdx +2)}px, 0px)`; // 처음 로드시 1번 앞에 마지막 것이 있기 때문에 slideIdx+2                
                   ++slideIdx;                   
                   
               }
               
               /** 슬라이더가 첫번째로 돌아왔을 때 처음으로 위치 초기화 */
               if(slideIdx === imgArr.length){

                    setTimeout(()=>{
                        sliderBox.style.transition = '0ms';
                        sliderBox.style.transform = `translate(-${sliderWidth}px, 0px)`;
                    }, sliderMoveTime);
                    slideIdx = 0;
               }
               
            });
        }
    
    });
}

setSliderImg();







