document.addEventListener("DOMContentLoaded", function () {
    FadeInOut();
});

function FadeInOut() {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting)
            {
                entry.target.style.opacity = 1;
            }
            
            else
            {
                entry.target.style.opacity = 0;
            }
        });
    });

    
    let dateInfo = document.getElementById("date-info");
    let daysText = document.getElementById("days-text");
    let nextWeek = document.getElementById("next-week");
    let nextBirthday = document.getElementById("next-birthday");
    let quotes = document.getElementById("quotes");
    let calender = document.getElementById("calender");
    let plusBtn = document.getElementById("plus-btn");
    let outerPastTodo = document.getElementById("outer-past-todo");
    let outerNowTodo = document.getElementById("outer-now-todo");
    let outerDiary = document.getElementById("outer-diary");
    let diaryInputs = document.getElementById("bunch-of-diary-input");
    let todoWindow = document.getElementById("enter-todo-window");
    let settings = document.getElementById("settings");

    observer.observe(dateInfo);
    observer.observe(daysText);
    observer.observe(nextBirthday);
    observer.observe(nextWeek);
    observer.observe(quotes);
    observer.observe(calender);
    observer.observe(outerPastTodo);
    observer.observe(outerNowTodo);
    observer.observe(plusBtn);
    observer.observe(todoWindow)
    observer.observe(outerDiary);
    observer.observe(diaryInputs);
    observer.observe(settings);
}