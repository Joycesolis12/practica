// Patrón Decorator para crear combos de comida
import { Cliente } from "./Cliente";
import { Aperitivo } from "./Aperitivo";
export class ComboDecorator {
    constructor(private cliente: Cliente) {}
  
    agregarCombo(combo: Aperitivo[]): void {
      this.cliente.productosConsumidos.push(...combo);
    }
  }
  