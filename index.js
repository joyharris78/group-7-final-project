
const form = document.querySelector('#form')
const taskName = document.querySelector('#taskName');
const taskDescription = document.querySelector('#taskDescription');
const dueDate = document.querySelector('#dueDate');
const taskPriority = document.querySelector('#taskPriority');
const assignedTo = document.querySelector('#assignedTo');


form.addEventListener('submit', (e) => {
 e.preventDefault();

 validFormFieldInput();
});

let validFormFieldInput = ()=> {
    //gets values from the form inputs
   const taskNameValue = taskName.value.trim();
   const taskDescriptionValue = taskDescription.value.trim();
   const dueDateValue = dueDate.value.trim();
   const taskPrioityValue = taskPriority.value.trim();
   const assignedToValue = assignedTo.value.trim();
   
   if(taskNameValue === ''){
       //error message
   } else{
       // success message
   }
}