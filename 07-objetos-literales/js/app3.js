const producto = {  
          nombre : 'Bicicleta' ,
        precio : 4999,
        modelo : 'Carrera',
        disponible : true
    };

    // Agregar propiedades
    producto.color = 'Rojo';

     // Quitar propiedades
     delete producto.precio;


    console.table(producto);