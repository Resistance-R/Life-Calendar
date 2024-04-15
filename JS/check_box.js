var checkboxGrid = document.getElementById("checkbox-grid");
var weekGrid = document.getElementById("week-grid");
var yearGrid = document.getElementById("year-grid");

for(var i = 1; i <= 50; i++)
{
    var week = document.createElement("span")
    var weekText = document.createTextNode(i);


    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    week.appendChild(weekText)
    
    if(i == 1 || i == 25 || i == 50)
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

for(var i = 0; i < 90; i++)
{
    for(var j = 0; j < 52; j++)
    {
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkboxGrid.appendChild(checkbox);
    }
    var lineBreak = document.createElement("br");
    checkboxGrid.appendChild(lineBreak);
}