const flagBlue = document.querySelector(".flag.flag-blue");
const flagWhite = document.querySelector(".flag.flag-white");

function reset(){
    document.querySelector('.up').classList.remove('up');
}

function flagUp(event){
    if(event.button === 0){ // mouse left button click
        flagBlue.classList.toggle('up');
        console.log("left click");
    }else if(event.button === 2){ // mouse right button click
        flagWhite.classList.toggle('up');
        console.log("right click");
    }

    setTimeout(reset,500);
}

document.addEventListener('contextmenu',function(event){ // contextmenu = browser manger box
    event.preventDefault();
});

document.addEventListener('mousedown',flagUp);