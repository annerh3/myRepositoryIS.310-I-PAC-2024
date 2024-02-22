// function saludar (nombre='Desconocido',apellido= '') {
//     console.log(`Hola, ${nombre} ${apellido}!`);
//     }
// saludar();

iniciarApp();

function iniciarApp () {
    console.log('Iniciando App...');
    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda funcion');
    usuario_Autentificado('Juan Perez');
}

function usuario_Autentificado(usuario) {
    console.log('Autentificando usuario. Espere...');
    console.log('Usuario autentificado correctamente: ' + usuario);
}