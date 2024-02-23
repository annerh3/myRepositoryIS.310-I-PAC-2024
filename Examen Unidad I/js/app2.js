// Crear un Registro de Alumnos
let op;
let info;
let listaAlumnos = [];
let estado;
let id = 0;
let k=0
alert('Registro de Alumnos')
do{
    
    
        listaAlumnos[k] = 
        {
            nombreAlumno: prompt("Ingrese el Nombre del Alumno: "),
            edadAlumno: parseInt(prompt("Ingrese la Edad del Alumno: ")),
            cfcAlumno: parseInt(prompt("Ingrese la Calificacion del Alumno: "))
        };

        if(listaAlumnos[k].cfcAlumno >= 65){
            listaAlumnos[k].estado = 'Aprobado'
        } else{
            listaAlumnos[k].estado = 'Reprobado'
        }
    
    k++
    
    op = parseInt(prompt("Desea ingresar otro alumno? \n0 -> No. Mostrar Lista\n1 -> Si. Agregar otro alumno: "))
}while( op != 0)

console.log(listaAlumnos);

console.log('Lista de Alumnos: ');
for(i=0;i<=listaAlumnos.length;i++)
{
    id++
    console.log(`${id}. Nombre: ${listaAlumnos[i].nombreAlumno}, Edad: ${listaAlumnos[i].edadAlumno}, ${listaAlumnos[i].estado}`);
}
// console.log(`${id}. Nombre: ${info.nombreAlumno}, Edad: ${20}, ${estado}`);


// todos los objetos(alumnos) iran en un arreglo

