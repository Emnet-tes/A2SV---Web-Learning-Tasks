
function addTask(){
    
    let taskInput = document.getElementById("task-input");
    
    let taskText = taskInput.value.trim();
    
    if (taskText !== ''){
            const taskList = document.getElementById('task-list');

        let newTask = document.createElement("li"); 
        
        newTask.className = 'task';
        
            newTask.innerHTML = taskInput.value;
            
            let  spanDelete = document.createElement("span");
            spanDelete.id = 'delete-task';
            spanDelete.innerHTML = '<i class="fa-solid fa-trash "></i>';
            newTask.appendChild(spanDelete);


            let spanEdit = document.createElement("span");
            spanEdit.id = 'edit-task';
            spanEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
            newTask.appendChild(spanEdit);

            taskList.appendChild(newTask);

        }
        else{
            alert('you must write something');
        }
        taskInput.value  = '';
    }
    
 document.getElementById('task-list').addEventListener("click",function(e){
        if(e.target.parentElement.id === "delete-task"){
            e.target.parentElement.parentElement.remove();
        }
        else if (e.target.parentElement.id === "edit-task"){
            editTask(e.target.parentElement.parentElement);
        }
    });

    function editTask(taskElement){
        let taskText = taskElement.firstChild.textContent;
        let newTaskText = prompt("Edit your task",taskText);

        if (newTaskText !== null && newTaskText.trim() !== '')
        {
            taskElement.firstChild.textContent = newTaskText.trim();
        }
      
        

    }


   
