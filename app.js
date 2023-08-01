window.addEventListener('Load', () => {
    const form = document.querySelector('#new-task-form');
    const inputText = document.querySelector('#input-task');
    const taskList = document.querySelector('#tasks');

    form.addEventListener('submit', (e) =>{
        const task = inputText.value;
        if(!task){
            alert("Please fill out the task.")
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el =  document.createElement("div");
        task_content_el.classList.add("content");
        task_content_el.innerText = task;

        task_el.appendChild(task_content_el);
        taskList.appendChild(task_el);
    })

    

}) 