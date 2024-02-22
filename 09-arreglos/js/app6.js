const persona = {
    nombre: 'Juan',
    apellido: 'Peres',
    edad: 20
}

const {edad} = persona;

// console.log(edad);

const numeros = [100, 200, 300, 400, 500];

const [primero, segundo] = numeros
const [, ,tercero] = numeros
const [uno, dos, ... resultado] = numeros;


console.log(primero, segundo);
console.log(tercero);
console.log(resultado);