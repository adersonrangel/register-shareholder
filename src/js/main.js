import { Empleado } from "../uc/empleados/Empleado";

let contadorEmpleados = window.initialEmployeeCount || 0;

const form = document.getElementById("formEmpleado");
const btnCrear = document.getElementById("btnAddUser");

form?.addEventListener("submit", (e) => {
  
  e.preventDefault();

  // Verificar validación HTML5 nativa primero
  const inputs = form.querySelectorAll("input");
  let isFormValid = true;

  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      isFormValid = false;
      // Trigger la validación visual
      input.reportValidity();
    }
  });

  // Verificar mensajes de validación existentes
  const validationSpans = document.querySelectorAll("[data-valmsg-for]");
  validationSpans.forEach((span) => {
    if (span.textContent !== "") {
      isFormValid = false;
    }
  });

  if (!isFormValid) {    
    return false;
  }

  
  const txtNombre = document.getElementById("Nombre").value.trim();
  const txtApellido = document.getElementById("Apellido").value.trim();
  const txtEdad = document.getElementById("Edad").value;

  if (!txtNombre || !txtApellido || !txtEdad) {   
    return false;
  }

  const noDataDiv = document.getElementById("noData");
  if (noDataDiv) {
    noDataDiv.classList.add("hidden");
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
