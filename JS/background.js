const imgs = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
];

var bg = document.getElementById("background");

const chooseImg = imgs[Math.floor(Math.random() * imgs.length)];

const bgImg = document.createElement("img");

bgImg.src = `./IMG/${chooseImg}`;

bg.appendChild(bgImg);