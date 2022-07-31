/**********  variables globales **********/
const buttonAdd = document.getElementById("addTask");
const containerTask = document.getElementById("taskContainer");
const totalTasks = document.getElementById("totaltasks");
const totalFinishTasks = document.getElementById("totalFinishTasks");
/**********  arreglo de tareas por default **********/
let tasks = [
  {
    id: "1",
    name: "Ejemplo de tarea 1",
    state: false,
  },
  {
    id: "2",
    name: " Ejemplo de tarea 2",    
    state: false,                     
  },                                   
  {
    id: "3",
    name: "Ejemplo de tarea 3",
    state: false,
  },
];
/**********  generardor de ids **********/
function idGenerator() {
  return parseInt(Math.random() * new Date().getUTCMilliseconds());
}
/**********  funcion encargada de renderizar todos los elementos de manera dinamicas dentro de html **********/
function renderTasks() {
  let html = "";
  tasks.map((task) => {
    html += `<tr class="tasks" >
    <th>${task.id}</th>
    <th>${task.name} 
      <input type="checkbox" onclick="finishTask(${task.id})" ${
      task.state ? `checked` : ""
    } />    
      <button onclick="deleteTask(${task.id})"> X </button>
    </th>
  </tr>`;
  });
  containerTask.innerHTML = html;
  renderTotalTasks();
  renderTotalFinishTask()
}
/**********  insertar las nuevas tarreas en el arreglo y renderiza el nuevo elemento dentro del html **********/
function addTask() {
  let nameTask = document.getElementById("nameTask").value;
  const newtask = { id: idGenerator(), name: nameTask };
  tasks.push(newtask);
  renderTasks();
}
/**********  funcion encargada de renderizar el total de tareas *********/
function renderTotalTasks() {
  totalTasks.innerHTML = `<th id="totalTasks">${tasks.length}</th>`;
}
/**********  funcion encargada de cambiar el estado del check box de dentro del arreglo y sumar a tareas realizadas **********/
function finishTask(id) {
  tasks.map((task) => {
    if (task.id == id) {
      task.state = !task.state;
      return;
    }
  });
  renderTasks();
}
/**********  funcion encargada de contar el numero total de tareas e insertar dicho numero en el html **********/
function renderTotalFinishTask() {
  const totalFinishTask = tasks.filter((task) => (task.state == true));
  totalFinishTasks.innerHTML = `<th id="totalFinishTasks">${totalFinishTask.length}</th>`;
}
/**********  funcion encargada de eliminar los elementos del arreglo y de renderizar el nuevo arreglo sin la tarea selecionada **********/
function deleteTask(id) {
  const newTasks = tasks.filter((task) => task.id != id);
  tasks = newTasks;
  renderTasks();
}
/********** renderizado inicial de los por default en html **********/
renderTasks();
/**********  evento que desencadena el agregado de tareas tanto en el arreglo como en html **********/
buttonAdd.addEventListener("click", () => {
  addTask();
});
 