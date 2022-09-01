const taskManager = new TaskManager();
console.log(taskManager);

const taskName = document.querySelector('#taskName');
const taskDescription = document.querySelector('#taskDescription');
const dueDate = document.querySelector('#dueDate');
const taskPriority = document.querySelector('#taskPriority');
const assignedTo = document.querySelector('#assignedTo');


myform.addEventListener('submit', (e) => {
 e.preventDefault();
 const isValid = validFormFieldInput()
 if (isValid) {
   taskManager.addTask({
    name: document.getElementById(
        'taskName'
    ),
    description: document.getElementById(
        'taskDescription'
    ),
    assignedTo: document.getElementById(
        'assignedTo'

    ),
    dueDate: document.getElementById(
        'dueDate'
    ) ,
     status: document.getElementById(
        'statusBar'
     ) ,
  }

   )

   
}

 validFormFieldInput();
});

let validFormFieldInput = ()=> {
   return true }
