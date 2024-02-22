const producto = {  // objeto literal
// propiedad : valor
    nombre : 'Bicicleta' ,
    precio : 4999,
    modelo : 'Carrera',
    disponible : true
};

// console.log(producto);
console.log(Object.keys(producto)); // Retorna un array con los nombres de las propiedades del objeto (izquierda)
console.log(Object.values(producto));  // Retorna un array con los valores de las propiedades del objeto (derecha)
console.log(Object.entries(producto));
console.table(Object.entries(producto));