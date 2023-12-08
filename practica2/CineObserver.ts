// Patrón Observer para notificar cambios de estado en las películas
import { Pelicula } from "./Pelicula";
export interface Observer {
    actualizar(pelicula: Pelicula): void;
  }
  
 export class CineObserver implements Observer {
    actualizar(pelicula: Pelicula): void {
      console.log(`¡Nueva película disponible! ${pelicula.nombre}`);
    }
  }