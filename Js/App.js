import { Registro } from "./AddTodoForm.js";
import { ListaDeTareas } from "./TodoList.js";
const Formulario = document.getElementById('formulario');
const Input = document.getElementById('inputMens');
const InputDate = document.getElementById('inputDate');
const InputTime = document.getElementById('inputTime');
const NameUser = document.getElementById('nameUser');
const BotonName = document.querySelector('.edit');
const modal = new bootstrap.Modal(document.getElementById('nameModal'));
const saveNameBtn = document.getElementById('saveNameBtn');
const newNameInput = document.getElementById('newNameInput');



// Función para registrar la tarea
const registroDeTarea = (e) => {
  e.preventDefault(); 
  
  const nuevaTareaTexto = Input.value.trim();
  const nuevaTareaFecha = InputDate.value;
  const nuevaTareaHora = InputTime.value;
  const nuevaTareaNombre = NameUser.innerText;
  
  if (nuevaTareaTexto && nuevaTareaFecha && nuevaTareaHora && nuevaTareaNombre) {
    Registro(nuevaTareaTexto, nuevaTareaFecha, nuevaTareaHora, nuevaTareaNombre);
    Input.value = '';
    InputDate.value = '';
    InputTime.value = '';
    ListaDeTareas();
  } else {
    console.log("No se puede agregar una tarea vacía.");
  }
};


// Funcion para actulizar reloj
function ActualizarReloj() {
  const reloj = document.getElementById('reloj');
  const horaActual = new Date();

  const horas = horaActual.getHours().toString().padStart(2, '0')
  const minutos = horaActual.getMinutes().toString().padStart(2, '0')
  const segundos = horaActual.getSeconds().toString().padStart(2, '0')

  reloj.textContent = `${horas}:${minutos}:${segundos}`
}

// Reloj
setInterval(ActualizarReloj, 1000);


//Evento del formulario
Formulario.addEventListener('submit', registroDeTarea);

// Configuracion de la fecha
document.addEventListener('DOMContentLoaded', () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  const minDate = `${year}-${month}-${day}`;
  InputDate.setAttribute('min', minDate);

  ListaDeTareas();
});

// Evento para abrir la modal
BotonName.addEventListener('click', () => {
  modal.show();
});

// Evento para actualizar el nombre
saveNameBtn.addEventListener('click', () => {
  const nuevoNombre = newNameInput.value.trim();
  if (nuevoNombre) {
    document.querySelector('.cont-init span').textContent = nuevoNombre;
    modal.hide();
  }
});