document.addEventListener('DOMContentLoaded', () => {
    const taskinput = document.getElementById("task-input");
    const addtaskbtn = document.getElementById("add-btn");
    const tasklist = document.getElementById("task-list");

    function addtask() {
        const tasktext = taskinput.value.trim();
        if (tasktext === ''){
            alert('Enter your task!');
            return;
        }

        const taskitem = document.createElement("li");
        const dltbtn = document.createElement("button");
        const taskspan = document.createElement("span");
        const markbtn = document.createElement("button");

        taskspan.textContent = tasktext; // Fixed  ( taskspan.textContent = taskitem; )
        dltbtn.textContent = 'Delete';
        markbtn.textContent = 'Done!';

        dltbtn.classList.add("delete-btn");
        markbtn.classList.add("mark-btn");

        // Toggle "complete" class when the mark btn is clicked.
        markbtn.addEventListener('click', () => {
            taskspan.classList.toggle('completed');
            if (taskspan.classList.contains('completed')) {
                markbtn.textContent = 'Undo';
            }
            else {
                markbtn.textContent = 'completed';
            }
        });

        //remove the task when the delete button is clicked
        dltbtn.addEventListener('click', () => {
            taskitem.removeChild(taskitem);
        });

        

        taskitem.appendChild(taskspan);
        taskitem.appendChild(markbtn);
        taskitem.appendChild(dltbtn);
        tasklist.appendChild(taskitem);
    }

    addtaskbtn.addEventListener('click', addtask);

    taskinput.addEventListener('click', (e) => {
        if (e.key === 'Enter') {
            addtask();
        }
    })
});
