let tasks = [
  {
    id: "1",
    name: "ejemplo de tarea 1",
    state: false,
  },
  {
    id: "2",
    name: " ejemplo de tarea 2",
    state: false,
  },
  {
    id: "3",
    name: "ejemplo de tarea 3",
    state: false,
  },
];
/**********  variables globales **********/
const buttonAdd = document.getElementById("addAssingment");
const containerAssignments = document.getElementById("assignmentsContainer");
const totalAssingment = document.getElementById("totalAssignmets");
const totalFinishAssignments = document.getElementById("totalFinishAssignments");
/**********  generar id **********/
function idGenerator() {
  return parseInt(Math.random() * new Date().getUTCMilliseconds());
}

function deleteAssignment(id) {
  const newTasks = tasks.filter((task) => task.id != id);
  tasks = newTasks;
  renderTasks();
}
function finishTask(id) {
  tasks.map((task) => {
    if (task.id == id) {
      task.state = !task.state;
      return;
    }
  });
  renderTasks();
}

function renderTotalFinishTask() {
  const totalFinishTask = tasks.filter((task) => (task.state == true));
  totalFinishAssignments.innerHTML = `<th id="totalFinishAssignments">${totalFinishTask.length}</th>`;
}
/**********  crear funcion para tomar los elementos por default del arreglo y enviarlos a la funcion addAssignment **********/
function renderTasks() {
  let html = "";
  tasks.map((task) => {
    html += `<tr class="assignments" >
    <th>${task.id}</th>
    <th>${task.name} 
      <input type="checkbox" onclick="finishTask(${task.id})" ${
      task.state ? `checked` : ""
    } />    
      <button onclick="deleteAssignment(${task.id})"> x </button>
    </th>
  </tr>`;
  });
  containerAssignments.innerHTML = html;
  renderTotalTasks();
  renderTotalFinishTask();
}
renderTasks();

/**********  crear funcion para insertar los nuevos elementos al arreglo **********/
function addTask() {
  let nameTask = document.getElementById("nameAssignment").value;
  const newtask = { id: idGenerator(), name: nameTask };
  tasks.push(newtask);
  renderTasks();
}
/**********  crear funcion para contar e insertar el total de tareas realizadas *********/
function renderTotalTasks() {
  totalAssingment.innerHTML = `<th id="totalAssignmets">${tasks.length}</th>`;
}
/**********  escuchar el boton agregar y realizar la operacion de insertar la nueva tarea en html **********/
buttonAdd.addEventListener("click", () => {
  addTask();
});
