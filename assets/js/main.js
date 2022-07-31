/**********  importacion de datos **********/
import { dataAssignments } from "./dataAssignment.js";
/**********  variables globales **********/
const buttonAdd = document.getElementById("addAssingment");
const containerAssignments = document.getElementById("assignmentsContainer");
const totalAssingment = document.getElementById("totalAssignmets");
const totalFinishAssignments = document.getElementById("totalFinishAssignments");
/**********  generar id **********/
function idGenerator() {
  return parseInt((Math.random() * new Date().getUTCMilliseconds()));
} 
function deleteAssignment(id) {
  // let deletedAssignments = document.getElementById(`${id}`)
  // deletedAssignments.remove(deletedAssignments);
  console.log(id);
 }
/**********  crear plantilla a incertar en html **********/
function renderAssignment(id, name) {
  return  `<tr id="${id}" class="assignments" >
  <th>${id}</th>
  <th>${name} 
    <input type="checkbox" name="" id="" value="first_checkbox">    
    <button onclick="deleteAssignment(${id})"> x </button>
  </th>
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
 
 containerAssignments.innerHTML += renderAssignment (newAssingment.id, newAssingment.name)
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
  newDataAssingment(idGenerator(), assingmentName);
  totalAssingmets(totalAssingment);
});
/**********  crear funcion para eliminar un la tarea clickeada en el arreglo **********/

/**********  escuchar de manera dinamica el boton para eliminar de manera correta la tarea seleccionada **********/
//  document.querySelectorAll("button").forEach((element) => {
//   element.addEventListener("click", (e) => {

//     deleteAssignment();
//   });
// });  