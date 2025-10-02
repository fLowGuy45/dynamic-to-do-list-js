// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        // Retrieve and trim the value from task input field
        const taskText = taskInput.value.trim();
        
        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        // Task Creation and Removal
        if (taskText !== "") {
            // Create a new li element
            const li = document.createElement('li');
            
            // Set its textContent to taskText
            li.textContent = taskText;
            
            // Create a new button element for removing the task
            const removeButton = document.createElement('button');
            
            // Set its textContent to "Remove"
            removeButton.textContent = "Remove";
            
            // Give it a class name of 'remove-btn' using classList.add
            removeButton.classList.add('remove-btn');
            
            // Assign an onclick event to remove the li element from taskList
            removeButton.onclick = function() {
                taskList.removeChild(li);
            };
            
            // Append the remove button to the li element
            li.appendChild(removeButton);
            
            // Append the li to taskList
            taskList.appendChild(li);
            
            // Clear the task input field
            taskInput.value = "";
        }
    }

    // Attach Event Listeners
    // Add event listener to addButton that calls addTask when clicked
    addButton.addEventListener('click', addTask);
    
    // Add event listener to taskInput for 'keypress' event
    taskInput.addEventListener('keypress', function(event) {
        // Check if event.key is equal to 'Enter' before calling addTask
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
