const producto = {  
    nombre : 'Bicicleta' ,
    precio : 4999,
    modelo : 'Carrera',
  };

  const medidas = {
    peso: '20 Libras',
    dimensiones: '1.5 Metros'
  }

//   console.log(producto);
//   console.log(medidas);

  const resultado = Object.assign (producto,medidas);

  console.log(resultado);

  // usando el 'Spread Operator' o 'Rest Operator'

  const resultado2 = {...producto,...medidas}; // esta es mas utilizada
    console.log(resultado2);

    const resultado3 = {...producto,medidas}; // esta es mas utilizada
    console.log(resultado3);
    