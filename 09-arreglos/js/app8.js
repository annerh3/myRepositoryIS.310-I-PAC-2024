const personas = [
    {
        nombre: 'Juan',
        apellido: 'Peres',
        edad: 20
    },
    {
        nombre: 'Maria',
        apellido: 'Mejia',
        edad: 30
    },
    {
        nombre: 'Marlen',
        apellido: 'Lopez',
        edad: 18
    },
    {
        nombre: 'Ricardo',
        apellido: 'Rodriguez',
        edad: 22
    }
    ]
// con .map
const nuevoArreglo = personas.map( (persona)=> {
    return `${persona.nombre} ${persona.apellido}`;
} );

console.log(nuevoArreglo);

const nuevoArreglo2 = personas.map( (persona)=> {
    return {
        nombreCompleto: `${persona.nombre} ${persona.apellido}`,
        edad: persona.edad
    }
} );

console.log(nuevoArreglo2);

//con .forEach => no retorna data
const nuevoArreglo3 = personas.forEach( (persona)=> {
    return `${persona.nombre} ${persona.apellido}`;
} );

console.log(nuevoArreglo3);

const nuevoArreglo4 = personas.forEach( (persona)=> {
    return {
        nombreCompleto: `${persona.nombre} ${persona.apellido}`,
        edad: persona.edad
    }
} );

console.log(nuevoArreglo4);