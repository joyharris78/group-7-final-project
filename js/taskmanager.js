// task manager file
const createTaskHtml = (id,name, description, assigned, dueDate,status) =>`
  <div class="card h-100 mb-3" data-task-id=${id} style="max-width: 20rem;">
    <div class="card-header bg-primary text-white">
      <h5 class="card-title" >New Task</h5>
    </div>
    <div class="card-body">
      <ul class="list-group-flush">
        <li class="list-group-item">Task Name: ${name} 
        </li>
        <li class="list-group-item">Assigned To: ${assigned} 
        </li>
        <li class="list-group-item"> Description: ${description}
        </li>
        <li class="list-group-item"> Due Date: ${dueDate}
        </li>
      </ul>
      <span class="badge text-bg-primary ${status === 'TODO' ? 'badge-info' : 'badge-success'}">${status}
      </span>
      
    </div>
    <button type="submit" class="btn btn-success done-button ${status === 'TODO' ? 'visible' :'invisible'}"> Mark As Done </button>
  
    <button type="button" class="btn btn-warning deleteBtn">Delete <button>
  </div>
  `



class TaskManager {
  constructor(currentId = 1) {
    this.tasks = [];
    this.currentId = currentId;
  }

  addTask(name,description,assigned,dueDate) {
    
    const task = {
    id: this.currentId++,
    name: name,
    description: description,
    assigned: assigned,
    dueDate: dueDate,
    status: 'TODO',
  
    };
    this.tasks.push(task);
  }
  
  //delete Task
  deleteTask(taskId) {
    //array creation
    const newTasks = [];

    //loop over tasks
    for (let i = 0; i < this.tasks.length; i++) {
      //current task in loop
      const task = this.tasks[i];

      //check for id matches
      if (task.id !== taskId) {
        //add task to newTasks array
        newTasks.push(task);
      }
    }
    //set this.tasks to newtasks
    this.tasks = newTasks;
  }

  //Get Task
  getTasksById(taskId) {
    let foundTask;
   
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];

      if(task.id === taskId) {
          foundTask = task;
      }
    }
  return foundTask;
     
  }



   render() {
    const tasksHtmlList = [];

    //loop for tasks 
    for (let i = 0; i <this.tasks.length; i++) {
      const task = this.tasks[i];

      // Date formatting
      const date =  new Date(task.dueDate);
      const formattedDate = date.toDateString();

      //Create html for tasks
      const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assigned, formattedDate, task.status);

      //add tasks to array
      tasksHtmlList.push(taskHtml);
    }
    //create tasksHtml
    const tasksHtml = tasksHtmlList.join('\n');
  
    //create inner HTML for tasks
    const tasksList = document.querySelector('#tasksList');
    tasksList.innerHTML = tasksHtml;

   }

 
// local storage
  saveTask() {
    //create JSON string for tasks
    let tasksJson = JSON.stringify(this.tasks);

    //store tasks JSON string in local storage 
    localStorage.setItem('tasks', tasksJson);

    //convert currentId in local storage
    const currentId = String(this.currentId);

    //store currentIdin 
    localStorage.setItem('currentId', currentId)
 }
  
   load() {
     if (localStorage.getItem('tasks')) {
      let tasksJson = localStorage.getItem('tasks');
      this.tasks = JSON.parse(tasksJson);
     }
     if (localStorage.getItem('currentId')) {
       let currentId = localStorage.getItem('currentId');
       this.currentId = Number(currentId);
     }
   }
}
  
  



    

    
    
  


