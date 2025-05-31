import { describe, test, expect } from "vitest";
import { Empleado } from "../uc/empleados/Empleado";

describe("Empleado Class", () => {
  test("should create an instance of Empleado", () => {
    const empleado1 = new Empleado("Juan", "Pérez", 30);
    expect(empleado1).toBeInstanceOf(Empleado);
  });

  test("should have correct properties", () => {
    const empleado1 = new Empleado("Juan", "Pérez", 30);
    expect(empleado1.nombre).toBe("Juan");
    expect(empleado1.apellido).toBe("Pérez");
    expect(empleado1.edad).toBe(30);
  });

  test("should return full name", () => {
    const empleado1 = new Empleado("Juan", "Pérez", 30);
    expect(empleado1.getNombreCompleto()).toBe("Juan Pérez");
  });
});
