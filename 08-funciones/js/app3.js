function sumar (a,b){ // estas variables (a,b), en este momento, se llaman PARAMETROS DE LA FUNCION
    console.log(a+b); // los parametros no cambian
}

sumar(1,5); // enviar el ARGUMENTO  a la funcion.
sumar(100,200); // Argumentos cambian


function saludar (nombre,apellido) {
    console.log(`Hola, ${nombre} ${apellido}!`);
    }
saludar('Juan', 'Perez');