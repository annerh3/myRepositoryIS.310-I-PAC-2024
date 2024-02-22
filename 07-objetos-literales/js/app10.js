// Objeto Literal
const producto = {  
    nombre : 'Bicicleta' ,
    precio : 4999,
    modelo : 'Carrera',
  };

  // Objeto Constructor

  function Producto (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
  }

  const producto2 = new Producto('Monitor de 27"', 7000);
  console.log(producto);
  console.log(producto2);
