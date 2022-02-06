const images = [
    "seoul.jpg",
    "busan.jpg",
    "paris.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // 요소 새로 생성

bgImage.src=`img/${chosenImage}`;

document.body.appendChild(bgImage);