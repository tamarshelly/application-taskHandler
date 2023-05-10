let tasks = [
  { priority: 1, text: "finishing tasks Handler" },
  { priority: 2, text: "second" },
  { priority: 3, text: "third" },
  { priority: 4, text: "forth" },
];

let indexPriority = 5;
var contador = 0;

function newElement() {
  var inputValue = document.getElementById("newTask").value;
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("newTask").value = "";
    var cont =
      '<div class="cell"> <div class="side-scroll"> <ul class="arrow">' +
      '<li><i class="fa fa-angle-up click" onclick="onClickUp(this)"></i></li> <li><i class="fa fa-angle-down click"></i></li>' +
      '</ul></div><div class="content"> <ul class="label-cell">  <li class="task-label id="label' +
      contador +
      '">' +
      inputValue +
      '</li>  <li><i class="fa fa-edit click" style="font-size: 17px"></i></li> </ul> </div>' +
      '<div class="features">  <i class="fa fa-trash-o click" style="font-size: 24px; display: table"' +
      "></i> </div></div>";
    var li = document.createElement("li");
    li.id = "li_num_" + contador;
    li.priority = contador;
    li.className = "li_num_" + contador;

    li.innerHTML = cont;
    document.querySelectorAll(".cont_task_lists > ul")[0].appendChild(li);
    contador++;
  }
}

function onClickUp(arrow) {
  alert(arrow.parentNode.parentNode.parentNode.parentNode.parentNode.priority);

  /* let newPriority = toUpTask.priority - 1;

  //search for the old task and change it
  let toDownTask = tasks.find((task) => task.priority == newPriority);
  toDownTask.priority++;
  toUpTask.priority = newPriority;

  //swap the tasks
  tasks[newPriority - 1] = toUpTask;
  tasks[newPriority] = toDownTask;*/
}

function onClickDown(toDownTask) {
  let newPriority = toDownTask.priority + 1;

  //search for the old task and change it
  let toUpTask = tasks.find((task) => task.priority == newPriority);
  toUpTask.priority--;
  toDownTask.priority = newPriority;
  //swap the tasks
  tasks[newPriority - 2] = toUpTask;
  tasks[newPriority - 1] = toDownTask;
}
