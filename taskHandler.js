
var tasks = [ 
  { id:1, text:"finishing tasks Handler"}
];

var indexId = 2;

tasks.sort(function(a, b) {
  return (a.id - b.id);
});
  

var listHTML = document.getElementById("tasksList");

tasks.forEach((task) => {
  var li = document.createElement("li");
  li.innerText = item.text;
  listHTML.appendChild(li);
});