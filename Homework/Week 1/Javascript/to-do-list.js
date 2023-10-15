const form = document.getElementById("toDoForm");
form.addEventListener("submit", formEvent);
function formEvent(stop) {
  stop.preventDefault();
}

function addToDoList() {
  const dataName = document.getElementById("fullname").value;
  const dataPriority = document.getElementById("priority").value;
  console.log(dataPriority);
  const dataToDo = document.getElementById("toDo").value;
  if (dataName == "" || dataPriority == "" || dataToDo == "") {
    alert("You must fill the form!");
    return;
  }
  const addedJob = document.createElement("div");
  addedJob.innerHTML = `<div class='listAdded'onclick = 'remove(this)'>
  <p><span class = 'output'>Name </span>: ${dataName} </p>
  <p><span class = 'output'>Priority </span>: ${dataPriority} </p>
  <p><span class = 'output'>To-do </span>: ${dataToDo} </p>
  </div>`;
  const parent = document.getElementById("jobAdded");
  parent.appendChild(addedJob);
  document.getElementById("disappearItem").style.display = "none";
}

function remove(el) {
  el.remove();
}
