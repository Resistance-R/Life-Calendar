function start()
{
    var userName = document.getElementById("name").value;
    var userMM = document.getElementById("MM").value;
    var userDD = document.getElementById("DD").value;
    var userYYYY = document.getElementById("YYYY").value;

    if(userName !== "" && userMM !== "" && userDD !== "" && userYYYY !== "")
    {
        location.replace("../HTML/index.html");
    }

    else
    {
        return;
    }
}

document.getElementById("name").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        start();
    }
}
)

document.getElementById("MM").addEventListener("keydown", function(event)
{
    if (event.key === "Enter")
    {
        start();
    }
}
)

document.getElementById("DD").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        start();
    }
}
)


document.getElementById("YYYY").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        start();
    }
}
)