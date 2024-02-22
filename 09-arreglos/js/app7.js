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


// for(let i=0; i<=personas.length;i++){
//     console.log(personas[i]);
// }

// personas.forEach(function(persona){
//     console.log(persona);
// })

personas.forEach(persona => console.log(persona));