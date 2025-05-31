import { Empleado } from "../uc/empleados/Empleado";

const btnCrear = document.getElementById("btnAddUser");

btnCrear?.addEventListener("click", () => {
  agregarEmpleado();
});

function agregarEmpleado() {
  let empleado1 = new Empleado("Aderson", "Pérez", 30);
  console.log(empleado1.nombre); // Juan

  let listaEmpleados = document.getElementById("empleados");
  if (listaEmpleados) {
    let empleadoItem = document.createElement("li");
    empleadoItem.textContent = `${empleado1.nombre} ${empleado1.apellido}, Edad: ${empleado1.edad}`;
    listaEmpleados.appendChild(empleadoItem);
  }
}
