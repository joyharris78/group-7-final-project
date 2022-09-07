const taskManager = new TaskManager(0);
console.log(taskManager);

// selects each of the inputs
const myForm = document.querySelector("#form");
const submitBtn = document.querySelector("#submitBtn");


submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const taskName = document.querySelector("#taskName");
  const taskDescription = document.querySelector("#taskDescription");
  const taskDueDate = document.querySelector("#dueDate");
  const taskPriority = document.querySelector("#taskPriority");
  const assignedTo = document.querySelector("#assignedTo");
  // const statusBar = document.querySelector("#status");

  const name = taskName.value;
  const description = taskDescription.value;
  const dueDate = taskDueDate.value;
  const priority = taskPriority.value;
  const assigned = assignedTo.value;
  // const status = statusBar.value;

  if (
    name === "" ||
    description === "" ||
    dueDate === "" ||
    priority === "" ||
    assigned === ""
  ) {
    alert("please complete the form ");
  } else {
  taskManager.addTask(
  name,description,assigned,dueDate,priority,status);

  taskManager.render();

  }

});

// Using query Selector for Task List
const tasksList = document.querySelector('#tasksList');

// adding event listener to task list 
tasksList.addEventListener('click', (event) => {
 // adding if statement 
  if (event.target.classList.contains('done')) {
    const taskParent = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
  
  }
});
