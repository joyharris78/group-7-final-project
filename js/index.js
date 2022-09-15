const taskManager = new TaskManager(1);

// taskManager.load();

// taskManager.render();


// selects each of the inputs
const myForm = document.querySelector("#form");
const submitBtn = document.querySelector("#submitBtn");


submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  //selectors for task inputs
  const taskName = document.querySelector("#taskName");
  const taskDescription = document.querySelector("#taskDescription");
  const taskDueDate = document.querySelector("#dueDate");
  const taskAssignedTo = document.querySelector("#assignedTo");
  
  
  const name = taskName.value;
  const description = taskDescription.value;
  const dueDate = taskDueDate.value;
  const assigned = taskAssignedTo.value;
 

  if (
    name === "" || description === "" || dueDate === "" || assigned === "")
   {
  alert("please complete the form");
  } else {
  // adds tasks  
  taskManager.addTask(name,description,assigned,dueDate);

  //save tasks
  taskManager.saveTask();

  //render the tasks
  taskManager.render();

  //clear values after input
  document.querySelector("#taskName").value = '';
  document.querySelector("#taskDescription").value = '';
  document.querySelector("#dueDate").value = '';
  document.querySelector("#assignedTo").value = '';

  }
});

// Using query Selector for Task List
const tasksList = document.querySelector('#tasksList');

// adding event listener to task list 
tasksList.addEventListener('click', (event) => {

 //complete button checker
  if (event.target.classList.contains('done-button')) {
    const taskParent = event.target.parentElement;

        

        const taskId = Number(taskParent.dataset.taskId);
        const task = taskManager.getTasksById(taskId);

        console.log(taskParent)

        task.status = 'DONE';

        taskManager.saveTask();

        taskManager.render();
  }

  // delete button checker
  if (event.target.classList.contains('deleteBtn')) {

    const taskParent = event.target.parentElement;

    //console.log(taskParent)
    
    const taskId = Number(taskParent.dataset.taskId);

    taskManager.deleteTask(taskId);

    taskManager.saveTask();

    taskManager.render();
  }
});
