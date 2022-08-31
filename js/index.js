
const form = document.querySelector('#form')
const taskName = document.querySelector('#taskName');
const taskDescription = document.querySelector('#taskDescription');
const dueDate = document.querySelector('#dueDate');
const taskPriority = document.querySelector('#taskPriority');
const assignedTo = document.querySelector('#assignedTo');


form.addEventListener('submit', (e) => {
 e.preventDefault();

 validFormFieldInput();/tools-and-resources/
});

let validFormFieldInput = ()=> {
    //gets values from the form inputs
   const taskNameValue = taskName.value.trim();
   const taskDescriptionValue = taskDescription.value.trim();
   const dueDateValue = dueDate.value;
   const taskPrioityValue = taskPriority.value;
   const assignedToValue = assignedTo.value;
   
   if(taskNameValue === ''){
       //error message
   } else{
       // success message
   }
}