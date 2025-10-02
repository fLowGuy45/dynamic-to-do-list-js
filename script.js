// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the task text from input field
        const taskText = taskInput.value.trim();
        
        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        // Create new list item for the task
        const listItem = document.createElement('li');
        
        // Create span for task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.className = 'task-text';
        
        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        
        // Add event listener to remove button
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };
        
        // Append elements to list item
        listItem.appendChild(taskSpan);
        listItem.appendChild(removeButton);
        
        // Add list item to task list
        taskList.appendChild(listItem);
        
        // Clear the input field
        taskInput.value = '';
        
        // Focus back to input field for better UX
        taskInput.focus();
    }

    // Event listener for Add Task button click
    addButton.addEventListener('click', addTask);
    
    // Event listener for Enter key press in input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
