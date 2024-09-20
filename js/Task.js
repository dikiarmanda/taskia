class Task {
  constructor() {
    this.tasks = this.getTask();
  }

  getTask() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  }

  saveTask(taskData) {
    const newTaskData = {
      id: Date.now(),
      isComplated: false,
      ...taskData,
    };

    this.tasks.push(newTaskData);
    localStorage.setItem('tasks', JSON.stringify(this.tasks))

    return {
      success: true,
    };
  }

  complateTask(taskId) {
    const index = this.tasks.findIndex(task => task.id === taskId);

    if (index !== -1) {
      this.tasks[index].isComplated = true;
      this.updateLocalStorage();
    }
  }

  deleteTask(taskId ) {
    const index = this.tasks.findIndex(task => task.id === taskId);

    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}