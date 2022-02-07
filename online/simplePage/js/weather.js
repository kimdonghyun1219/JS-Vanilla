/** bring it the user geolocation  */

function onGeoOk(){

}

function onGeoError(){
    alert("Can't find you. No weather for you");
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);