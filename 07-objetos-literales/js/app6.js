// Destructuring de Objetos Aninados
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

const{nombre}=producto;
const{informacion}=producto;
const{informacion: {fabricacion}}=producto;
const{informacion: {fabricacion: {pais}}}=producto;

  console.log(pais);