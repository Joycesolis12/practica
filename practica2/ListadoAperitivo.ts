// Patrón Singleton para el listado de aperitivos
import { Aperitivo } from "./Aperitivo";
export class ListadoAperitivos {
    private static instance: ListadoAperitivos;
    private aperitivos: Aperitivo[] = [];
  
    private constructor() {}
  
    static getInstance(): ListadoAperitivos {
      if (!ListadoAperitivos.instance) {
        ListadoAperitivos.instance = new ListadoAperitivos();
      }
      return ListadoAperitivos.instance;
    }
  
    agregarAperitivo(aperitivo: Aperitivo): void {
      this.aperitivos.push(aperitivo);
    }
  
    obtenerAperitivos(): Aperitivo[] {
      return this.aperitivos;
    }
  }
  