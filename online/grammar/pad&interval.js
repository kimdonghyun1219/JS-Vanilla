const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    // date.get() => Number 이기 때문에 padStart를 사용할 수 없다. (String)만 가능하기 때문에 앞에 형변환.
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock,1000);

// "String".padStart(maxLength, "fillString");
// "3".padStart(3,"0"); => 003  3자리까지 표출되고 앞에 남는 자리는 0 으로 채우겠다.
// "3".padEnd(3,"x"); => 3xx  3자리까지 표출되고 뒤에 남는 자리는 x으로 채우겠다.
// "good".padStart(10,"s"); => ssssssgood
// "good".padStart(11,"s2"); => s2s2s2sgood  11자리까지 표출되니까 s2에서 good바로앞은 s까지만 나왔다. 2까지 출력하면 11자리를 초과하기 때문.