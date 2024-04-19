class Diary{
    constructor(diary){
        this.diaryTexts = diary
        this.curDate = new Date().toLocaleDateString("ko-KR", { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    }
}

var diaryText = document.getElementById("diary-input");

const DIARY_KEY = "diary"
const savedDairy = localStorage.getItem(DIARY_KEY);

let diarys = []

document.addEventListener("DOMContentLoaded", function () {
    if (savedDairy !== null) {
        const parsedDiary = JSON.parse(savedDairy);
        diarys = parsedDiary;
        ShowDiary();
    }
});

function submit()
{
    if(diaryText.value !== "")
    {
        AddDiary();
    }

    else
    {
        alert("내용을 입력하십시오.");
        return;
    }
}

function AddDiary()
{
    var newDiary = new Diary(diaryText.value);

    diarys.push(newDiary);

    SaveDairy();
    ShowDiary();

    diaryText.value = ""
}

function SaveDairy()
{
    localStorage.setItem(DIARY_KEY, JSON.stringify(diarys));
}

function ShowDiary()
{
    let diary = document.getElementById("diary");

    diary.innerHTML = "";

    diarys.forEach(dia => {
        let spanItem = document.createElement("span");
        let divItem = document.createElement("div");

        spanItem.innerText = `${dia.diaryTexts} - <${dia.curDate}>`;

        divItem.appendChild(spanItem);

        diary.appendChild(divItem);
    })
}