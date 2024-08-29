import { Registro } from "./AddTodoForm.js";
import { ListaDeTareas } from "./TodoList.js";


const Formulario = document.getElementById('formulario');
const Input = document.getElementById('inputMens');

// Función para registrar la tarea
const registroDeTarea = (e) => {
  e.preventDefault(); 
  
  const nuevaTarea = Input.value.trim();
  
  if (nuevaTarea) {
    Registro(nuevaTarea);
    Input.value = '';
    ListaDeTareas();
  } else {
    console.log("No se puede agregar una tarea vacía.");
  }
};

Formulario.addEventListener('submit', registroDeTarea);
document.addEventListener('DOMContentLoaded', ListaDeTareas);
