//const taskManager = new TaskManager();
//console.log(taskManager);

const form = document.querySelector('#form');
const submitBtn = document.querySelector('#submitBtn');
const taskName = document.querySelector('#taskName');
const taskDescription = document.querySelector('#taskDescription');
const dueDate = document.querySelector('#dueDate');
const taskPriority = document.querySelector('#taskPriority');
const assignedTo = document.querySelector('#assignedTo');




let validFormFieldInput = ()=> {
    //gets values from the form inputs
   const taskNameValue = taskName.value.trim();
   const taskDescriptionValue = taskDescription.value.trim();
   const dueDateValue = dueDate.value;
   const taskPriorityValue = taskPriority.value;
   const assignedToValue = assignedTo.value;
   

   if(taskNameValue === '' || taskDescriptionValue === '' || dueDateValue === '' || taskPriorityValue === '' || assignedToValue === ''){
       alert('Please complete form')
   } else{
      alert('Form has been submitted')
   }
}

form.addEventListener('submit', (e) => {
    //e.preventDefault();
   
    validFormFieldInput();
   });