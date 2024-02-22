//objeto Aninado
const producto = {  
    nombre : 'Bicicleta' ,
    precio : 4999,
    modelo : 'Carrera',
    disponible : true,
    informacion: 
    {
        medidas: 
        {
            peso: '20 Libras',
            dimension: '1.5 metros'
        },
        fabricacion: 
        {
            pais: 'China'
        }
    }
  };
//   console.log(producto);
//   console.log(producto.informacion);
  console.log(producto.informacion.medidas.peso);