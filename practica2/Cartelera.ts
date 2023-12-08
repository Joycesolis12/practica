// Implementación del patrón Observer
import { Observer  } from "./CineObserver";
import { Pelicula } from "./Pelicula";
export class Cartelera {
    private observadores: Observer[] = []; 
  
    agregarObservador(observador: Observer): void {
      this.observadores.push(observador);
    }
  
    notificarNuevaPelicula(pelicula: Pelicula): void {
      this.observadores.forEach((observador) => observador.actualizar(pelicula));
    }
  }