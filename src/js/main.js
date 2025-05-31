import { Empleado } from "../uc/empleados/Empleado";

const btnCrear = document.getElementById("btnAddUser");

btnCrear?.addEventListener("click", () => {
  const txtNombre = document.getElementById("txtNombre").value;
  const txtApellido = document.getElementById("txtApellido").value;
  const txtEdad = document.getElementById("txtEdad").value;

  agregarEmpleado(txtNombre, txtApellido, txtEdad);
});

function agregarEmpleado(nombre, apellido, edad) {
  let empleado1 = new Empleado(nombre, apellido, edad);
  console.log(empleado1.nombre); // Juan

  let listaEmpleados = document.getElementById("empleados");
  if (listaEmpleados) {
    let empleadoItem = document.createElement("li");
    empleadoItem.textContent = `${empleado1.nombre} ${empleado1.apellido}, Edad: ${empleado1.edad}`;
    listaEmpleados.appendChild(empleadoItem);
  }
}
