class Todo {
    constructor(text, MM, DD, YYYY) {
        this.todo = text;
        this.deadline = `${YYYY}${MM < 10 ? '0' : ''}${MM}${DD < 10 ? '0' : ''}${DD}`;
        this.deadlineDate = new Date(YYYY, MM - 1, DD).toLocaleDateString("ko-KR", { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    }
}

let inputBox = document.getElementById("enter-todo-text");
let MMBox = document.getElementById("todo-MM");
let DDBox = document.getElementById("todo-DD");
let YYYYBox = document.getElementById("todo-YYYY");

const TODOS_KEY = "todos";

let todos = [];

const savedTodos = localStorage.getItem(TODOS_KEY);

document.addEventListener("DOMContentLoaded", function () {
    if (savedTodos !== null)
    {
        const parsedTodo = JSON.parse(savedTodos);
        todos = parsedTodo;
        ShowTodos();
        RemoveTodoText();
    }
});

function GetCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = currentDate.getDate();
    
    return `${year}${month}${day}`;
}

function ToggleBtns()
{
    const enterDiv = document.getElementById("enter-todo-window");

    if (enterDiv.style.display === 'none')
    {
        enterDiv.style.display = 'block';
    }
    
    else
    {
        enterDiv.style.display = 'none';
    }
}

function assign()
{
    if ((MMBox.value <= 0 || MMBox.value > 12) || (DDBox.value <= 0 || DDBox.value > 31)) {
        alert("유효한 날짜를 입력하십시오.");
        return;
    }

    if (!inputBox.value || !MMBox.value || !DDBox.value || !YYYYBox.value)
    {
        alert("내용을 입력하십시오.");
    }

    else
    {
        AddTodo();
    }
}

function RemoveTodoText()
{
    var delList = document.getElementsByClassName("todo-div");

    Array.from(delList).forEach(item => {
        item.addEventListener('click', function () {
            DelTodo(this);
            this.style.textDecoration = "line-through red";
        });

        item.addEventListener('dblclick', function () {
            DelTodo(this);
            this.parentNode.remove(this);
        });
    })
}


function SaveTodos()
{
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function AddTodo()
{
    if ((MMBox.value <= 0 || MMBox.value > 12) || (DDBox.value <= 0 || DDBox.value > 31)) {
        alert("유효한 날짜를 입력하십시오.");
        return;
    }

    if (!inputBox.value || !MMBox.value || !DDBox.value || !YYYYBox.value) {
        alert("내용을 입력하십시오.");
        return;
    }

    var newTodo = new Todo(inputBox.value, MMBox.value, DDBox.value, YYYYBox.value);

    todos.push(newTodo);

    SaveTodos();
    ShowTodos();

    inputBox.value = "";
    MMBox.value = "";
    DDBox.value = "";
    YYYYBox.value = "";
}

function DelTodo(delTodo)
{
    let todoText = delTodo.textContent;
    console.log(todoText);
    todos = todos.filter(todoFinder => todoFinder.todo !== todoText);
    SaveTodos();
}

function ShowTodos()
{
    let toDoList = document.getElementById("now-todo");
    let pastTodo = document.getElementById("past-todo");

    toDoList.innerHTML = "";

    todos.forEach(theTodo => {
        let listItem = document.createElement("li");
        let dateItem = document.createElement("span");
        let todoDiv = document.createElement("div");
        let dateDiv = document.createElement("div");
        let itemDiv = document.createElement("div");

        let formattedDate = theTodo.deadlineDate

        listItem.innerText = theTodo.todo;
        dateItem.innerText = `기한: <${formattedDate}>`;

        listItem.className = "todos";
        dateItem.className = "limit-date";

        todoDiv.className = "todo-div"
        dateDiv.className = "date-div"

        itemDiv.className = "div-now-todo";

        todoDiv.appendChild(listItem);
        dateDiv.appendChild(dateItem);

        itemDiv.appendChild(todoDiv);
        itemDiv.appendChild(dateDiv);

        if(theTodo.deadline >= GetCurrentDate())
        {
            toDoList.appendChild(itemDiv);
        }

        else if (theTodo.deadline < GetCurrentDate())
        {
            pastTodo.appendChild(itemDiv);
        }
    });

    RemoveTodoText();
}
