import { Sala } from "./Sala";
import { Aperitivo } from "./Aperitivo";
import { Cliente } from "./Cliente";
import { CineObserver } from "./CineObserver";
import { ListadoAperitivos } from "./ListadoAperitivo";
import { ComboDecorator } from "./ComboDecorator";
import { Cartelera } from "./Cartelera";
import { Pelicula } from "./Pelicula";

const pelicula1 = new Pelicula('John Wick');
const sala1 = new Sala(3, 10); 
const aperitivo1 = new Aperitivo('Palomitas carameladas');
const aperitivo2 = new Aperitivo('Hot-dog');

const cliente1 = new Cliente('Andy Rojas', pelicula1, sala1, 10, [aperitivo1, aperitivo2], []);

const listadoAperitivos = ListadoAperitivos.getInstance();
listadoAperitivos.agregarAperitivo(aperitivo1);
listadoAperitivos.agregarAperitivo(aperitivo2);

cliente1.productosConsumidos.push(listadoAperitivos.obtenerAperitivos()[0]); // Cliente elige un aperitivo más

const cartelera = new Cartelera();
const cineObserver = new CineObserver();
cartelera.agregarObservador(cineObserver);
cartelera.notificarNuevaPelicula(pelicula1);

const comboDecorator = new ComboDecorator(cliente1);
comboDecorator.agregarCombo([aperitivo1, aperitivo2]);

cliente1.mostrarDetalle(); // Muestra el detalle del cliente
