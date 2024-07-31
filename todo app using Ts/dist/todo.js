"use strict";
function addTask() {
    let taskInput = document.getElementById("taskInput");
    if (taskInput) {
        let taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskList = document.getElementById("taskList");
            let newTask = document.createElement("li");
            let spanTask = document.createElement("span");
            spanTask.id = 'task';
            spanTask.innerHTML = taskText;
            newTask.appendChild(spanTask);
            let spanDelete = document.createElement("span");
            spanDelete.id = "deleteTask";
            spanDelete.innerHTML = '<i class="fa-solid fa-trash "></i>';
            newTask.appendChild(spanDelete);
            let spanEdit = document.createElement("span");
            spanEdit.id = "editTask";
            spanEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
            newTask.appendChild(spanEdit);
            taskList.appendChild(newTask);
        }
    }
    taskInput.value = '';
}
let taskList = document.getElementById('taskList');
if (taskList) {
    taskList.addEventListener("click", function (e) {
        const target = e.target;
        if (target && target.parentElement && target.parentElement.parentElement) {
            if (target.parentElement.id === "deleteTask") {
                deleteTask(target);
            }
            else if (target.parentElement.id == "editTask") {
                editTask(target.parentElement.parentElement);
            }
        }
    });
}
function deleteTask(taskElement) {
    if (taskElement.parentElement && taskElement.parentElement.parentElement) {
        taskElement.parentElement.parentElement.remove();
    }
}
function editTask(taskElement) {
    var _a;
    if (taskElement && ((_a = taskElement.firstChild) === null || _a === void 0 ? void 0 : _a.textContent)) {
        let taskText = taskElement.firstChild.textContent;
        let newTaskText = prompt("edit your Task", taskText);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskElement.firstChild.textContent = newTaskText.trim();
        }
    }
}
