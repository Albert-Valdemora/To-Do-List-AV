const Contenedor = document.querySelector('.cont-body');

export const ListaDeTareas = () => {
  const tareas = JSON.parse(localStorage.getItem("mensaje")) || [];

  // Limpiamos el contenedor antes de añadir nuevas tareas
  Contenedor.innerHTML = '';

  // elemento ul
  const listaElementos = document.createElement('ul');

  // Recorremos las tareas y las añadimos al contenedor
  tareas.forEach((tarea, index) => {
    const tareaElemento = document.createElement('li');
    tareaElemento.classList.add('tarea-item');
    tareaElemento.classList.add('animate__animated');
    tareaElemento.classList.add('animate__flipInY');

    tareaElemento.innerHTML = `
      <input type="checkbox" id="tarea-${index}" ${tarea.completado ? 'checked' : ''}>
      <label for="tarea-${index}" class="tarea ${tarea.completado ? 'comple' : ''}">${tarea.nombre} | ${tarea.fecha} | ${tarea.hora} | ${tarea.mensaje} </label>
      <i data-index="${index}" class="bi bi-trash3 btn-borrar"></i>
    `;


    const checkbox = tareaElemento.querySelector(`input[type="checkbox"]`);
    const label = tareaElemento.querySelector('label');

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        label.classList.add('comple');
      } else {
        label.classList.remove('comple');
      }

      tareas[index].completado = checkbox.checked;
      localStorage.setItem("mensaje", JSON.stringify(tareas));
    });

    // Añadir el elemento li a la ul
    listaElementos.appendChild(tareaElemento);
  });

  // Añadir la ul al contenedor principal
  Contenedor.appendChild(listaElementos);

  // Agregamos funcionalidad para eliminar tareas
  document.querySelectorAll('.btn-borrar').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = e.target.dataset.index;
      borrarTarea(index);
    });
  });
};

// Función para eliminar tareas
const borrarTarea = (index) => {
  const tareas = JSON.parse(localStorage.getItem("mensaje")) || [];
  tareas.splice(index, 1);
  localStorage.setItem("mensaje", JSON.stringify(tareas));
  ListaDeTareas();
};
