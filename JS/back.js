document.addEventListener("DOMContentLoaded", function () {
    var storedUserName = localStorage.getItem("user_name");
    var storedUserBirthday = localStorage.getItem("user_birthday");

    if (storedUserName == null || storedUserBirthday == null) {
        location.replace("../HTML/index.html");
    }
});