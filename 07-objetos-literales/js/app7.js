"use strict";
const producto = {  
    nombre : 'Bicicleta' ,
    precio : 4999,
    modelo : 'Carrera',
  };
  //con FREEZE no se puede eliminar o editar prodpiedades del objeto. se vuelve inmutable.
Object.freeze(producto);

// producto.disponible = true;
// delete producto.precio

// producto.precio = 5000;

  console.log(producto);
  console.log(Object.isFrozen (producto));