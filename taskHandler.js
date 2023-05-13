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
      '<li><i class="fa fa-angle-up click" onclick="onClickUp(this)"></i></li> <li><i class="fa fa-angle-down click" onclick="onClickDown(this)"></i></li>' +
      '</ul></div><div class="content"> <ul class="label-cell">  <li class="task-label id="label' +
      contador +
      '">' +
      inputValue +
      '</li>  <li><i class="fa fa-edit click" onClick="onClickEdit(this)" style="font-size: 17px"></i></li> </ul> </div>' +
      '<div class="features">  <i class="fa fa-trash-o click" onClick="onDelete(this)" style="font-size: 24px; display: table"' +
      "></i> </div></div>";
    var li = document.createElement("li");
    li.id = "li_num_" + contador;
    li.priority = contador;
    li.className = "li_num_" + contador;
    li.text = inputValue;

    li.innerHTML = cont;
    document.querySelectorAll(".cont_task_lists > ul")[0].appendChild(li);
    contador++;
  }
}

function onClickUp(arrow) {
  var elem = arrow.parentNode.parentNode.parentNode.parentNode.parentNode;
  if (elem.closest("li").previousSibling != null) {
    elem.priority = elem.priority - 1;
    elem.closest("li").previousSibling.priority = elem.priority + 1;
    elem.parentNode.insertBefore(elem, elem.closest("li").previousSibling);
  }
}

function onClickDown(arrow) {
  var elem = arrow.parentNode.parentNode.parentNode.parentNode.parentNode;
  if (elem.closest("li").nextSibling != null) {
    elem.priority = elem.priority + 1;
    elem.closest("li").nextSibling.priority = elem.priority - 1;
    elem.parentNode.insertBefore(elem.closest("li").nextSibling, elem);
  }
}

function onDelete(trash) {
  var elem = trash.parentNode.parentNode.parentNode;
  elem.parentNode.removeChild(elem);
}

function onClickEdit(edit) {
  elem = edit.parentNode.parentNode.parentNode.parentNode.parentNode;
  // alert(elem.text);
}
