

function addTask():void{
    let taskInput: HTMLInputElement  = document.getElementById("taskInput") as HTMLInputElement;

        let taskText: string = taskInput.value.trim();
        if (taskText !== ''){
            const taskList :HTMLElement = document.getElementById("taskList") as HTMLElement;
            
            let newTask :HTMLElement = document.createElement("li");
            let spanTask = document.createElement("span");
            spanTask.id = 'task';
            spanTask.innerHTML = taskText;
            newTask.appendChild(spanTask);

            // delete task button

            let spanDelete = document.createElement("span");
            spanDelete.id = "deleteTask";
            spanDelete.innerHTML = '<i class="fa-solid fa-trash "></i>';
            newTask.appendChild(spanDelete);

            // edit task button

            let spanEdit = document.createElement("span");
            spanEdit.id = "editTask";
            spanEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
            newTask.appendChild(spanEdit);

            taskList.appendChild(newTask);
            
        }

     
    taskInput.value = '';
}


let taskList = document.getElementById('taskList');

if (taskList){
    taskList.addEventListener("click",function(e){
        const target = e.target as HTMLElement;

        if(target && target.parentElement && target.parentElement.parentElement){
            if (target.parentElement.id === "deleteTask"){

                deleteTask(target)

            }
            else if(target.parentElement.id == "editTask"){

                editTask(target.parentElement.parentElement)
            }
        }
    });
}


function deleteTask(taskElement :HTMLElement){
    if(taskElement.parentElement && taskElement.parentElement.parentElement){
        taskElement.parentElement.parentElement.remove()
    }

}


function editTask(taskElement : HTMLElement ){
    if (taskElement && taskElement.firstChild?.textContent){

        let taskText : string = taskElement.firstChild.textContent;
        let newTaskText = prompt("edit your Task",taskText);

        if (newTaskText !== null && newTaskText.trim() !== ''){
            taskElement.firstChild.textContent = newTaskText.trim();
        }
    }
}

    


