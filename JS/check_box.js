var checkboxGrid = document.getElementById("checkbox-grid");

for(var i = 0; i < 90; i++)
{
    for(var j = 0; j < 52; j++)
    {
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkboxGrid.appendChild(checkbox);
    }
    var lineBreak = document.createElement("br");
    checkboxGrid.appendChild(lineBreak)
}