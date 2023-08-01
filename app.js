window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const inputText = document.querySelector('#input-task');
    const taskList = document.querySelector('#tasks');

    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        const task = inputText.value;
        if(!task){
            alert("Please fill out the task.")
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el =  document.createElement("div");
        task_content_el.classList.add("content");
        //task_content_el.innerText = task;

        task_el.appendChild(task_content_el);

        const task_input = document.createElement('input');
        task_input.type = "text"
        task_input.classList.add("text");
        task_input.value = task
        task_input.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input);


        const task_actions = document.createElement("div");
        task_actions.classList.add("actions");

        const task_edit = document.createElement("button");
        task_edit.classList.add("edit");
        task_edit.innerHTML = "Edit";

        const task_delete = document.createElement("button");
        task_delete.classList.add("delete");
        task_delete.innerHTML = "Delete";

        task_actions.appendChild(task_edit);
        task_actions.appendChild(task_delete);

        task_el.appendChild(task_actions);
        taskList.appendChild(task_el);

        inputText.value = "";
        
        task_edit.addEventListener('click', () =>{
            if(task_edit.innerText.toLowerCase() == "edit"){
                task_input.removeAttribute("readonly");
                task_input.focus();
                task_edit.innerText = "Save";

            }
            else{
                task_input.setAttribute("readonly", "readonly");
                task_edit.innerText = "Edit"; 
            }
        });
    })

    

}) 