// task manager file

class TaskManager {
  constructor() {
    this.tasks = []
  }

  addTask(task) {
    this.tasks.push(
      new TodoTask(
        Object.assign(
          {
            id: (this.tasks.length || 0) + 1,
          },
          task
        )
      )
    )
  }

  addTask(task) {
    this.tasks.push(
      new TodoTask(
        Object.assign(
          {
            id: (this.tasks.length || 0) + 1,
          },
          task
        )
      )
    )
  }
}
//

const task1 = {
  id: 1,
  name: 'Task 1',
  description: 'Make cupcakes for the swim team',
  assignedTo: 'Joy',
  dueDate: '2022-07-22',
  status: 'In Process',
}

const task2 = {
  id: 2,
  name: 'Task 2',
  description: 'Pay Bills',
  assignedTo: 'Sally',
  dueDate: '2022-07-17',
  status: 'In Process',
}

const task3 = {
  id: 3,
  name: 'Task 3',
  description: 'Wash dog',
  assignedTo: 'Toyin',
  dueDate: '2022-07-20',
  status: 'To-Do',
}

const task4 = {
  id: 4,
  name: 'Task 4',
  description: 'Finish homework',
  assignedTo: 'Valeria',
  dueDate: '2022-07-25',
  status: 'Done',
}

const task5 = {
  id: 5,
  name: 'Task 5',
  description: 'Wash dishes',
  assignedTo: 'Nadya',
  dueDate: '2020-07-17',
  status: 'To-do'
};

