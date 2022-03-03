/** 
 *   Slider 
 * 
 */

function setSliderImg(){
    const sliderItem = document.querySelectorAll('#slider-box .slider-item');
    const imgArr = ['slider1.jpg','slider2.jpg','slider3.jpg','slider4.jpg','slider5.jpg'];
    
    imgArr.forEach((val, idx)=> {
        
        let imgTag = document.createElement('img');
        imgTag.src = `imgs/${val}`;        

        sliderItem.item(idx).append(imgTag);        
    });
}

setSliderImg();