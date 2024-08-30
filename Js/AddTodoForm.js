export function Registro(mensaje, fecha, hora, nombre) {
  
  // generamos un id
  const id = Date.now() + Math.random().toString(36).substr(2, 9);

  // captura de datos del localStorage
  let datos = localStorage.getItem("mensaje");

  // Verifica si hay datos previos, si no, inicia con un array vacío
  datos = datos ? JSON.parse(datos) : [];

  const tareaDuplicada = datos.some(tarea => tarea.mensaje.toLowerCase() === mensaje.toLowerCase())

  if (tareaDuplicada) {
    console.log('Tarea duplicada :(');
    return;
  }
  
  // añadimos el nuevo mensaje
  datos.push({
    id,
    mensaje,
    fecha,
    hora,
    nombre,
    completado: false
  });
  

  // lo guardamos en el localStorage
  localStorage.setItem("mensaje", JSON.stringify(datos));
}
