/**********  importacion de datos **********/
import { dataAssignments } from "./dataAssignment.js";
/**********  variables globales **********/
const buttonAdd = document.getElementById("addAssingment");
const containerAssignments = document.getElementById("assignmentsContainer");
const totalAssingment = document.getElementById("totalAssignmets");
const totalFinishAssignments = document.getElementById("totalFinishAssignments");
/**********  generar id **********/
const idGenerator = () => Math.floor(Math.random() * Date.now());
/**********  crear plantilla a incertar en html **********/
function renderAssignment(id, name) {
  return  `<tr>
  <th>${id}</th>
  <th>${name} <input type="checkbox" name="" id="">    <button> x </button></th>
</tr>`
}
/**********  crear funcion para tomar los elementos por default del arreglo y enviarlos a la funcion addAssignment **********/
function getDataAssignments(data) {
  data.map ((assingment) =>{
    containerAssignments.innerHTML += renderAssignment (
      assingment.id,
      assingment.name
    );
  });
}
getDataAssignments(dataAssignments);
totalAssingmets(totalAssingment);
/**********  crear funcion para insertar los nuevos elementos al arreglo **********/
function newDataAssingment(id, name) {
  const newAssingment = {id:id, name:name};
 dataAssignments.push(newAssingment);
}
/**********  crear funcion para contar e insertar el total de tareas realizadas *********/
function totalAssingmets(totalAssingment) {
  totalAssingment.innerHTML = `<th id="totalAssignmets">${dataAssignments.length}</th>`;
}
/**********  crear funcion para contar e insertar el total de tareas **********/
// function totalFinishAssignments (checkbox) {

  
// }
/**********  escuchar el boton agregar y realizar la operacion de insertar la nueva tarea en html **********/
buttonAdd.addEventListener("click", () =>{ 
  let assingmentName = document.getElementById("nameAssignment").value;

});
/**********  crear funcion para eliminar un la tarea clickeada en el arreglo **********/
/**********  escuchar de manera dinamica el boton para eliminar de manera correta la tarea seleccionada **********/
