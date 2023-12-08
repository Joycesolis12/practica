import { Sala } from "./Sala";
import { Aperitivo } from "./Aperitivo";
import { Pelicula } from "./Pelicula";
 export class Cliente {
    constructor(
      public nombre: string,
      public pelicula: Pelicula,
      public sala: Sala,
      public asiento: number,
      public aperitivosGratis: Aperitivo[],
      public productosConsumidos: Aperitivo[]
    ) {}
  
    mostrarDetalle(): void {
      console.log(`
        Cliente: ${this.nombre}
        Película: ${this.pelicula.nombre}
        Sala: ${this.sala.numero}
        Asiento: ${this.asiento}
        Aperitivos Gratis: ${this.aperitivosGratis.map((a) => a.nombre).join(', ')}
        Productos Consumidos: ${this.productosConsumidos.map((p) => p.nombre).join(', ')}
      `);
    }
  }