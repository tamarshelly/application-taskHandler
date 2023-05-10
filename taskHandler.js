let tasks = [
  { priority: 1, text: "finishing tasks Handler" },
  { priority: 2, text: "second" },
  { priority: 3, text: "third" },
  { priority: 4, text: "forth" },
];

let indexPriority = 5;

function onAddTask(newTaskText) {
  let newTask = { priority: indexPriority, text: newTaskText };
  tasks.push(newTask);
  indexPriority++;
}

function onClickUp(toUpTask) {
  let newPriority = toUpTask.priority - 1;

  //search for the old task and change it
  let toDownTask = tasks.find(task => task.priority == newPriority);
  toDownTask.priority++;
  toUpTask.priority = newPriority;

  //swap the tasks
  tasks[newPriority - 1] = toUpTask;
  tasks[newPriority] = toDownTask;
}

function onClickDown(toDownTask) {
  let newPriority = toDownTask.priority + 1;

  //search for the old task and change it
  let toUpTask = tasks.find(task => task.priority == newPriority);
  toUpTask.priority--;
  toDownTask.priority = newPriority;
  //swap the tasks
  tasks[newPriority - 2] = toUpTask;
  tasks[newPriority - 1] = toDownTask;
}
