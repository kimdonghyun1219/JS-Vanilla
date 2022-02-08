/** bring it the user geolocation  */

const API_KEY; // = "https://home.openweathermap.org/api_keys";


function onGeoOk(position){
    const lat = position.coords.latitude;        
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            
            const name = data.name;

            city.innerText = name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); 
    /**
     *  fetch(): promise -> server가 응답할 때까지 시간소요. (즉시 발생하지 않음.)
     *  then()을 사용
     *  => URL을 fetch한 다음 response를 받음.
     */
}

function onGeoError(){
    alert("Can't find you. No weather for you");
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);