const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    newTask.addEventListener('click', () => {
      newTask.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(newTask);
    });

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
});
