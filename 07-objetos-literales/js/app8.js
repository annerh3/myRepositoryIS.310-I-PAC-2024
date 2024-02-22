"use strict";
const producto = {  
    nombre : 'Bicicleta' ,
    precio : 4999,
    modelo : 'Carrera',
  };
// con SEAL puedo manipular las propiedades, pero no borrar una o varias.
  Object.seal (producto);

  producto.precio = 5000;

//   delete producto.precio;
// producto.imagen = 'la_muestra.jpg';


  console.log(producto);
console.log(Object.isSealed(producto));