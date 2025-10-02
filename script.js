// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Initialize and Load Tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            addTask(taskText, false); // 'false' indicates not to save again to Local Storage
        });
    }

    // Create the addTask Function
    function addTask(taskText, save = true) {
        // Retrieve and trim the value from task input field
        const trimmedTaskText = taskText.trim();
        
        // Check if taskText is not empty
        if (trimmedTaskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        // Task Creation and Removal
        if (trimmedTaskText !== "") {
            // Create a new li element
            const li = document.createElement('li');
            
            // Set its textContent to taskText
            li.textContent = trimmedTaskText;
            
            // Create a new button element for removing the task
            const removeButton = document.createElement('button');
            
            // Set its textContent to "Remove"
            removeButton.textContent = "Remove";
            
            // Give it a class name of 'remove-btn' using classList.add
            removeButton.classList.add('remove-btn');
            
            // Assign an onclick event to remove the li element from taskList
            removeButton.onclick = function() {
                // Remove from DOM
                taskList.removeChild(li);
                
                // Remove from Local Storage
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                const updatedTasks = storedTasks.filter(task => task !== trimmedTaskText);
                localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            };
            
            // Append the remove button to the li element
            li.appendChild(removeButton);
            
            // Append the li to taskList
            taskList.appendChild(li);
            
            // Clear the task input field
            taskInput.value = "";
            
            // Save to Local Storage if save flag is true
            if (save) {
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks.push(trimmedTaskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }
        }
    }

    // Load tasks from Local Storage when page loads
    loadTasks();

    // Attach Event Listeners
    // Add event listener to addButton that calls addTask when clicked
    addButton.addEventListener('click', function() {
        addTask(taskInput.value, true);
    });
    
    // Add event listener to taskInput for 'keypress' event
    taskInput.addEventListener('keypress', function(event) {
        // Check if event.key is equal to 'Enter' before calling addTask
        if (event.key === 'Enter') {
            addTask(taskInput.value, true);
        }
    });
});
