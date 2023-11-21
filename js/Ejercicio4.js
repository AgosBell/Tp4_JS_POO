/*Escribe una clase Producto para crear objetos. 
Estos objetos, deben presentar las propiedades código, nombre y precio, 
además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.*/

class Producto {
    constructor(nombre, codigo, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    imprimir_datos() {
      document.write(`<h2>Detalles de ${this.nombre}</h2>
    <ul>
      <li>Código: ${this.codigo}</li>
      <li>Precio: ${this.precio}</li>
    </ul>`);
    }
  }
  
  const adidas = new Producto("SuperStar", "ADS-01", "$95.000");
  const nike = new Producto("AirMax", "NK-005", "$98.000");
  const reebok = new Producto("NanoX3", "Rbk-099", "$81.500");
  
  
  const celulares = [adidas,nike,reebok];
  
  celulares[0].imprimir_datos();
  celulares[1].imprimir_datos();
  celulares[2].imprimir_datos();
