let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.navbar');
let bod = document.querySelector('.menu-container');

let backBtn = document.getElementById("transparent-button");
let refresh = document.getElementById("refresh");
let intro = document.getElementById("intro");
let lifeCalender = document.getElementById("life-calender");
let plan = document.getElementById("plan");
let summary = document.getElementById("summary");
let changeInfo = document.getElementById("change-info");
let reset = document.getElementById("reset");

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('isactive');
    menu.classList.toggle('active');
});

backBtn.addEventListener('click', function (){
    hamburger.classList.toggle('isactive');
    menu.classList.toggle('active');
});

refresh.addEventListener('click', function () {
    location.reload(true);
});

intro.addEventListener('click', function () {
    const introText = document.querySelector('#intro-text');
    introText.scrollIntoView({ behavior: 'smooth' });
});

lifeCalender.addEventListener('click', function (){
    const calender = document.querySelector('#calender');
    calender.scrollIntoView({ behavior: 'smooth' });
});

plan.addEventListener('click', function () {
    const todo = document.querySelector('#todo');
    todo.scrollIntoView({ behavior: 'smooth' });
});

summary.addEventListener('click', function () {
    const diary = document.querySelector('#diary');
    diary.scrollIntoView({ behavior: 'smooth' });
});

changeInfo.addEventListener('click', function () {
    const settings = document.querySelector('#settings');
    settings.scrollIntoView({ behavior: 'smooth' });
});

reset.addEventListener('click', function () {
    window.localStorage.clear();
    location.reload(true);
})