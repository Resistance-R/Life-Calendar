function start()
{
    var userName = document.getElementById("name").value;
    var userMM = document.getElementById("MM").value;
    var userDD = document.getElementById("DD").value;
    var userYYYY = document.getElementById("YYYY").value;

    if ((userMM <= 0 || userMM > 12) || (userDD <= 0 || userDD > 31))
    {
        alert("유요한 날짜를 입력하십시오.")
        return;
    }

    if(userName !== "" && userMM !== "" && userDD !== "" && userYYYY !== "")
    {
        localStorage.setItem("user_name", userName);
        localStorage.setItem("user_birthday", userMM + "/" + userDD + "/" + userYYYY);
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