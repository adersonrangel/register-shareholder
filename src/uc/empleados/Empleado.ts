export class Empleado {
    private _nombre: string;
    private _apellido: string;
    private _edad: number;

    constructor(nombre: string, apellido: string, edad: number) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get nombre(): string {
        return this._nombre;
    }

    get apellido(): string {
        return this._apellido;
    }

    get edad(): number {
        return this._edad;
    }

    getNombreCompleto(): string {
        return `${this._nombre} ${this._apellido}`;
    }
}