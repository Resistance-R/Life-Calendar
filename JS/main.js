document.addEventListener("DOMContentLoaded", function () {
    var userName = localStorage.getItem("user_name");
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();
    
    document.getElementById("greet").innerText = `안녕하세요, ${userName}님!`;
    document.getElementById("now-date").innerText = `오늘은 ${year}년 ${month}월 ${date}일,`

    DayInfo();

    document.getElementById("left-days-text").innerHTML = `만약 90세까지 산다고 가정할 때, <br/>${userName}께서는`
    Dday();
});

function Dday() {
    var userBirthdayStr = localStorage.getItem("user_birthday");
    var userBirthdayParts = userBirthdayStr.split("/");
    var userBirthday = new Date(userBirthdayParts[2], userBirthdayParts[0] - 1, userBirthdayParts[1]);

    var currentDate = new Date();
    var timeDiff = Math.abs(currentDate.getTime() - userBirthday.getTime());

    var weeksAlive = Math.ceil(timeDiff / (1000 * 3600 * 24 * 7));
    var leftWeeks = 4680 - weeksAlive;

    if (leftWeeks * 7 > 0) {
        document.getElementById("left-days").innerHTML = `<h1>${leftWeeks}주</h1><h2>즉, ${leftWeeks * 7}일 남았습니다.</h2>`
    }

    else if (leftWeeks * 7 <= 0) {
        document.getElementById("left-days").innerHTML = `사망보다 ${-leftWeeks}주 <br/>즉, ${-leftWeeks * 7}일 더 살았습니다.`
        document.getElementById("celebration").innerText = "축하합니다!"
    }

    SetCheckboxes();
}

function SetCheckboxes()
{
    var checkboxGrid = document.getElementById("checkbox-grid");
    var weekGrid = document.getElementById("week-grid");
    var yearGrid = document.getElementById("year-grid");

    var userBirthdayStr = localStorage.getItem("user_birthday");
    var userBirthdayParts = userBirthdayStr.split("/");
    var userBirthday = new Date(userBirthdayParts[2], userBirthdayParts[0] - 1, userBirthdayParts[1]);

    var currentDate = new Date();
    var timeDiff = Math.abs(currentDate.getTime() - userBirthday.getTime());

    var weeksAlive = Math.ceil(timeDiff / (1000 * 3600 * 24 * 7));

    for(var i = 1; i <= 50; i++)
    {
        var week = document.createElement("span")
        var weekText = document.createTextNode(i);
    
    
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
    
        week.appendChild(weekText)
        
        if(i == 1 || i == 50)
        {
            weekGrid.appendChild(week);
        }
    
        else
        {
            weekGrid.appendChild(checkbox);
        }
    }
    
    for(i = 0; i < 91; i++)
    {
        var year = document.createElement("span");
        var yearText = document.createTextNode(i);
    
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        var checkboxLimit = 1;
    
        year.appendChild(yearText);
    
        if(i % 5 == 0)
        {
            yearGrid.appendChild(year);
        }
    
        else
        {
            yearGrid.appendChild(checkbox);
        }
    
        var lineBreak = document.createElement("br");
        yearGrid.appendChild(lineBreak);
    }
    
    // for(var i = 0; i < 90; i++)
    // {
    //     for(var j = 0; j < 52; j++)
    //     {
    //         if(weeksAlive >= checkboxLimit)
    //         {
    //             var checkbox = document.createElement("input");
    //             checkbox.type = "checkbox";
    //             checkboxGrid.appendChild(checkbox);
    //             checkbox.checked = true; 
    //             checkboxLimit++
    //         }

    //         else
    //         {
    //             var checkbox = document.createElement("input");
    //             checkbox.type = "checkbox";
    //             checkboxGrid.appendChild(checkbox);
    //         }
            
    //     }
    //     var lineBreak = document.createElement("br");
    //     checkboxGrid.appendChild(lineBreak);
    // }

    for (var i = 0; i < 90; i++)
    {
        for (var j = 0; j < 52; j++)
        {
            if (weeksAlive >= checkboxLimit)
            {
                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = true;
                checkboxLimit++;

                var label = document.createElement('label');
                label.setAttribute('for', checkbox.id);

                var checkmark = document.createElement('span');
                checkmark.classList.add('checkmark');
                label.appendChild(checkmark);

                checkboxGrid.appendChild(checkbox);
                checkboxGrid.appendChild(label);
            }
            
            else
            {
                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';

                var label = document.createElement('label');
                label.setAttribute('for', checkbox.id);

                var checkmark = document.createElement('span');
                checkmark.classList.add('checkmark');
                label.appendChild(checkmark);

                checkboxGrid.appendChild(checkbox);
                checkboxGrid.appendChild(label);
            }
        }
        var lineBreak = document.createElement('br');
        checkboxGrid.appendChild(lineBreak);
    }
}

function DayInfo()
{
    var today = new Date();
    var day = today.getDay();

    switch(day)
    {
        case 0:
            document.getElementById("now-day").innerText = "마지막 주말! 후회없는 일요일 되세요!"
            break;
        case 1:
            document.getElementById("now-day").innerText = "일하는 날... 그래도 힘내세요! 희망찬 월요일 되세요!"
            break;
        case 2:
            document.getElementById("now-day").innerText = "이 또한 지나가겠죠. 화요일 입니다!"
            break;
        case 3:
            document.getElementById("now-day").innerText = "수요일! 절반 왔어요!"
            break;
        case 4:
            document.getElementById("now-day").innerText = "목요일 입니다. 조그만 더 힘 내세요!"
            break;
        case 5:
            document.getElementById("now-day").innerText = "드디어 금요일! 주말동안 무엇을 하실건가요?"
            break;
        case 6:
            document.getElementById("now-day").innerText = "빼먹은 일은 혹시 없을까요? 토요일 입니다!"
            break;
    }
    
    return;
}