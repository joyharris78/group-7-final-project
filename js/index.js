const taskManager = new TaskManager(1);
console.log(taskManager);

// selects each of the inputs
const myForm = document.querySelector("#form");
const submitBtn = document.querySelector("#submitBtn");


submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const taskName = document.querySelector("#taskName");
  const taskDescription = document.querySelector("#taskDescription");
  const taskDueDate = document.querySelector("#dueDate");
  const taskAssignedTo = document.querySelector("#assignedTo");
  

  const name = taskName.value;
  const description = taskDescription.value;
  const dueDate = taskDueDate.value;
  const assigned = taskAssignedTo.value;
 

  if (
    name === "" ||
    description === "" ||
    dueDate === "" ||
    assigned === ""
  ) {
    alert("please complete the form ");
  } else {
  taskManager.addTask(
  name,description,assigned,dueDate);

  taskManager.render();
  event.preventDefault();

  }

});


