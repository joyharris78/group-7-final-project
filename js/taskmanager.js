// task manager file
const createTaskHtml = (id,name, description, assignedTo, dueDate, status) =>`
  <div class="card h-100 mb-3" style="max-width: 20rem;">
    <div class="card-header bg-primary text-white">
      <h5 class="card-title">Task ${id}</h5>
    </div>
    <div class="card-body">
      <ul class="list-group-flush">
        <li class="list-group-item">Task Name:${name} 
        </li>
        <li class="list-group-item">Assigned To:${assignedTo} 
        </li>
        <li class="list-group-item"> Description:${description}
        </li>
        <li class="list-group-item"> Due Date:${dueDate}
        </li>
      </ul>
      <span class="badge text-bg-primary ${status === 'TODO' ? 'badge-info' : 'badge-success'}">${status}
      </span>
    </div>
    <button type="submit" class="btn mr-2 done ${status === 'TODO' ? 'visible' :'invisible'}"> Mark As Done
    </button>
    <button type="button" class="btn btn-warning">Delete
    </button>
  </div>
  `



class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  addTask(name,description,assigned,dueDate,priority,status) {
    const task = {
    id: this.currentId++,
    name: name,
    description: description,
    assigned: 'assigned',
    dueDate: dueDate,
    status: 'In Process'
    }
    this.tasks.push(task);
  }
   render(){
    const tasksHtmlList = [];

    //loop for tasks 
    for (let i = 0; i <this.tasks.length; i++) {
      const task = this.tasks[i];

    // Date formatting
    const date =  new Date(task.dueDate);
    const formattedDate = date.toDateString();

    //Create html for tasks
    const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);

    //add tasks to array
    tasksHtmlList.push(taskHtml);
    }
    //create tasksHtml
    const tasksHtml = tasksHtmlList.join('\n');
  
    //create inner HTML for tasks
    const tasksList = document.querySelector('#tasksList');
    tasksList.innerHTML = tasksHtml;

   }

   


}
  
  



    
    
    
    
    
    
    
    
    
    
//     const task1 = {
//       id: 1,
//       name: 'Task 1',
//       description: 'Make cupcakes for the swim team',
//       assignedTo: 'Joy',
//       dueDate: '2022-07-22',
//       status: 'In Process',
//  }

// const task2 = {
//   id: 2,
//   name: 'Task 2',
//   description: 'Pay Bills',
//   assignedTo: 'Sally',
//   dueDate: '2022-07-17',
//   status: 'In Process',
// }

// const task3 = {
//   id: 3,
//   name: 'Task 3',
//   description: 'Wash dog',
//   assignedTo: 'Toyin',
//   dueDate: '2022-07-20',
//   status: 'To-Do',
// }

// const task4 = {
//   id: 4,
//   name: 'Task 4',
//   description: 'Finish homework',
//   assignedTo: 'Valeria',
//   dueDate: '2022-07-25',
//   status: 'Done',
// }

// const task5 = {
//   id: 5,
//   name: 'Task 5',
//   description: 'Wash dishes',
//   assignedTo: 'Nadya',
//   dueDate: '2020-07-17',
//   status: 'To-do'
// };



const TaskHtml = createTaskHtml('5','task 1', 'wash dishes','joy','07/20/2022');
 console.log(TaskHtml);