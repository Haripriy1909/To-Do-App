const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
function addTask() {
    if (!taskInput.value) {
        alert("please write any task!s");
    } else {
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="Delete";

        li.appendChild(span);
    }
    taskInput.value = '';

}

taskList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.clasList.toggle("checked");
    }
    else if (e.target.tagName = "SPAN") {
        e.target.parentElement.remove();

    }

}, false);
