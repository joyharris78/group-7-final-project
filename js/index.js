const taskManager = new TaskManager();
console.log(taskManager);

// selects each of the inputs
const myForm = document.querySelector("#form");
const submitBtn = document.querySelector("#submitBtn");
const taskName = document.querySelector("#taskName");
const taskDescription = document.querySelector("#taskDescription");
const dueDate = document.querySelector("#dueDate");
const taskPriority = document.querySelector("#taskPriority");
const assignedTo = document.querySelector("#assignedTo");

let validFormFieldInput = () => {
    //gets values from the form inputs
    const taskNameValue = taskName.value;
    const taskDescriptionValue = taskDescription.value;
    const dueDateValue = dueDate.value;
    const taskPriorityValue = taskPriority.value;
    const assignedToValue = assignedTo.value;
  
    //checks if the inputs are empty
    if (
      taskNameValue === "" ||
      taskDescriptionValue === "" ||
      dueDateValue === "" ||
      taskPriorityValue === "" ||
      assignedToValue === ""
    ) {
      alert("please complete the form ");
    } else {
      alert("Form has been submitted");
    }
  };
  // what happens when you click submit button
  submitBtn.addEventListener("click", (e) => {
    validFormFieldInput();
  });
  

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const isValid = validFormFieldInput();
  if (isValid) {
    taskManager.addTask({
      name: document.getElementById("taskName"),
      description: document.getElementById("taskDescription"),
      assignedTo: document.getElementById("assignedTo"),
      dueDate: document.getElementById("dueDate"),
      status: document.getElementById("statusBar"),
    });
  }

  validFormFieldInput();
});

 validFormFieldInput = () => {
  return true;
};


