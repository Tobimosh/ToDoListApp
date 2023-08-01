window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const inputText = document.querySelector('#input-task');
    const taskList = document.querySelector('#tasks');

    // Load existing tasks from local storage on page load
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    for (const savedTask of savedTasks) {
        addTaskToTaskList(savedTask);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = inputText.value;
        if (!task) {
            alert("Please fill out the task.")
            return;
        }

        addTaskToTaskList(task);

        // Save tasks to local storage
        saveTasksToLocalStorage();

        inputText.value = "";
    });

    function addTaskToTaskList(task) {
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el =  document.createElement("div");
        task_content_el.classList.add("content");

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

        task_el.appendChild(task_content_el);
        task_el.appendChild(task_actions);
        taskList.appendChild(task_el);

        task_edit.addEventListener('click', () => {
            if (task_edit.innerText.toLowerCase() == "edit") {
                task_input.removeAttribute("readonly");
                task_input.focus();
                task_edit.innerText = "Save";
            } else {
                task_input.setAttribute("readonly", "readonly");
                task_edit.innerText = "Edit"; 
            }

            // Save tasks to local storage after editing
            saveTasksToLocalStorage();
        });

        task_delete.addEventListener('click', () => {
            taskList.removeChild(task_el);

            // Save tasks to local storage after deletion
            saveTasksToLocalStorage();
        });
    }

    function saveTasksToLocalStorage() {
        const tasks = [];
        const taskElements = taskList.querySelectorAll('.text');
        for (const taskElement of taskElements) {
            tasks.push(taskElement.value);
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
