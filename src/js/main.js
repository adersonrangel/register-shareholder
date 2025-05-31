import { Empleado } from "../uc/empleados/Empleado";

let contadorEmpleados = window.initialEmployeeCount || 0;

const btnCrear = document.getElementById("btnAddUser");

btnCrear?.addEventListener("click", () => {
  const txtNombre = document.getElementById("txtNombre").value;
  const txtApellido = document.getElementById("txtApellido").value;
  const txtEdad = document.getElementById("txtEdad").value;

  const noDataDiv = document.getElementById("noData");
  if (noDataDiv) {
    noDataDiv.style.display = "none";
  }
  agregarEmpleado(txtNombre, txtApellido, txtEdad);
});

function agregarEmpleado(nombre, apellido, edad) {
  let empleado1 = new Empleado(nombre, apellido, edad);

  let listaEmpleados = document.getElementById("empleados");
  if (listaEmpleados) {
    let empleadoItem = document.createElement("li");
    empleadoItem.textContent = `${empleado1.nombre} ${empleado1.apellido}, Edad: ${empleado1.edad}`;
    listaEmpleados.appendChild(empleadoItem);
    contadorEmpleados++;

    const contadorElement = document.getElementById("totalEmpleados");
    if (contadorElement) {
      contadorElement.textContent = `Total de empleados: ${contadorEmpleados}`;
    }
  }
}
